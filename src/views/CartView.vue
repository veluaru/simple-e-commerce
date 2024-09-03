<template>
  <section class="flex flex-row m-8 gap-x-5" m="t-4">
    <div v-if="cartList.length === 0">
        Add products in the cart!
    </div>
    <div v-else v-for="product in cartList" :key="product.id">
        {{product.title}}
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import useProductsStore from "@/stores/modules/products";
import { storeToRefs } from "pinia";

const route = useRoute();
const productsStore = useProductsStore();
const { cartList } = storeToRefs(productsStore);

</script>

