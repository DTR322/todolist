
<template>
  <div class="TaskList">
    <p>{{show}}</p>
    <div class="TaskInstance" v-for="task in tasksToShow" :key="task.title">
      <p class="TaskElementTag">{{task.title}}</p>
      <p class="TaskElementText">Создано: {{task.creationTime}}</p>
      <p class="TaskElementText">Приоритет: {{task.priority}}</p>
      <p class="TaskElementText">Отметки: {{task.tags}}</p>
    </div>
  </div>
</template>


<script setup lang="ts">

import {computed, ref} from "vue";

var Tasks = [
  object1 = {
    title: 'Задача номер 1',
    creationTime: '20 october',
    priority: 'normal',
    tags: 'research',
    annotations: '...'
  },
  object2 = {
    title: 'Задача номер 2',
    creationTime: '30 october',
    priority: 'high',
    tags: 'design',
    annotations: '...'
  },
  object3 = {
    title: 'Задача номер 3',
    creationTime: '21 october',
    priority: 'low',
    tags: 'development',
    annotations: '...'
  },
  object4 = {
    title: 'Задача номер 4',
    creationTime: '20 october',
    priority: 'normal',
    tags: 'research',
    annotations: '...'
  },
  object5 = {
    title: 'Задача номер 5',
    creationTime: '30 october',
    priority: 'high',
    tags: 'design',
    annotations: '...'
  },
  object6 = {
    title: 'Задача номер 6',
    creationTime: '21 october',
    priority: 'low',
    tags: 'development',
    annotations: '...'
  },
  object7 = {
    title: 'Задача номер 7',
    creationTime: '20 october',
    priority: 'normal',
    tags: 'research',
    annotations: '...'
  },
  object8 = {
    title: 'Задача номер 8',
    creationTime: '30 october',
    priority: 'high',
    tags: 'design',
    annotations: '...'
  },
  object9 = {
    title: 'Задача номер 9',
    creationTime: '21 october',
    priority: 'low',
    tags: 'development',
    annotations: '...'
  },
  object10 = {
    title: 'Задача номер 10',
    creationTime: '20 october',
    priority: 'normal',
    tags: 'research',
    annotations: '...'
  },
  object11 = {
    title: 'Задача номер 11',
    creationTime: '30 october',
    priority: 'high',
    tags: 'design',
    annotations: '...'
  },
  object12 = {
    title: 'Задача номер 12',
    creationTime: '21 october',
    priority: 'low',
    tags: 'development',
    annotations: '...'
  },
  object13 = {
    title: 'Задача номер 13',
    creationTime: '20 october',
    priority: 'normal',
    tags: 'research',
    annotations: '...'
  },
  object14 = {
    title: 'Задача номер 14',
    creationTime: '30 october',
    priority: 'high',
    tags: 'design',
    annotations: '...'
  },
  object15 = {
    title: 'Задача номер 15',
    creationTime: '21 october',
    priority: 'low',
    tags: 'development',
    annotations: '...'
  },
  object16 = {
    title: 'Задача номер 16',
    creationTime: '20 october',
    priority: 'normal',
    tags: 'research',
    annotations: '...'
  },
  object17 = {
    title: 'Задача номер 17',
    creationTime: '30 october',
    priority: 'high',
    tags: 'design',
    annotations: '...'
  },
  object18 = {
    title: 'Задача номер 18',
    creationTime: '21 october',
    priority: 'low',
    tags: 'development',
    annotations: '...'
  },
  object19 = {
    title: 'Задача номер 19',
    creationTime: '20 october',
    priority: 'normal',
    tags: 'research',
    annotations: '...'
  },
  object20 = {
    title: 'Задача номер 20',
    creationTime: '30 october',
    priority: 'high',
    tags: 'design',
    annotations: '...'
  },
  object21 = {
    title: 'Задача номер 21',
    creationTime: '21 october',
    priority: 'low',
    tags: 'development',
    annotations: '...'
  },
  object22 = {
    title: 'Задача номер 22',
    creationTime: '20 october',
    priority: 'normal',
    tags: 'research',
    annotations: '...'
  },
  object23 = {
    title: 'Задача номер 23',
    creationTime: '30 october',
    priority: 'high',
    tags: 'design',
    annotations: '...'
  },
  object24 = {
    title: 'Задача номер 24',
    creationTime: '21 october',
    priority: 'low',
    tags: 'development',
    annotations: '...'
  },
  object25 = {
    title: 'Задача номер 25',
    creationTime: '20 october',
    priority: 'normal',
    tags: 'research',
    annotations: '...'
  },
  object26 = {
    title: 'Задача номер 26',
    creationTime: '30 october',
    priority: 'high',
    tags: 'design',
    annotations: '...'
  },
  object27 = {
    title: 'Задача номер 27',
    creationTime: '21 october',
    priority: 'low',
    tags: 'development',
    annotations: '...'
  },
  object28 = {
    title: 'Задача номер 28',
    creationTime: '20 october',
    priority: 'normal',
    tags: 'research',
    annotations: '...'
  },
  object29 = {
    title: 'Задача номер 29',
    creationTime: '30 october',
    priority: 'high',
    tags: 'design',
    annotations: '...'
  },
  object30 = {
    title: 'Задача номер 30',
    creationTime: '21 october',
    priority: 'low',
    tags: 'development',
    annotations: '...'
  },
]


function onScroll(e: any) {
  if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight - 1) {
    show.value = Math.min(Tasks.length, show.value + 15);
  }
}


let show = ref(15);

let tasksToShow = computed(() => {return Tasks.slice(0, show.value)})

</script>



<style>

.TaskInstance{
  width: 65vw;
  height: fit-content;
  border: solid 1px gray;
  background-color: white;
  margin-top: 2.5vw;
}
.TaskElementTag{
  font-size: 1.75vw;
  margin-left: 1.875vw;
  margin-top: 1.25vw;
  margin-bottom: 1.25vw;
}
.TaskElementText{
  font-size: 1.375vw;
  margin-left: 1.875vw;
  margin-top: 1vw;
  margin-bottom: 0.625vw;
}

.TaskList::-webkit-scrollbar{
  width: 0;
}

.TaskList{
  float: left;
  margin: 0 10px 0 2.5vw;
  width: 65vw;
  overflow-y: scroll;
}

@media (max-width: 480px) {
.TaskElementText{
  font-size: 3vw;
}

.TaskElementTag{
  font-size: 4vw;
}



}


</style>