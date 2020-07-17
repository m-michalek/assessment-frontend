<template>
  <div class="episode">
    <ContentHeader v-bind:mainTitle="this.$options.name" />
    <div class="container fd-col">
      <div class="card-gird">
        <div v-for="(episode, index) in episodes" v-bind:key="index">
          <Card
            v-bind:thumbnail="getRndEpisodeImgUrl()"
            v-bind:label="episode.name"
            v-bind:itemOne="`Episode: ${episode.episode}`"
            v-bind:itemTwo="`On air date: ${episode.air_date}`"
            v-bind:itemThree="`Characters: ${episode.characters.length}`"
            v-bind:routeOnClick="`/episodes/details/${episode.id}`"
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
  name: "Episodes",
  components: {
    Card,
    ContentHeader
  },
  computed: {
    episodes() {
      return this.$store.getters.getEpisodes;
    },
    episodeImgUrls() {
      return this.$store.getters.getEpisodeImgUrls;
    }
  },
  methods: {
    getRndEpisodeImgUrl() {
      return this.episodeImgUrls[
        Math.floor(Math.random() * this.episodeImgUrls.length)
      ];
    }
  },
  created() {
    if (!this.$store.getters.getEpisodes) {
      this.$store.dispatch("fetchEpisodes");
    }
  }
};
</script>
