<template>
  <div class="card">
    <router-link :to="routeOnClick" class="image">
      <div>
        <img v-bind:src="thumbnail" alt="Thumbnail of card element" />
      </div>

      <div class="card-body">
        <h3>{{ label }}</h3>
        <ul>
          <li>{{ itemOne }}</li>
          <li>{{ itemTwo }}</li>
          <li>{{ itemThree }}</li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    thumbnail: String,
    label: String,
    itemOne: String,
    itemTwo: String,
    itemThree: String,
    routeOnClick: String
  }
};
</script>

<style scoped>
.card {
  height: 100%;

  background-color: #efefef;

  cursor: pointer;

  border-radius: 2px;
}

.card-body {
  text-align: left;
  padding: 0px 5px 5px 10px;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

h3 {
  margin: 0px;

  font-size: 0.8rem;
}

ul {
  padding: 0px;
  margin: 2px 0px 2px 0px;
}

li {
  list-style-type: none;

  font-size: 0.6rem;
}

img {
  width: 100%;

  border-radius: 2px 2px 0px 0px;
}
</style>
