<template>
  <BackButton class="BackButton" @click="router.push({path: '/TaskAdd'})"/>
  <TaskRedactionOverview/>
  <p></p>
</template>

<script setup lang="ts">

import BackButton from "@/components/BackButton.vue";
import router from "@/router";
import TaskRedactionOverview from "@/components/TaskRedactionOverview.vue";

</script>

<style scoped>

</style>