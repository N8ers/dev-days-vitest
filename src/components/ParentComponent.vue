<template>
  <div>
    <ChildComponent
      message="I am a message from the parent!"
      @emitMessageUp="handleEmitMessageUp"
    />

    <div v-if="childComponentMessage.length">
      Child Compoent Message: {{ childComponentMessage }}
    </div>
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
