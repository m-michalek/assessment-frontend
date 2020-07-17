<template>
  <div class="character">
    <ContentHeader v-bind:mainTitle="this.$options.name" />
    <div class="container fd-col">
      <div class="card-gird">
        <div v-for="(character, index) in characters" v-bind:key="index">
          <Card
            v-bind:thumbnail="character.image"
            v-bind:label="character.name"
            v-bind:itemOne="`Species: ${character.species}`"
            v-bind:itemTwo="`Status: ${character.status}`"
            v-bind:itemThree="`Origin: ${character.origin.name}`"
            v-bind:routeOnClick="`/characters/details/${character.id}`"
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
  name: "Characters",
  components: {
    Card,
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
