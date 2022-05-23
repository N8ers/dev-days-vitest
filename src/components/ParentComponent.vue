<template>
  <div class="container">
    <h3>Parent</h3>

    <div data-test="childComponentMessage" v-if="childComponentMessage.length">
      Child Compoent Message: {{ childComponentMessage }}
    </div>

    <ChildComponent
      message="I am a message from the parent!"
      @emitMessageUp="handleEmitMessageUp"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const childComponentMessage = ref("");

const handleEmitMessageUp = (message) => {
  childComponentMessage.value = message;
};
</script>

<style scoped>
.container {
  border: 1px solid black;
  padding: 10px;
}
</style>
