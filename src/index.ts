import { PokemonListagem } from "./components/listagem";
import { Navbar } from "./components/menu";
import { DOMRenderer } from "./utils/core";

const renderer = new DOMRenderer()
renderer.start([
    Navbar,
    PokemonListagem,
])