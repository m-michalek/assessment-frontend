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

a {
  font-family: "Roboto", sans-serif !important;
}

/** Colors */
.white-100 {
  color: #ffffff;
}

.bg-white-200 {
  background-color: #f8f8f8;
}

.blue-900 {
  color: #00305a;
}
/** Colors **/

/** App.vue */

#app {
  font-family: "Roboto", sans-serif;
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

.max-w-400 {
  max-width: 400px;
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

/** Global medial queries */

@media (max-width: 300px) {
  .nav-links > a {
    margin-left: 5px !important;
    margin-right: 5px !important;
  }

  .nav-search-bar {
    display: none !important;
  }

  .card-gird {
    grid-template-columns: repeat(1, 1fr);
  }

  .sm-flex-col {
    display: flex;
    flex-direction: column;
  }

  .sm-justify-content-center {
    justify-content: center;
  }

  .sm-fd-col {
    flex-direction: column;
  }

  .sm-align-items-center {
    align-items: center;
  }

  .sm-ta-center {
    text-align: center;
  }

  .sm-mt-20 {
    margin-top: 20px;
  }
}

@media (min-width: 300px) and (max-width: 600px) {
  .nav-links > a {
    margin-left: 5px !important;
    margin-right: 5px !important;
  }

  .nav-search-bar {
    display: none !important;
  }

  .card-gird {
    grid-template-columns: repeat(1, 1fr);
  }

  .sm-flex-col {
    display: flex;
    flex-direction: column;
  }

  .sm-justify-content-center {
    justify-content: center;
  }

  .sm-fd-col {
    flex-direction: column;
  }

  .sm-align-items-center {
    align-items: center;
  }

  .sm-ta-center {
    text-align: center;
  }

  .sm-mt-20 {
    margin-top: 20px;
  }
}

@media (min-width: 600px) and (max-width: 800px) {
  .nav-links > a {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }

  .container {
    margin-left: 50px;
    margin-right: 50px;
  }

  .card-gird {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 800px) and (max-width: 1000px) {
  .nav-links > a {
    margin-left: 15px !important;
    margin-right: 15px !important;
  }

  .container {
    margin-left: 100px;
    margin-right: 100px;
  }

  .card-gird {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1000px) and (max-width: 1904px) {
  .container {
    margin-left: 150px;
    margin-right: 150px;
  }

  .card-gird {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1904px) {
  .container {
    margin-left: 250px;
    margin-right: 250px;
  }

  .card-gird {
    grid-template-columns: repeat(6, 1fr);
  }
}

/** Global medial queries **/
</style>
