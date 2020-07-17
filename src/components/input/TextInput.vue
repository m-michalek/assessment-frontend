<template>
  <div class="text-input">
    <div class="fs-08 bold blue-900">{{title}}:</div>
    <input
      type="text"
      v-bind:placeholder="placeholder"
      class="w-100 m-0 fs-08 ellipsis bg-white-200"
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    title: String,
    placeholder: String
  }
};
</script>

<style scoped>
.text-input {
  margin: 5px;
}

input {
  box-sizing: border-box;

  height: 40px;

  margin-top: 5px;

  border-style: solid;
  border-radius: 1px;
  border-color: #e9e9e9;
  border-radius: 3px;
  border-width: 2px;

  padding-left: 10px;
  padding-right: 10px;

  font-family: "Roboto", sans-serif;
}
</style>
