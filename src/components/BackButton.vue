<template>
  <button @click="router.push({ path: '/' })">Назад</button>
</template>


<script setup lang="ts">


import router from "@/router";
</script>


<style scoped>
button{
  background-color: white;
  border: 0;
  font-size: 1.25vw;
  padding: 1.25vw;
  margin-left: 10%;
  margin-top: 4vw;
}

@media (max-width: 480px) {
  button {
    font-size: 3.5vw;
    padding: 2.5vw;
    margin-left: 5%;
  }
}
</style>x