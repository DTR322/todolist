<template>
  <div>
    <p>Название задачи</p>

    <input v-model="taskName" placeholder="Введите название задачи" id="TaskNameInput">

    <p>Приоритет</p>

    <select v-model="priority" id="selectPriority">
      <option translate="no" disabled value="">Выберите вариант из списка</option>
      <option translate="no">Low</option>
      <option translate="no">Normal</option>
      <option translate="no">High</option>
    </select>

    <p>Отметки</p>

    <select v-model="tag" multiple class="tag">
        <option translate="no">research</option>
        <option translate="no">design</option>
        <option translate="no">development</option>
    </select>

    <p>Описание</p>

    <textarea v-model="description" placeholder="..."></textarea>
    <TaskSaveButton class="saveButton"/>
  </div>
</template>

<script setup lang="ts">



import TaskSaveButton from "@/components/TaskSaveButton.vue";


let taskName: '',
    priority: '',
    tag:  [],
    description: ''





</script>

<style scoped>
select{
  margin-left: 2vw;
  margin-top: 1vw;
}

textarea{
  margin-left: 2vw;
  margin-top: 1vw;
  width: 95%;
  height: 10vw;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
  padding-top: 1vw;
}

p{
  color: gray;
  margin-left: 2vw;
  font-size: 1.5vw;
  margin-bottom: 0;
  margin-top: 1vw;
}

div{
  width: 80%;
  height: max-content;
  border: solid black 1px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  margin-top: 2vw;
}

.tag{
  width: 25vw;
  padding: 0.5vw;
  font-size: 1.5vw;
  height: 6.75vw;
  overflow-y: hidden;
}

#selectPriority{
  margin: 1vw 0 0 2vw;
  font-size: 1.5vw;
  height: 2vw;
  width: 25vw;
}
.tag::-webkit-scrollbar{
  width: 0;
}
#TaskNameInput{
  margin-left: 2vw;
  margin-top: 1vw;
  font-size: 1.5vw;
  width: 95%;
  height: 2vw;
  border: solid #d3d2d2 1px;
}

@media (max-width: 480px) {
  div {
    width: 90%;
    height: 60vh;
  }
  p{
  color: gray;
  margin-left: 4vw;
  font-size: 3.5vw;
  margin-bottom: 0;
  margin-top: 2vw;
}
  #TaskNameInput{
  margin-left: 4vw;
    padding: 1vw;
  margin-top: 1vw;
  font-size: 3.5vw;
  width: 90%;
  height: 4vw;
  border: solid #d3d2d2 1px;
}
  #selectPriority{
  margin: 2vw 0 0 4vw;
  font-size: 3.5vw;
  height: 10vw;
  width: 40vw;
}
  .tag{
  width: 40vw;
  padding: 0.75vw;
  font-size: 3vw;
  height: 10vw;
  margin-left: 4vw;
  overflow-y: hidden;
}
  textarea{
  margin-left: 4vw;
  margin-top: 2vw;
  width: 90%;
  height: 45%;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
  padding-top: 1vw;
    border: gray solid 1px;
}
.saveButton{
  margin-left: 4vw;
}

}

</style>