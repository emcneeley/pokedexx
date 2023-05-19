
import { AppState } from "../AppState.js"


export class Pokemon {
    constructor(data) {
        this.name = data.name,
            this.height = data.height,
            this.img = data.sprites.front_shiny
        this.weight = data.weight,
            this.types = data.types,
            this.creatorId = data.creatorId,
            this.creator = data.creator
    }





    get ActivePokemonTemplate() {
        return `
        <div class="card">
          <div class="card-body elevation-5 d-flex flex-column">
            <img src="${this.img}" alt="${this.name}">
            <p> NAME:${this.name} </p>
            <p>HEIGHT:${this.height}</p>
            <p>WEIGHT${this.weight}</p>
          </div>
        </div>
    `
    }
}