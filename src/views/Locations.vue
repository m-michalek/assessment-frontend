<template>
  <div class="location">
    <ContentHeader v-bind:mainTitle="this.$options.name" />
    <div class="container fd-col">
      <div class="card-gird">
        <div v-for="(location, index) in locations" v-bind:key="index">
          <Card
            v-bind:thumbnail="getRndLocationImgUrl()"
            v-bind:label="location.name"
            v-bind:itemOne="`Dimension: ${location.dimension}`"
            v-bind:itemTwo="`Type: ${location.type}`"
            v-bind:itemThree="`Residents: ${location.residents.length}`"
            v-bind:routeOnClick="`/locations/details/${location.id}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import ContentHeader from "@/components/ContentHeader.vue";

export default {
  name: "Locations",
  components: {
    Card,
    ContentHeader
  },
  computed: {
    locations() {
      return this.$store.getters.getLocations;
    },
    locationImgUrls() {
      return this.$store.getters.getLocationImgUrls;
    }
  },
  methods: {
    getRndLocationImgUrl() {
      return this.locationImgUrls[
        Math.floor(Math.random() * this.locationImgUrls.length)
      ];
    }
  },
  created() {
    if (!this.$store.getters.getLocations) {
      this.$store.dispatch("fetchLocations");
    }
  }
};
</script>
