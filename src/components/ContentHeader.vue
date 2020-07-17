<template>
  <div class="content-header">
    <div class="container fd-col">
      <div v-bind:class="{ hidden: topTitle === 'null'}" class="mt-60">{{topTitle}}</div>
      <div v-bind:class="{ hidden: topTitle === 'null'}" class="lh-12">_____</div>
      <h1 class="m-12-0-8-0 ta-center">{{mainTitle}}</h1>
      <div v-bind:class="{ hidden: bottomTitle === 'null'}" class="mb-40">{{bottomTitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentHeader",
  props: {
    topTitle: { type: String, default: "null" },
    mainTitle: { type: String, default: "null" },
    bottomTitle: { type: String, default: "null" }
  }
};
</script>

<style scoped>
.hidden {
  visibility: hidden;
}
</style>
