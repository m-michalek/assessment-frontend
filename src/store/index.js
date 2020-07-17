import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: null,
    charactersDetails: null,
    episodes: null,
    episodesDetails: null,
    locations: null,
    locationsDetails: null,
    modalStatus: false,
    episodeImgUrls: [
      "https://vignette.wikia.nocookie.net/rickandmorty/images/4/4b/S1e1_Rick-and-morty.png/revision/latest?cb=20160904220006",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/f/fb/Rixty_Minutes_Better_Picture.png/revision/latest?cb=20160917051511",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/6/6b/S4e3_random_job_crew.jpg/revision/latest?cb=20191128193544",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/2/2c/S3e7_Tales_From_the_Citadel.png/revision/latest?cb=20170912212129",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/2/2e/Something_Ricked_This_Way_Comes.png/revision/latest?cb=20160918020616",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/2/29/A_Rickle_in_Time.png/revision/latest?cb=20160920022627",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/d/d7/Lawnmower_Dog.png/revision/latest?cb=20160906083546",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/0/08/S2e5_outside_church.png/revision/latest?cb=20160926033103",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/1/1b/Ricksy_business_screencap.png/revision/latest?cb=20140408154817",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/d/d3/Raising_Gazorpazorp.png/revision/latest?cb=20160917043437",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/b/b8/Rick-and-Morty-Season-1-Episode-6-10-4c17.jpg/revision/latest?cb=20150915150728",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/e/e7/Meeseeks_and_Drestroy.png/revision/latest?cb=20160913060341",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/d/d3/Anatomy_Park_7.png/revision/latest?cb=20160913082442",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/e/e0/Mortynight_Run.png/revision/latest?cb=20160919065322",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/1/13/Auto_Erotic_Assimilation.png/revision/latest?cb=20160923081724",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/4/49/Total_Rickall.png/revision/latest?cb=20160920093829",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/1/17/The_Ricks_Must_be_Crazy.png/revision/latest?cb=20170812013955",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/e/e3/Screenshot_2015-09-28_at_8.12.32_AM.png/revision/latest?cb=20150928121615",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/e/e6/Look_who%27s_purging_now_HQ.png/revision/latest?cb=20150930233241",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/2/2f/WeddingSquanchEp.png/revision/latest?cb=20160922184131",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/a/ad/S3e10_.png/revision/latest?cb=20170925231207",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/2/2b/The_ABC_of_Beth.png/revision/latest?cb=20171002225115",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/9/98/Rm.s03e08.s05.png/revision/latest?cb=20171003105531",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/8/89/Rms03e06.s29.png/revision/latest?cb=20171004024102",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/9/9b/S3e5_02h19m26s212.png/revision/latest?cb=20191019033601",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/8/82/S3e4_ready_to_go.png/revision/latest?cb=20170820095931",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/2/2e/Pickle_Rick_Episode.jpg/revision/latest?cb=20170807204243",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/b/bc/S3e1_RickandBug.png/revision/latest?cb=20170402072004",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/e/e9/S4e1_morty_pockets_crystal.jpg/revision/latest?cb=20191111050849",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/6/63/S4e2_morty_smash.png/revision/latest?cb=20191122023426",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/b/b4/S04e04_Claw_and_Hoarder-_Special_Ricktim%27s_Morty.png/revision/latest?cb=20191209213015",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/7/74/S4e5_2019-12-29-14h10m35s619.png/revision/latest?cb=20191229202517",
    ],
    locationImgUrls: [
      "https://vignette.wikia.nocookie.net/rickandmorty/images/a/ac/S2e5_alphabetrium.png/revision/latest?cb=20160925042444",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/3/35/Pluto.png/revision/latest?cb=20150929103139",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/4/49/Screenshot_2016-01-18_at_6.02.23_PM.png/revision/latest?cb=20160118232300",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/e/e1/S1e10_hideout_planet.png/revision/latest?cb=20160911012541",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/1/18/S2e2_blueish_windshield_washing_planet.png/revision/latest?cb=20170404103440",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/2/2e/S2e5_bird_world.png/revision/latest?cb=20160926033803",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/7/7a/Screenshot_2015-10-05_at_1.12.51_PM.png/revision/latest?cb=20151005171418",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/d/d7/S3e5_resort_planet.png/revision/latest?cb=20171119204625",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/f/fc/S2e5_Earth.png/revision/latest?cb=20160926065208",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/e/e5/S4e1_2019-11-13-12h16m09s351.png/revision/latest?cb=20191114002233",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/d/da/S4e3_2019-11-28-13h18m09s324.png/revision/latest?cb=20191128184508",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/2/20/GromflomOpen.png/revision/latest?cb=20170413102849",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/9/98/S2e3_mount_morty_and_summer.png/revision/latest?cb=20160923231412",
      "https://vignette.wikia.nocookie.net/rickandmorty/images/5/55/S3E8_alien_sunset.png/revision/latest?cb=20180217153421",
    ],
  },
  mutations: {
    fetchCharacters: (state, payload) => (state.characters = payload),
    fetchCharacterById: (state, payload) => (state.charactersDetails = payload),
    fetchEpisodes: (state, payload) => (state.episodes = payload),
    fetchEpisodeById: (state, payload) => (state.episodesDetails = payload),
    fetchLocations: (state, payload) => (state.locations = payload),
    fetchLocationById: (state, payload) => (state.locationsDetails = payload),
    toggleModal: (state) => (state.modalStatus = !state.modalStatus),
  },
  actions: {
    fetchCharacters: async ({ commit }) => {
      const response = await axios("https://rickandmortyapi.com/api/character");
      commit("fetchCharacters", response.data.results);
    },
    fetchCharacterById: async ({ commit }, id) => {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      commit("fetchCharacterById", response.data);
    },
    fetchEpisodes: async ({ commit }) => {
      const response = await axios("https://rickandmortyapi.com/api/episode");
      commit("fetchEpisodes", response.data.results);
    },
    fetchEpisodeById: async ({ commit }, id) => {
      const response = await axios(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
      commit("fetchEpisodeById", response.data);
    },
    fetchLocations: async ({ commit }) => {
      const response = await axios("https://rickandmortyapi.com/api/location");
      commit("fetchLocations", response.data.results);
    },
    fetchLocationById: async ({ commit }, id) => {
      const response = await axios(
        `https://rickandmortyapi.com/api/location/${id}`
      );
      commit("fetchLocationById", response.data);
    },
    toggleModal: async ({ commit }) => {
      commit("toggleModal");
    },
  },
  getters: {
    getCharacters: (state) => state.characters,
    getCharactersDetails: (state) => state.charactersDetails,
    getEpisodes: (state) => state.episodes,
    getEpisodesDetails: (state) => state.episodesDetails,
    getLocations: (state) => state.locations,
    getLocationsDetails: (state) => state.locationsDetails,
    getEpisodeImgUrls: (state) => state.episodeImgUrls,
    getLocationImgUrls: (state) => state.locationImgUrls,
    getModalStatus: (state) => state.modalStatus,
  },
  modules: {},
});
