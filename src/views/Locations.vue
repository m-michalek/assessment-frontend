<template>
  <div class="locations">Locations component works!</div>
</template>

<script>
export default {
  name: "Locations",
  created() {
    if (!this.$store.getters.getLocations) {
      this.$store.dispatch("fetchLocations");
    }
  },
};
</script>

<style scoped></style>
