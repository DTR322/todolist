<template>
  <button @click="router.push({path: '/TaskRedaction'})">Редактировать</button>
</template>


<script setup lang="ts">

import router from "@/router";
</script>

<style scoped>
button{
  background-color: rgb(64, 140, 211);
  color: white;
  border: 0;
  font-size: 1.25vw;
  padding: 1.25vw;
  margin-left: 1.5%;
}

@media (max-width: 480px) {
button{
  font-size: 3.5vw;
  padding: 2.5vw;
  margin-left: 3%;
}
}

</style>