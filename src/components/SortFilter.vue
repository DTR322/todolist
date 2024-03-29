

<template class="Sort">

    <div id="SortFilter" class ="SortFilter">
      <p class = "SortTag">Сортировка</p>
      <input type="radio" id="new" value="New" v-model="picked" class="Text"/>
      <label for="new" class="Text">Новые</label>
      <p class="Text"></p>
      <input type="radio" id="old" class="Text" value="Old" v-model="picked"/>
      <label for="Old" class="Text">Старые</label>
    </div>
</template>


<script setup lang = "ts">
import {ref} from 'vue'
const picked = ref('New')

</script>


<style>
.SortFilter{
  height: fit-content;
  background-color: rgb(253, 253, 253);
  border: solid 1px #D3D2D2FF;
  padding: 2vw;
}
.SortTag{
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 2vw;
}
.Text{
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 2.25vw;
}

input.Text{
  width: 2vw;
  height: 2vw;
}

@media (max-width: 480px) {
input.Text{
  width: 5vw;
  height: 5vw;
}

.Text{
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 5vw;
}

.SortTag{
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 4.5vw;
}
}


</style>