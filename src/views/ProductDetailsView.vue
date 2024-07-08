<template>
  <section class="flex flex-row m-8 gap-x-5" m="t-4" v-if="productData">
    <div>
      <img :src="productData.images[0]" alt="" class="rounded max-w-sm" />
    </div>
    <div class="flex flex-col gap-y-1.5">
      <span>{{ productData.title }}</span>
      <el-rate v-model="rating" :colors="colors" disabled />
      <span>{{ productData.description }}</span>
      <span>Price {{ productData.price }}</span>
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
const colors = ref(["#99A9BF", "#F7BA2A", "#FF9900"]);
const productsStore = useProductsStore();

onBeforeMount(async () => {
  console.log(route.params.id);
    productData.value = await productsStore.getProductById({
      id: route.params.id,
    });
});
</script>

