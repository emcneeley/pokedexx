import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PokeApiPokemonController } from "./controllers/pokeApiPokemonController.js";

export const router = [
  {
    path: '#/pokemon',
    controller: PokeApiPokemonController
  }
]