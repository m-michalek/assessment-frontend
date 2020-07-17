<template>
  <div class="textarea-input">
    <div class="fs-08 bold blue-900">{{title}}:</div>
    <textarea
      type="text"
      v-bind:placeholder="placeholder"
      class="w-100 m-0 fs-08 ellipsis bg-white-200"
    />
  </div>
</template>

<script>
export default {
  name: "TextareaInput",
  props: {
    title: String,
    placeholder: String
  }
};
</script>

<style scoped>
.textarea-input {
  margin: 5px;
}

textarea {
  box-sizing: border-box;

  min-height: 80px;

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
