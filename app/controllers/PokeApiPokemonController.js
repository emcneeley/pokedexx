import { Pop } from "../utils/Pop.js"
import { pokeApiPokemonService } from "../services/PokeApiPokemonService.js"
import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"




function _drawPokemonList() {
    console.log('HERE IS MY POKEMON', AppState.pokemon)
    let template = ''

    AppState.pokemon.forEach(p => {
        template += /*html*/`
        <div class="col-3">
        <p class ="fs-4 selectable" onclick="app.PokeApiPokemonController.getActivePokemon('${p.url}')" role="button"> ${p.name}</p>
        </div>
        `
    })
    setHTML('app', template)
}

function _drawActivePokemon() {
    // @ts-ignore
    setHTML('active-pokemon', AppState.activePokemon.ActivePokemonTemplate)
}



export class PokeApiPokemonController {
    constructor() {
        AppState.on('activePokemon', _drawActivePokemon)
        AppState.on('pokemon', _drawPokemonList)
        this.getPokemonFromPokeApi()
    }


    async getPokemonFromPokeApi() {
        try {
            await pokeApiPokemonService.getpokemon()
        } catch (error) {
            Pop.error(error)
        }
    }

    async getActivePokemon(url) {
        try {
            await pokeApiPokemonService.getActivePokemon(url)
        } catch (error) {
            Pop.error(error)
        }
    }
}