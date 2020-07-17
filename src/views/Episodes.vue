<template>
  <div class="episodes">
    <ContentHeader v-bind:mainTitle="this.$options.name" />
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader.vue";

export default {
  name: "Episodess",
  components: {
    ContentHeader
  },
  created() {
    if (!this.$store.getters.getEpisodes) {
      this.$store.dispatch("fetchEpisodes");
    }
  }
};
</script>

<style scoped></style>
