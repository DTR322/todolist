<template>
  <button>Удалить</button>
</template>


<script setup lang="ts">

</script>


<style scoped>
button{
  float: right;
  color: white;
  background-color: red;
  border: 0;
  font-size: 1.25vw;
  padding: 1.25vw;
  margin-right: 10%;
  margin-top: 4vw;
}

@media (max-width: 480px) {
  button {
    font-size: 3.5vw;
    padding: 2.5vw;
    margin-right: 5%;
    margin-left: auto;
  }
}
</style>