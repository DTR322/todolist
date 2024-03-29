<template>
  <div>
    <p>Название задачи</p>
    <h1>{{test}}</h1>
    <p>Дата создания</p>
    <h1>20 октября</h1>
    <p>Приоритет</p>
    <h1>normal</h1>
    <p>Отметки</p>
    <h1>research</h1>
    <p>Описание</p>
    <h1>...</h1>
  </div>
</template>


<script setup lang="ts">
let test: string = "Тестовое задание"

</script>

<style scoped>
p{
  color: gray;
  margin-left: 1.875vw;
  font-size: 1.5vw;
  margin-bottom: 0;
  margin-top: 1vw;
}
h1{
  margin-left: 1.875vw;
  color: #424242;
  margin-top: 0;
  margin-bottom: 1.875vw;
  font-size: 2vw;
}
div{
  width: 80%;
  height: fit-content;
  border: solid #d3d2d2 1px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  margin-top: 6.25vw;
}

@media (max-width: 480px) {
  p{
    font-size: 4vw;
    margin-left: 4vw;
    margin-top: 3vw;
  }

  h1{
    margin-left: 4vw;
    margin-bottom: 4vw;
    font-size: 5.5vw;
  }
  div{
    width: 90%;
    height: 60vh;
  }
}
</style>