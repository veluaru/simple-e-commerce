<template>
  <div
    class="flex flex-col w-72 rounded shadow-lg cursor-pointer hover:scale-105 transform transition duration-400"
  >
    <img :src="itemData.image" alt="" class="rounded h-64" />
    <div class="p-2">
      <span class="truncateNLines">{{ itemData.title }}</span>
      <el-rate v-model="itemData.rating.rate" :colors="colors" disabled />
      <span class="font-semibold">${{ itemData.price }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  itemData: {
    type: Object,
    default: {},
    required: true,
  },
});

const rating = ref(3);
const colors = ref(["#99A9BF", "#f8ca2e", "#f5a04d"]);
</script>

<style scoped>
.truncateNLines {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.el-rate :deep() {
  display: block;
}
</style>

