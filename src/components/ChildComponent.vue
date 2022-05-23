<template>
  <div class="container">
    <h3>Child</h3>
    <p>{{ props.message }}</p>
    <hr />
    <input v-model="childMessage" type="text" />
    <button @click="emitToParent">emit message to parent!</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  message: {
    type: String,
    required: false,
    default: "I am the default message",
  },
});

const emit = defineEmits(["emitMessageUp"]);

const childMessage = ref("");

const emitToParent = () => {
  emit("emitMessageUp", childMessage.value);
};
</script>

<style scoped>
.container {
  margin: 20px;
  border: 1px solid black;
  padding: 10px;
  width: 50%;
}
</style>
