<template>
  <nav
    class="flex flex-row justify-between items-center border-b border-gray-200 px-6 h-16"
  >
    <img
      class="h-12 cursor-pointer"
      src="@/assets/images/app-logo.png"
      alt="Logo"
      @click="changeRoute('home')"
    />
    <div class="flex flex-row justify-between items-center">
      <div
        class="flex flex-row justify-between items-center px-5 py-2 rounded-full bg-gray-200"
      >
        <input
          v-model="searchText"
          class="focus-visible:outline-none bg-transparent"
          type="text"
          placeholder="Search"
          @keyup.enter="onSearchText()"
        />
        <el-icon :size="20">
          <Search />
        </el-icon>
      </div>

      <div>
        <el-popover placement="bottom" :width="200" trigger="click">
          <div class="flex flex-col items-center">
            <el-icon :size="50">
              <User />
            </el-icon>
            Angie Castañeda Martinez
            <button
              class="max-w-50 my-2.5 p-1.5 bg-blue-logo text-white rounded"
            >
              Profile
            </button>
          </div>
          <template #reference>
            <button class="ml-10">
              <el-icon :size="20">
                <User />
              </el-icon>
            </button>
          </template>
        </el-popover>

        <button class="ml-6" @click="changeRoute('cart')">
          <el-icon :size="20">
            <ShoppingCart />
          </el-icon>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { User } from "@element-plus/icons-vue";
import { ShoppingCart } from "@element-plus/icons-vue";
import { Search } from "@element-plus/icons-vue";

const router = useRouter();
const route = useRoute();
const searchText = ref();

const onSearchText = () => {
  console.log("enteer");
  router.push({ name: "searchResults", params: { search: searchText.value } });
};

const changeRoute = (routeName, routeParams) => {
  if (route.name !== routeName) {
    router.push({ name: routeName });
  }
};
</script>
