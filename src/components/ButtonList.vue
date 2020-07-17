<template>
  <div class="button-list w-100 mt-15 mb-15">
    <div class="flex align-items-center sm-justify-content-center">
      <b>{{ title }}</b>
    </div>
    <div v-if="iterableList" class="flex align-items-center sm-justify-content-center flex-wrap">
      <div v-for="(listItem, index) in iterableList" v-bind:key="index" class="btn mt-10">
        <router-link
          v-bind:to="`/${basePath}/details/${listItem.url.match(/(\d+)/)[0]}`"
        >{{ listItem.name }}</router-link>
      </div>
      <div v-on:click="onButtonClicked()" class="btn mt-10">...</div>
    </div>

    <div v-else class="flex align-items-center sm-justify-content-center flex-wrap">
      <div v-for="(listItem, index) in mockData" v-bind:key="index" class="btn mt-10">{{ listItem }}</div>
      <div v-on:click="onButtonClicked()" class="btn mt-10">...</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ButtonList",
  data() {
    return {
      iterableList: null
    };
  },

  props: {
    title: String,
    buttons: Array,
    mockData: Array,
    basePath: String
  },
  methods: {
    onButtonClicked() {
      this.$store.dispatch("toggleModal");
    }
  },
  async created() {
    if (this.buttons) {
      let responseList = [];

      for (let i = 0; i < this.buttons.length; i++) {
        let response = await axios(this.buttons[i]);
        responseList.push(response.data);
      }

      this.iterableList = responseList;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
}
</style>
