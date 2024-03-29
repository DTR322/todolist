<template>
  <div id="TagsAndPriorities" class="TagsAndPriorities">
    <div class="Priorities">
      <p class="TagsPriorities">Приоритет</p>
      <div>
        <input type="checkbox" value="Low" v-model="vModelCheckbox" class="checkbox">
        <label>Low</label>
      </div>

      <div>
        <input type="checkbox" value="Normal" v-model="vModelCheckbox" class="checkbox">
        <label>Normal</label>
      </div>

      <div>
        <input type="checkbox" value="High" v-model="vModelCheckbox" class="checkbox">
        <label>High</label>
      </div>
    </div>

    <div class="Priorities">
      <p class="TagsPriorities">Отметка</p>

      <div>
        <input type="checkbox" value="Research" v-model="vModelCheckbox" class="checkbox">
        <label>Research</label>
      </div>

      <div>
        <input type="checkbox" value="Design" v-model="vModelCheckbox" class="checkbox">
        <label class>Design</label>
      </div>

      <div>
        <input type="checkbox" value="Development" v-model="vModelCheckbox" class="checkbox">
        <label>Development</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {vModelCheckbox} from "vue";
</script>


<style>
  .TagsAndPriorities{
    height: fit-content;
    background-color: rgb(253, 253, 253);
    font-size: 1.5vw;
    border: solid 1px #D3D2D2FF;
    margin-top: 20px;
    padding: 2vw;

  }
  
  .TagsPriorities{
    font-size: 2.125vw;
    padding: 0;
    margin-top: 10px;
    margin-bottom: 10px;
  }


  input.checkbox{
    width: 2vw;
    height: 2vw;
  }

label{
  margin: 0.25vw;
  position: relative;
  bottom: 0.5vw;
}


@media (max-width: 480px) {
.Priorities{
  display: inline-block;
  width: 45%;
}

.TagsAndPriorities{
  font-size: 4vw;
}

.TagsPriorities{
  font-size: 5vw;
}

  input.checkbox{
    width: 5vw;
    height: 5vw;
  }

}
</style>