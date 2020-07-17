<template>
  <div id="app">
    <Header />
    <div>
      <router-view class="main-content" />
      <Footer v-if="!isHomePage()" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  methods: {
    isHomePage() {
      return this.$router.currentRoute.fullPath === "/" ? true : false;
    }
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

/** Colors */
.white-100 {
  color: #ffffff;
}

.blue-900 {
  color: #00305a;
}
/** Colors **/

/** App.vue */

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

.sm-flex-col {
  display: flex;
}

.flex {
  display: flex;
}

.sm-fd-col {
}

.fd-col {
  flex-direction: column;
}

.sm-justify-content-center {
}

.justify-content-center {
  justify-content: center;
}

.justify-content-end {
  justify-content: flex-end;
}

.sm-align-items-center {
}

.align-items-center {
  align-items: center;
}

.align-items-end {
  align-items: flex-end;
}

.flex-wrap {
  flex-wrap: wrap;
}

.h-100 {
  height: 100%;
}

.max-w-100 {
  max-width: 100%;
}

.w-100 {
  width: 100%;
}

.w-50 {
  width: 50%;
}

.sm-mt-20 {
}

.m-0 {
  margin: 0px;
}

.mt-10 {
  margin-top: 10px;
}

.mt-25 {
  margin-top: 25px;
}

.mt-60 {
  margin-top: 60px;
}

.mr-40 {
  margin-right: 40px;
}

.ml-10 {
  margin-left: 10px;
}

.ml-40 {
  margin-left: 40px;
}

.lh-12 {
  line-height: 12px;
}

.m-12-0-8-0 {
  margin: 12px 0px 8px 0px;
}

.mt-15 {
  margin-top: 15px;
}

.mb-15 {
  margin-bottom: 15px;
}

.mb-40 {
  margin-bottom: 40px;
}

.mb-5 {
  margin-bottom: 5px;
}

.p-0 {
  padding: 0px;
}

.pl-40 {
  padding-left: 40px;
}

.pr-40 {
  padding-right: 40px;
}

.pt-20 {
  padding-top: 20px;
}

.pb-30 {
  padding-bottom: 30px;
}

.sm-ta-center {
}

.ta-center {
  text-align: center;
}

.ta-left {
  text-align: left;
}

.ta-right {
  text-align: right;
}

.main-content {
  /* height: 100%; */

  overflow: auto;
}

.btn {
  width: fit-content;

  background-color: #f1f1f1;

  padding: 8px 12px 8px 12px;

  cursor: pointer;

  margin-right: 15px;
}

.btn-primary {
  background-color: #13152c;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn:hover {
  background-color: #bbbbbb;
}

.btn-primary:hover {
  background-color: #13152c;
}

.fs-08 {
  font-size: 0.8rem;
}

.bold {
  font-weight: bold;
}
/** App.vue **/

/** Characters.vue */

.card-gird {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;

  padding-bottom: 20px;
}

.overflow-hidden {
  overflow: hidden;
}

.pointer {
  cursor: pointer;
}

/** Characters.vue **/
</style>
