import { appState } from "../AppState.js";
import { apiPokesService } from "../Services/apiPokesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function drawApiPokes(){
  let template = ''
  appState.apiPokes.forEach(p=> template += p.ListTemplate)
  setHTML('api-pokes', template)
}

export class ApiPokesController{
  constructor(){
    appState.on('apiPokes', drawApiPokes)
    this.getPokes()
  }

  async getPokes() {
    try {
      await apiPokesService.getPokes()
    } catch (error) {
      console.error('[GetPokes]',error)
      Pop.error(error);
      
    }
    
  }
  async getPokeDetails(url){
    try {
      await apiPokesService.getPokeDetails(url)
    } catch (error) {
      console.error('[getPokeDetails]', error)
      Pop.error(error);
    }
  }
}