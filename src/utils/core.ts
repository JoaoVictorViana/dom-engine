import {
  Component,
  ComponentWithCallback,
  FunctionComponent,
  Renderer,
  RendererTransform,
  Transform,
} from "@/types/core";
import { withCallback } from "./guards";
import { TransformCallbacks } from "./transformers";
import { RendererTransformEngine } from "./engine";

export class DOMRenderer implements Renderer<Element, FunctionComponent> {
  #containers: Array<Component | ComponentWithCallback> = [];
  #tranformEngine: RendererTransformEngine;

  constructor() {
    window.functions = {};
    this.#tranformEngine = new RendererTransformEngine();
  }

  start(containers: Array<FunctionComponent>) {
    this.#containers = containers.map((container) => container());
    this.#containers.forEach((container) => {
      if (withCallback(container)) {
        const callbacks = container.callbacks;
        window.functions = { ...window.functions, ...callbacks };
      }
      container.init();
    });
    this.render();
  }

  root() {
    const rootElement = document.querySelector("#root");
    if (!rootElement) {
      const element = document.createElement("div");
      element.setAttribute("id", "root");
      document.body.appendChild(element);
      return element;
    }

    return rootElement;
  }

  render() {
    const root = this.root();
    root.innerHTML = this.#containers
      .map((container) => this.#tranformEngine.process(container.render()))
      .join("");
    
    this.#tranformEngine.apply()
  }
}
