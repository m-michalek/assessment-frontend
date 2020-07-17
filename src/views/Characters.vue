<template>
  <div class="character">Character component works!</div>
</template>

<script>
export default {
  name: "Characters",
  created() {
    if (!this.$store.getters.getCharacters) {
      this.$store.dispatch("fetchCharacters");
    }
  },
};
</script>

<style scoped></style>
