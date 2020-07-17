import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    fetchCharacters: (state, payload) => (state.characters = payload),
    fetchEpisodes: (state, payload) => (state.episodes = payload),
    fetchLocations: (state, payload) => (state.locations = payload),
  },
  actions: {
    fetchCharacters: async ({ commit }) => {
      const response = await axios("https://rickandmortyapi.com/api/character");
      commit("fetchCharacters", response.data.results);
    },
    fetchEpisodes: async ({ commit }) => {
      const response = await axios("https://rickandmortyapi.com/api/episode");
      commit("fetchEpisodes", response.data.results);
    },
    fetchLocations: async ({ commit }) => {
      const response = await axios("https://rickandmortyapi.com/api/location");
      commit("fetchLocations", response.data.results);
    },
  },
  getters: {
    getCharacters: (state) => state.characters,
    getEpisodes: (state) => state.episodes,
    getLocations: (state) => state.locations,
  },
  modules: {},
});
