<template>
  <section class="block" m="t-4">
    <div
      class="m-8"
      v-if="searchResultsProducts.length > 0 && !loadingProducts"
    >
      <h2 class="mt-10 mb-8 text-xl">Search results for {{ route.params.search }}</h2>
      <div class="flex flex-row gap-6 flex-wrap">
        <ItemCard
          :itemData="item"
          v-for="item in searchResultsProducts"
          :key="item.id"
          @click="clickItemCard(item)"
        />
      </div>
    </div>
    <h3 v-if="searchResultsProducts.length == 0 && !loadingProducts">
      No results
    </h3>
    <div
      v-if="loadingProducts"
      v-loading="loadingProducts"
      element-loading-text="Cargando..."
      element-loading-background="transparent"
    ></div>
  </section>
</template>

<script setup>
import { ref, onBeforeMount, watch  } from "vue";
import { useRoute, useRouter } from "vue-router";
import useProductsStore from "@/stores/modules/products";
import ItemCard from "../components/itemCard.vue";

const router = useRouter();
const route = useRoute();
const productsStore = useProductsStore();
const searchResultsProducts = ref([]);
const loadingProducts = ref(false);

onBeforeMount(async () => {
  loadingProducts.value = true;
  searchResultsProducts.value = await productsStore.getProducts({
    title: route.params.search,
  });
  loadingProducts.value = false;
});

const clickItemCard = (item) => {
  router.push({ name: "productDetails", params: { id: item.id } });
};
</script>

<style scoped>
.el-loading-parent--relative :deep() {
  position: initial !important;
}
</style>
