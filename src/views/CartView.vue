<template>
  <section class="cart mt-8" :key="cartList.length">
    <div v-if="cartList.length === 0">Add products in the cart!</div>
    <div v-else class="flex flex-col">
      <span class="mb-7 text-xl">Shopping Cart</span>
      <div v-for="product in cartList" :key="product.id" class="flex flex-col">
        <CartItemCard :itemData="product" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import useProductsStore from "@/stores/modules/products";
import { storeToRefs } from "pinia";
import CartItemCard from "../components/cartItemCard.vue";

const route = useRoute();
const productsStore = useProductsStore();
const { cartList } = storeToRefs(productsStore);
</script>

<style scoped>
.cart {
  padding: 0 10%;
}
</style>

