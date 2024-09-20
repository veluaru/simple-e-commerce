<template>
  <div class="flex flex-row rounded shadow-lg px-8 py-5 relative">
    <img :src="itemData.image" alt="" class="rounded h-64" />
    <div class="flex flex-col ml-7 pt-8">
      <span class="truncateNLines">{{ itemData.title }}</span>
      <el-rate v-model="itemData.rating.rate" :colors="colors" disabled />
      <span class="">Quantity: {{ itemData.quantity }}</span>
      <span class="font-semibold">${{ itemData.price }}</span>
    </div>
    <div class="absolute bottom-3 right-3 cursor-pointer">
      <el-icon :size="40" color="red" @click="removeFromCart()">
        <Delete />
      </el-icon>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Delete } from "@element-plus/icons-vue";
import useProductsStore from "@/stores/modules/products";

const productsStore = useProductsStore();

const props = defineProps({
  itemData: {
    type: Object,
    default: {},
    required: true,
  },
});

const removeFromCart = () => {
  productsStore.removeProductfromCart(props.itemData);
};

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

