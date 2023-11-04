export type ComponentCallback = {
    [key: string]: Function
}

export type ComponentWithCallback<Variables = any> = Component<Variables> & { callbacks: ComponentCallback }

export type Component<T = any> = {
    variables: T
    init: () => void
    render: () => string    
}

export type FunctionComponent<Variables = any> = () => Component<Variables>

export type FunctionComponentWithCallbacks<Variables = any, F = ComponentCallback> = () => ComponentWithCallback<Variables>

export interface Renderer<T, U> {
    start(container: Array<U>): void
    root(): T
    render(): void
}

export interface Transform<T = any> {
    exec(container: T): string
    apply(): void
}

export interface TransformCallbacks<T = any> extends Transform<T> {}

export interface RendererTransform<T extends Transform, U = any> {
    process(container: U): string
    apply(): void
}