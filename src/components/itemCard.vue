<template>
  <div class="flex flex-col justify-center w-80">
    <img src="" alt="" />
    <span>item name</span>
    <el-rate v-model="rating" :colors="colors" disabled />
    <span>price $14.00</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const rating = ref(3);
const colors = ref(["#99A9BF", "#F7BA2A", "#FF9900"]);
</script>

<style scoped>
.el-rate :deep() {
  display: block;
}
</style>

