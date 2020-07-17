<template>
  <div v-if="episodesDetails" class="episodes-details">
    <!-- Modal -->
    <AddEpisodesModal v-if="activeModal === 'AddEpisodesModal'" />
    <AddCharactersModal v-if="activeModal === 'AddCharactersModal'" />
    <AddLocationsModal v-if="activeModal === 'AddLocationsModal'" />
    <DefaultModal v-if="activeModal === 'DefaultModal'" />
    <!-- Modal -->

    <ContentHeader topTitle="Episodesdetails" v-bind:mainTitle="episodesDetails.name" />
    <div class="container fd-col">
      <!-- TODO: Move to own component -->
      <div class="flex w-100 sm-flex-col">
        <div class="w-100">
          <div class="flex fd-col sm-align-items-center">
            <h3>Details:</h3>
            <ul>
              <li class="flex sm-justify-content-center">
                <b>Creator:</b>
                Justin Roiland, Dan Harmon
              </li>
              <li class="flex sm-justify-content-center">
                <b>Regisseur:</b>
                Pete Michels, Bryan Newtonm Justin Roiland, Stephan Sandoval
              </li>
              <li class="flex sm-justify-content-center">
                <b>Number of characters:</b>
                {{episodesDetails.characters.length}}
              </li>
              <li class="flex sm-justify-content-center">
                <b>Episode:</b>
                {{episodesDetails.episode}}
              </li>
            </ul>
          </div>

          <div
            class="flex align-items-center sm-justify-content-center flex-wrap mt-25 max-w-400"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, ipsa! Quidem temporibus ducimus et voluptatum minima rerum dolorum aliquam voluptate consequatur. Saepe, odio inventore voluptatum possimus iure quos velit commodi!</div>
        </div>

        <div
          class="w-100 ta-right sm-ta-center sm-mt-20 flex fd-col sm-align-items-center align-items-end"
        >
          <div style="width: fit-content;">
            <img
              class="max-w-100"
              v-bind:src="rndEpisodeImgUrl"
              v-bind:alt="`Image of the episode ${episodesDetails.name}`"
            />
            <div class="flex justify-content-center">
              <div class="pointer dot active"></div>
              <div class="pointer dot"></div>
              <div class="pointer dot"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- own component -->

      <!-- Data from API  -->
      <ButtonList
        title="Characters:"
        v-bind:buttons="episodesDetails.characters"
        basePath="characters"
        openModal="AddCharactersModal"
      />

      <!-- Mocked data because API does not provide -->
      <ButtonList
        title="Planets:"
        v-bind:mockData="['Earth (C-137)', 'Abadango', 'Post-Apocalyptic Earth']"
        openModal="AddLocationsModal"
      />
      <ButtonList title="Spaceship:" v-bind:mockData="['Space Cruiser']" openModal="DefaultModal" />
      <ButtonList
        title="Vehicle:"
        v-bind:mockData="['Space Cruiser', 'Sand Crawler', 'Car']"
        openModal="DefaultModal"
      />
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader.vue";
import ButtonList from "@/components/ButtonList.vue";
import AddEpisodesModal from "@/components/modal/AddEpisodesModal.vue";
import AddCharactersModal from "@/components/modal/AddCharactersModal.vue";
import AddLocationsModal from "@/components/modal/AddLocationsModal.vue";
import DefaultModal from "@/components/modal/DefaultModal.vue";

export default {
  name: "EpisodesDetails",
  data() {
    return {
      rndEpisodeImgUrl: null
    };
  },
  components: {
    ContentHeader,
    ButtonList,
    AddEpisodesModal,
    AddCharactersModal,
    AddLocationsModal,
    DefaultModal
  },
  computed: {
    episodesDetails() {
      return this.$store.getters.getEpisodesDetails;
    },
    episodeImgUrls() {
      return this.$store.getters.getEpisodeImgUrls;
    },
    activeModal() {
      return this.$store.getters.getModalStatus;
    }
  },
  created() {
    this.$store.dispatch("fetchEpisodeById", this.$route.params.id);

    this.rndEpisodeImgUrl = this.episodeImgUrls[
      Math.floor(Math.random() * this.episodeImgUrls.length)
    ];
  }
};
</script>

<style scoped>
.list-body {
  /* text-align: left; */
}

h3 {
  margin: 0px;

  font-size: 0.8rem;
}

ul {
  padding: 0px;
  margin: 2px 0px 2px 0px;
}

li {
  list-style-type: none;

  font-size: 0.7rem;
}

b {
  font-size: 0.7rem;

  margin-right: 5px;
}

.dot {
  width: 10px;
  height: 10px;

  background-color: #dcdcdc;

  border-radius: 50%;

  margin-left: 2.5px;
  margin-right: 2.5px;
}

.active {
  background-color: #ddc4c4;
}

a {
  text-decoration: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
}
</style>
