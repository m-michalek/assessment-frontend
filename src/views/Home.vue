<template>
  <div class="home">
    <div class="container justify-content-center logo-sizer">
      <img
        src="@/assets/Rick_and_Morty_white.svg"
        alt="Rick and Morty logo"
        width="100%"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    if (!this.$store.getters.getCharacters) {
      this.$store.dispatch("fetchCharacters");
    }

    if (!this.$store.getters.getEpisodes) {
      this.$store.dispatch("fetchEpisodes");
    }

    if (!this.$store.getters.getLocations) {
      this.$store.dispatch("fetchLocations");
    }
  },
};
</script>

<style scoped>
.home {
  background-color: #10172c;
}

.home > .container > svg {
  fill: white;
}

.logo-sizer {
  height: calc(100vh - 134px);
}
</style>
