import { appState } from "../AppState.js"
import { ApiPoke } from "../Models/ApiPoke.js"
import { PokeDetail } from "../Models/PokeDetail.js"
import { PokeServer } from "./AxiosService.js"

class ApiPokesService{
  async getPokeDetails(url) {
    const res = await PokeServer.get(url)
    appState.activePoke = new PokeDetail(res.data)
  }

  
  async getPokes(){
    const res = await PokeServer.get('/api/v2/pokemon')
    appState.apiPokes = res.data.results.map(p => new ApiPoke(p))
  }
}

export const apiPokesService = new ApiPokesService()



