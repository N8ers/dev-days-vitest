<template>
  <div>
    <button @click="makeNetworkRequest">Make a network requst!</button>

    <div data-test="networkResponseArea">
      <!-- <div v-if="apiResult.response" class="success">
        Response: {{ apiResult.response.message }}
      </div>
      <div v-if="apiResult.error" class="error">
        ERROR: {{ apiResult.error }}
      </div> -->
      <div>Response: {{ apiResultTest }}</div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";

const apiResult = reactive({
  response: null,
  error: null,
});

const clearApiResult = () => {
  apiResult.response = null;
  apiResult.error = null;
};

const apiResultTest = ref("");

const makeNetworkRequest = async () => {
  clearApiResult();

  const expressUrl = "http://localhost:5050";

  try {
    const response = await axios.get(expressUrl);
    console.log(response.data);
    apiResult.response = response.data;
    console.log(apiResult);
  } catch (error) {
    apiResult.error = error.message;
  }

  // await axios({
  //   method: "get",
  //   url: expressUrl,
  // })
  //   .then((response) => {
  //     console.log("response:: ", response);
  //     apiResult.response = response.data;
  //     apiResultTest.value = response.data.message;
  //   })
  //   .catch((error) => {
  //     if (!error) {
  //       error.message = "ERROR WITH ERROR";
  //     }
  //     apiResult.error = error.message;
  //     // apiResultTest.value = error.response.data.message;
  //   });
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
