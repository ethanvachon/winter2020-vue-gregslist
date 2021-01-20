import { AppState } from '../AppState'
import { api } from './AxiosService'

class HousesService {
  async getHouses() {
    // fetch data
    const res = await api.get('houses')
    // add to AppState
    AppState.houses = res.data
    console.log(AppState.houses)
  }

  async getOne(id) {
    const res = await api.get('houses/' + id)
    AppState.activeHouse = res.data
  }
}

export const housesService = new HousesService()
