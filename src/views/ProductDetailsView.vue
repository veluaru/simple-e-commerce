<template>
  <section class="product-details mt-4" v-if="productData">
    <div class="flex flex-row m-8 gap-x-5">
    <div>
      <img :src="productData.image" alt="" class="rounded max-w-sm" />
    </div>
    <div class="flex flex-col gap-y-1.5">
      <span class="font-bold">{{ productData.title }}</span>
      <span>{{ productData.description }}</span>
      <span class="font-semibold">${{ productData.price }}</span>
      <el-rate v-model="productData.rating.rate" :colors="colors" disabled />
      <button class="max-w-60 my-2.5 p-1.5 bg-blue-logo text-white rounded">Buy now</button>
      <button class="max-w-60 border-2 p-1.5 border-blue-logo text-blue-logo rounded" @click="addToCart(productData)">Add to cart</button>
    </div>
    </div>
    <div>
      <span>Related products</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { useRoute } from "vue-router";
import useProductsStore from "@/stores/modules/products";

const route = useRoute();
const productData = ref(null);
const rating = ref(3);
const colors = ref(["#99A9BF", "#f8ca2e", "#f5a04d"]);
const productsStore = useProductsStore();

const addToCart = (product) => {
  productsStore.addProductToCart(product);
}

onBeforeMount(async () => {
    productData.value = await productsStore.getProductById({
      id: route.params.id,
    });
});
</script>

<style scoped>
.product-details {
  padding: 0 10%
}
</style>

