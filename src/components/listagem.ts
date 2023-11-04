import { FunctionComponent, FunctionComponentWithCallbacks } from "@/types/core"
import { Pokemon } from "@/types/app"

type PokemonListagemVariables = {
    listagem: Array<Pokemon>
    
}

export const PokemonListagem: FunctionComponentWithCallbacks<PokemonListagemVariables> = () => ({
    variables: {
        listagem: [],
        
    },
    callbacks: {
        handleSearch: () => console.log('click'),
        handleChange: (e: { target: HTMLInputElement }) => console.log(e.target.value)
    },
    init: function () {
        this.variables.listagem = [
            {
                name: 'Pikachu',
                image: 'teste'
            },
            {
                name: 'Charizard',
                image: 'teste 2'
            }
        ]
    },
    render: function () {
        return `
            <input onkeyup="${this.callbacks.handleChange.name}" placeholder="Pesquise o pokemon">
            <button onclick="${this.callbacks.handleSearch.name}" >Pesquisar</button>
            ${this.variables.listagem.map((pokemon) => `
                <section class="listagem">
                    <div>${pokemon.name}</div>
                    <div>${pokemon.image}
                </section>
            `).join('')}
        `
    }
})