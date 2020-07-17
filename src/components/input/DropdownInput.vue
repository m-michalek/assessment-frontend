<template>
  <div class="dropdown-input">
    <div class="fs-08 bold blue-900">{{title}}:</div>
    <input type="text" v-bind:placeholder="placeholder" class="w-100 m-0 fs-08 ellipsis blue-900" />
    <svg
      class="up"
      id="Capa_1"
      viewBox="0 0 256 256"
      style="enable-background:new 0 0 256 256;"
      xml:space="preserve"
    >
      <g>
        <g>
          <polygon
            points="128,48.907 0,176.907 30.187,207.093 128,109.28 225.813,207.093 256,176.907 		"
          />
        </g>
      </g>
    </svg>
    <svg
      class="down"
      id="Capa_1"
      viewBox="0 0 256 256"
      style="enable-background:new 0 0 256 256;"
      xml:space="preserve"
    >
      <g>
        <g>
          <polygon
            points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 		"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "DropdownInput",
  props: {
    title: String,
    placeholder: String
  }
};
</script>

<style scoped>
.dropdown-input {
  margin: 5px;
}

svg {
  width: 10px;

  position: relative;

  cursor: pointer;
}

.up {
  top: -37px;
  left: 127px;
}

.down {
  top: -25px;
  left: 117px;
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

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #00305a;
  opacity: 1; /* Firefox */
}
</style>
