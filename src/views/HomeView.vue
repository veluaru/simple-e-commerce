<template>
  <div class="block text-center" m="t-4">
    <el-carousel trigger="click" height="650px">
      <el-carousel-item>
        <picture>
          <source media="(min-width:800px)" srcset="../assets/images/banner1.jpg" class="max-h-fit"  />
          <img src="../assets/images/bannerResponsive1.jpg" alt="Home banner 1" class="max-h-fit" />
        </picture>
      </el-carousel-item>
      <el-carousel-item>
        <picture>
          <source media="(min-width:800px)" srcset="../assets/images/banner2.jpg" class="max-h-fit"  />
          <img src="../assets/images/bannerResponsive2.jpg" alt="Home banner 2" class="max-h-fit"/>
        </picture>
      </el-carousel-item>
      <el-carousel-item>
        <picture>
          <source media="(min-width:800px)" srcset="../assets/images/banner3.jpg" class="max-h-fit" />
          <img src="../assets/images/bannerResponsive3.jpg" alt="Home banner 3" class="max-h-fit" />
        </picture>
      </el-carousel-item>
    </el-carousel>
    <span></span>
    <div class="flex flex-row justify-center">
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  </div>
</template>

<script setup>
import ItemCard from "../components/itemCard.vue";
</script>

