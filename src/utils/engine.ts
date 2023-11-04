import { RendererTransform, Transform } from "@/types/core";
import { TransformCallbacks } from "./transformers";

export class RendererTransformEngine
  implements RendererTransform<Transform, string>
{
  #transformers: Array<Transform> = [];
  constructor() {
    this.#transformers = [new TransformCallbacks()];
  }

  process(container: string): string {
    return this.#transformers.reduce(
      (carry: string, transform: Transform) => transform.exec(container),
      container
    );
  }

  apply(): void {
    this.#transformers.forEach((transform) => transform.apply())
  }
}
