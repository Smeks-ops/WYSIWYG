import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    symbols: null
  },
  mutations: {
    SET_SYMBOLS(state, symbols) {
      state.symbols = symbols
    }
  },
  actions: {
    async getSymbols({ commit }) {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/ticker/24hr"
        )
        commit('SET_SYMBOLS', response.data)
        return response.data
      } catch (error) {
        console.log("There was an error: " + error);
        return error
      }
    }
  },
  modules: {
  }
})
