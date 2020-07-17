<template>
  <div class="locations">
    <ContentHeader v-bind:mainTitle="this.$options.name" />
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader.vue";

export default {
  name: "Locations",
  components: {
    ContentHeader
  },
  created() {
    if (!this.$store.getters.getLocations) {
      this.$store.dispatch("fetchLocations");
    }
  }
};
</script>

<style scoped></style>
