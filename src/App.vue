<template>
  <div id="app">
    <Header />
    <div>
      <router-view class="main-content" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
html,
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */

  color: #2c3e50;

  height: 100%;

  display: flex;
  flex-direction: column;
}

.container {
  height: 100%;

  margin-left: 20px;
  margin-right: 20px;

  display: flex;
  align-items: center;
}
</style>
