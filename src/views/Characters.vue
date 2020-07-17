<template>
  <div class="character">
    <ContentHeader v-bind:mainTitle="this.$options.name" />
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader.vue";

export default {
  name: "Characters",
  components: {
    ContentHeader
  },
  computed: {
    characters() {
      return this.$store.getters.getCharacters;
    }
  },
  created() {
    if (!this.$store.getters.getCharacters) {
      this.$store.dispatch("fetchCharacters");
    }
  }
};
</script>

<style scoped></style>
