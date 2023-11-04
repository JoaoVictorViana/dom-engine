import {
  Component,
  TransformCallbacks as ITransformCallbacks,
} from "@/types/core";

export class TransformCallbacks implements ITransformCallbacks<string> {
  mappedSource: {
    [key: string]: string;
  } = {
    onclick: "transform-click",
    onchange: "transform-change",
    onkeyup: 'transform-keyup'
  };

  exec(container: string): string {
    return Object.keys(this.mappedSource).reduce(
      (carry: string, attribute: string) => carry.replace(attribute, this.mappedSource[attribute]),
      container
    );
  }

  apply(): void {
    Object.keys(this.mappedSource).forEach(
      (attribute: string) => {
        const elements = document.querySelectorAll<HTMLElement & { [key: string]: Function }>(`[${this.mappedSource[attribute]}]`)
        elements.forEach((element) => {
          const callback = element.getAttribute(this.mappedSource[attribute])

          if (!callback) return

          element[attribute] = window.functions[callback]
        })
      },
    );
  }
}
