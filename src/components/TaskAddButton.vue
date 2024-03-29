<template>
  <button @click="router.push({ path: '/TaskAdd' })">Добавить задачу</button>
</template>


<script setup lang ="ts">
  import router from "@/router";


</script>


<style scoped>
button{
  width: 15vw;
  height: 4vw;
  align-items: center;
  justify-content: center;
  background-color: rgb(64, 140, 211);
  font-size: 1.25vw;
  color: white;
  border: 0;
  padding: 1.25vw;
  position:relative;
  margin-top: 4vw;
  margin-left: 2.5vw;
}


@media (max-width: 480px) {
button{
  position: relative;
  width: 40vw;
  height: 10vw;
  font-size: 3vw;
  margin-left: 0;
}
}
</style>