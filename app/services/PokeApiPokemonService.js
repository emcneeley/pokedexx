import { AppState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"
import { Pokemon } from "../models/Pokemon.js"

class PokeApiPokemonService {
    async getActivePokemon(url) {
        const res = await pokeApi.get(url)
        // let pojoPoke = res.data
        console.log('this is my pojo poke', res.data);
        // @ts-ignore
        AppState.activePokemon = new Pokemon(res.data)
        console.log('poke in the appstate', AppState.activePokemon);
    }


    async getpokemon() {
        const res = await pokeApi('api/v2/pokemon?offset=20&limit=20')
        AppState.pokemon = res.data.results
        console.log(res.data.results)
    }



}

export const pokeApiPokemonService = new PokeApiPokemonService