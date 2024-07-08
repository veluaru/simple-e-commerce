<template>
  <div class="flex flex-col w-80 rounded shadow-lg cursor-pointer hover:scale-105 transform transition duration-400">
    <img :src="itemData.images[0]" alt="" class="rounded" />
    <div class="p-2">
      <span>{{ itemData.title }}</span>
      <el-rate v-model="rating" :colors="colors" disabled />
      <span>price {{ itemData.price }}</span>
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
const colors = ref(["#99A9BF", "#F7BA2A", "#FF9900"]);
</script>

<style scoped>
.el-rate :deep() {
  display: block;
}
</style>

