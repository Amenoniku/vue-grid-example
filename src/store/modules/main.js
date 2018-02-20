import API from '../../api/tiles.json'

const GET_DATA = 'exam2_GET_DATA'
const PICK_TILE = 'exam2_PICK_TILE'

export default {
  namespaced: true,
  state: {
    tiles: [],
    pickedTile: undefined
  },
  mutations: {
    [GET_DATA] (state, tiles) {
      state.tiles = tiles
    },
    [PICK_TILE] (state, tile) {
      state.pickedTile = tile
    },
  },
  actions: {
    getTiles ({commit}) {
      commit(GET_DATA, API.tiles)
    },
    pickTile ({commit}, tile) {
      commit(PICK_TILE, tile)
    }
  }
}
