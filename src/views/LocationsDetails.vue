<template>
  <div v-if="locationsDetails" class="locations-details">
    <ContentHeader topTitle="Locationsdetails" v-bind:mainTitle="locationsDetails.name" />
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader.vue";

export default {
  name: "LocationsDetails",
  components: {
    ContentHeader
  },
  computed: {
    locationsDetails() {
      return this.$store.getters.getLocationsDetails;
    }
  },
  created() {
    this.$store.dispatch("fetchLocationById", this.$route.params.id);
  }
};
</script>

<style scoped></style>
