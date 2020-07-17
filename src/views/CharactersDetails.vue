<template>
  <div v-if="charactersDetails" class="characters-details">
    <!-- Modal -->
    <AddEpisodesModal v-if="activeModal === 'AddEpisodesModal'" />
    <AddCharactersModal v-if="activeModal === 'AddCharactersModal'" />
    <AddLocationsModal v-if="activeModal === 'AddLocationsModal'" />
    <DefaultModal v-if="activeModal === 'DefaultModal'" />
    <!-- Modal -->

    <ContentHeader topTitle="Charactersdetails" v-bind:mainTitle="charactersDetails.name" />
    <div class="container fd-col">
      <!-- TODO: Move to own component -->
      <div class="flex w-100 sm-flex-col">
        <div class="w-100">
          <div class="flex fd-col sm-align-items-center">
            <h3>Details:</h3>
            <ul>
              <li class="flex sm-justify-content-center">
                <b>Size:</b>
                {{rndNumber(1.30, 2.00)}} Cm
              </li>
              <li class="flex sm-justify-content-center">
                <b>Weight:</b>
                {{rndNumber(40, 90)}} Kg
              </li>
              <li class="flex sm-justify-content-center">
                <b>Hair color:</b>
                {{rndColor()}}
              </li>
              <li class="flex sm-justify-content-center">
                <b>Eye color:</b>
                {{rndColor()}}
              </li>
              <li class="flex sm-justify-content-center">
                <b>Year of birth:</b>
                {{new Date(charactersDetails.created).getFullYear()}}
              </li>
              <li class="flex sm-justify-content-center">
                <b>Gender:</b>
                {{charactersDetails.gender}}
              </li>
            </ul>
          </div>

          <div class="flex align-items-center sm-justify-content-center flex-wrap mt-25">
            <b>Homeland:</b>
            <router-link
              v-bind:to="`/locations/details/${charactersDetails.location.url.match(/(\d+)/)[0]}`"
            >
              <div class="btn ellipsis mt-10 ml-10">{{charactersDetails.location.name}}</div>
            </router-link>
          </div>
        </div>

        <div
          class="w-100 ta-right sm-ta-center sm-mt-20 flex fd-col sm-align-items-center align-items-end"
        >
          <div style="width: fit-content;">
            <img
              class="max-w-100"
              v-bind:src="charactersDetails.image"
              v-bind:alt="`Image of the character ${charactersDetails.name}`"
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
        title="Episodes:"
        v-bind:buttons="charactersDetails.episode"
        basePath="episodes"
        openModal="AddEpisodesModal"
      />

      <!-- Mocked data because API does not provide -->
      <ButtonList
        title="Locations:"
        v-bind:mockData="['Gromflom Prime', 'Giant\'s Town', 'Bird World', 'Earth (5-126)']"
        openModal="AddLocationsModal"
      />
      <ButtonList
        title="Spaceship:"
        v-bind:mockData="['HMS', 'Battlecruiser', 'Executor', 'Death Start', 'Battleship', 'Shadow Glider']"
        openModal="DefaultModal"
      />
      <ButtonList
        title="Vehicles:"
        v-bind:mockData="['Sand Crawler', 'Moon Speeder', 'Bike']"
        openModal="DefaultModal"
      />
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader.vue";
import AddEpisodesModal from "@/components/modal/AddEpisodesModal.vue";
import AddCharactersModal from "@/components/modal/AddCharactersModal.vue";
import AddLocationsModal from "@/components/modal/AddLocationsModal.vue";
import DefaultModal from "@/components/modal/DefaultModal.vue";
import ButtonList from "@/components/ButtonList.vue";

export default {
  name: "CharactersDetails",
  components: {
    ContentHeader,
    ButtonList,
    AddEpisodesModal,
    AddCharactersModal,
    AddLocationsModal,
    DefaultModal
  },
  data() {
    return {
      eyeColors: [
        "Amber",
        "Amaranth",
        "Amethyst",
        "Apricot",
        "Blue-green",
        "Blue-violet",
        "Blue",
        "Brown",
        "Carmine",
        "Champagne",
        "Gray",
        "Olive"
      ]
    };
  },
  computed: {
    activeModal() {
      return this.$store.getters.getModalStatus;
    },
    charactersDetails() {
      return this.$store.getters.getCharactersDetails;
    }
  },
  methods: {
    rndColor() {
      return this.eyeColors[Math.floor(Math.random() * this.eyeColors.length)];
    },
    rndNumber(min, max) {
      return (Math.random() * (+max - +min) + +min).toFixed(2);
    }
  },
  created() {
    this.$store.dispatch("fetchCharacterById", this.$route.params.id);
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
