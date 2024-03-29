<template>
  <button class="SaveButton" type="button">Сохранить</button>
</template>


<script setup lang="ts">

</script>

<style>
.SaveButton{
  height: 3vw;
  width: 7vw;
  display: block;
  margin-top: 2vw;
  margin-left: 2vw;
  margin-bottom: 2vw;
  font-size: 1vw;
  background-color: #408cd3;
  color: white;
  border: 0;
}

@media (max-width: 480px) {
  .SaveButton{
    width: 14vw;
    height: 6vw;
    font-size: 2vw;
  }
}

</style>