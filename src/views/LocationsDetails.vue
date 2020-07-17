<template>
  <div v-if="locationsDetails" class="locations-details">
    <!-- Modal -->
    <Modal v-if="modalStatus" />
    <!-- Modal -->

    <ContentHeader topTitle="Locationsdetails" v-bind:mainTitle="locationsDetails.name" />
    <div class="container fd-col">
      <!-- TODO: Move to own component -->
      <div class="flex w-100 sm-flex-col">
        <div class="w-100">
          <div class="flex fd-col sm-align-items-center">
            <h3>Details:</h3>
            <ul>
              <li class="flex sm-justify-content-center">
                <b>Dimension:</b>
                {{locationsDetails.dimension}}
              </li>
              <li class="flex sm-justify-content-center">
                <b>Type:</b>
                {{locationsDetails.type}}
              </li>
              <li class="flex sm-justify-content-center">
                <b>Number of residents:</b>
                {{locationsDetails.residents.length}}
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
              v-bind:src="rndLocationImgUrl"
              v-bind:alt="`Image of the location ${locationsDetails.name}`"
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
        title="Residents:"
        v-bind:buttons="locationsDetails.residents"
        basePath="characters"
      />

      <!-- Mocked data because API does not provide -->
      <ButtonList title="Vegetation:" v-bind:mockData="getRndVegetation()" />
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader.vue";
import ButtonList from "@/components/ButtonList.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "LocationsDetails",
  data() {
    return {
      rndLocationImgUrl: null,
      vegetations: [
        "Tundra",
        "Northern coniferous forest",
        "Deciduous / mixed forest",
        "Steppe",
        "Hartlaubwoods",
        "Desert",
        "Savannah",
        "Tropical rain forest"
      ]
    };
  },
  components: {
    ContentHeader,
    ButtonList,
    Modal
  },
  computed: {
    locationsDetails() {
      return this.$store.getters.getLocationsDetails;
    },
    locationImgUrls() {
      return this.$store.getters.getLocationImgUrls;
    },
    modalStatus() {
      return this.$store.getters.getModalStatus;
    }
  },
  methods: {
    getRndVegetation() {
      return [
        this.vegetations[Math.floor(Math.random() * this.vegetations.length)]
      ];
    }
  },
  created() {
    this.$store.dispatch("fetchLocationById", this.$route.params.id);

    this.rndLocationImgUrl = this.locationImgUrls[
      Math.floor(Math.random() * this.locationImgUrls.length)
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
