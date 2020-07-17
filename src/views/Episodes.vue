<template>
  <div class="episodes">Episodes component works!</div>
</template>

<script>
export default {
  name: "Episodess",
  created() {
    if (!this.$store.getters.getEpisodes) {
      this.$store.dispatch("fetchEpisodes");
    }
  },
};
</script>

<style scoped></style>
