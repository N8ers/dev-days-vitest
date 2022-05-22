<template>
  <div>
    <button @click="makeNetworkRequest">Make a network requst!</button>

    <div data-test="networkResponseArea">
      <div v-if="apiResult.response" class="success">
        Response: {{ apiResult.response }}
      </div>
      <div v-if="apiResult.error" class="error">
        ERROR: {{ apiResult.error }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";

const apiResult = reactive({
  response: null,
  error: null,
});

const clearApiResult = () => {
  apiResult.response = null;
  apiResult.error = null;
};

const makeNetworkRequest = async () => {
  clearApiResult();

  const expressUrl = "http://localhost:5050";

  await axios({
    method: "get",
    url: expressUrl,
  })
    .then((response) => {
      apiResult.response = response.data;
    })
    .catch((error) => {
      apiResult.error = error;
    });
};
</script>

<style scoped>
.success {
  color: green;
}

.error {
  color: red;
}
</style>
