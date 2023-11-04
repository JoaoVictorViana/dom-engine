import { Component, ComponentWithCallback } from "@/types/core";

export function withCallback(container: Component | ComponentWithCallback): container is ComponentWithCallback {
    return (container as ComponentWithCallback).callbacks !== undefined
}