<template>
  <div>
    <h4>Counter</h4>
    <div>
      <button data-test="addButton" @click="addOne">add 1</button>
      <span>{{ count }}</span>
      <button data-test="subtractButton" @click="subtractOne">
        subtract 1
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const addOne = () => {
  count.value++;
};

const subtractOne = () => {
  count.value--;
};
</script>

<style scoped>
span {
  margin: 10px;
}
</style>
