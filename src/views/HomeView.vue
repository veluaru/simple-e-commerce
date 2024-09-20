<template>
  <section class="home block" m="t-4">
    <el-carousel trigger="click" height="650px">
      <el-carousel-item>
        <picture>
          <source
            media="(min-width:1000px)"
            srcset="../assets/images/banner1.jpg"
            class="max-h-fit"
          />
          <img
            src="../assets/images/bannerResponsive1.jpg"
            alt="Home banner 1"
            class="max-h-fit"
          />
        </picture>
      </el-carousel-item>
      <el-carousel-item>
        <picture>
          <source
            media="(min-width:1000px)"
            srcset="../assets/images/banner2.jpg"
            class="max-h-fit"
          />
          <img
            src="../assets/images/bannerResponsive2.jpg"
            alt="Home banner 2"
            class="max-h-fit"
          />
        </picture>
      </el-carousel-item>
      <el-carousel-item>
        <picture>
          <source
            media="(min-width:1000px)"
            srcset="../assets/images/banner3.jpg"
            class="max-h-fit"
          />
          <img
            src="../assets/images/bannerResponsive3.jpg"
            alt="Home banner 3"
            class="max-h-fit"
          />
        </picture>
      </el-carousel-item>
    </el-carousel>
    <div class="flex flex-col items-center justify-center m-8">
      <h1 class="mb-8 text-2xl">New Items!</h1>
      <div class="flex flex-row gap-6">
        <ItemCard
          :itemData="item"
          v-for="item in homeProducts"
          :key="item.id"
          @click="clickItemCard(item)"
        />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center m-8">
      <h1 class="mb-8 text-2xl">Oulet</h1>
      <div class="flex flex-row gap-6">
        <ItemCard
          :itemData="item"
          v-for="item in homeProducts"
          :key="item.id"
          @click="clickItemCard(item)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import useProductsStore from "@/stores/modules/products";
import ItemCard from "../components/itemCard.vue";
import { useRouter } from "vue-router";

const productsStore = useProductsStore();
const homeProducts = ref([]);
const router = useRouter();

onBeforeMount(async () => {
  homeProducts.value = await productsStore.getProducts({ limit: 4, offset: 0 });
});
const clickItemCard = (item) => {
  router.push({ name: "productDetails", params: { id: item.id } });
};
</script>

<style scoped>
.home {
  padding: 0 10%
}
</style>

