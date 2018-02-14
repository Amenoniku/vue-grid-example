import API from '../../api/tiles.json'

const GET_DATA = 'exam2_GET_DATA'

export default {
  namespaced: true,
  state: {
    tiles: []
  },
  mutations: {
    [GET_DATA] (state, tiles) {
      state.tiles = tiles
    },
  },
  actions: {
    getTiles ({commit}) {
      commit(GET_DATA, API.tiles)
    }
  }
}
