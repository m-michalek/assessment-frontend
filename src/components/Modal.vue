<template>
  <transition name="modal-fade" appear>
    <div class="modal">
      <div class="h-100 flex align-items-center justify-content-center">
        <div class="modal-content" style="width: 400px; height: fit-content;">
          <h3 class="flex justify-content-center">Add character</h3>

          <div class="pl-40 pr-40">
            <div class="w-100">
              <TextInput title="Name" placeholder="Enter name" />
            </div>
            <div class="flex w-100">
              <TextInput title="Size" placeholder="Meter" class="w-100" />
              <TextInput title="Weight" placeholder="Kg" class="w-100" />
            </div>
            <div class="flex w-100">
              <TextInput title="Hair color" placeholder="Enter hair color" class="w-100" />
              <TextInput title="Eye color" placeholder="Yellow" class="w-100" />
            </div>
            <div class="flex w-100">
              <TextInput title="Year of birth" placeholder="YYYY" class="w-100" />
              <TextInput title="Gender" placeholder="Male" class="w-100" />
            </div>
            <div class="flex w-100 fs-08 justify-content-end mt-10 pt-20 pb-30">
              <div v-on:click="onButtonClicked()" class="btn bold">Abort</div>
              <div v-on:click="onButtonClicked()" class="btn btn-primary white-100 bold">Add episode</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import TextInput from "@/components/TextInput.vue";

export default {
  name: "Modal",
  components: {
    TextInput
  },
  methods: {
    onButtonClicked() {
      this.$store.dispatch("toggleModal");
    }
  }
};
</script>

<style scoped>
.modal {
  z-index: 100;

  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  background-color: transparent;
  backdrop-filter: blur(5px);

  backdrop-filter: blur(0.8);
}

.modal-content {
  z-index: 200;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  margin-left: 20px;
  margin-right: 20px;

  background-color: white;
}

h3 {
  margin: 50px 0px 50px 0px;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.1s;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
