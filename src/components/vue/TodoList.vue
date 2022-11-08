<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useFetch } from "../ts/fetch";

const { data, error } = await useFetch();
</script>

<template>
  <div v-if="error">Ha ocurrido un error</div>
  <ul v-else-if="data">
    <li v-for="item in data">
      {{ item.title }}
    </li>
  </ul>
</template>

<style scoped></style>
