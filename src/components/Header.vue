<template>
  <div
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
          class="focus-visible:outline-none bg-transparent"
          type="text"
          placeholder="Search"
        />
        <img class="w-4 h-4" src="../assets/images/app-icon.png" />
      </div>

      <div>
        <button>
          <img class="w-8 h-8 ml-10" src="../assets/images/app-icon.png" />
        </button>
        <button>
          <img class="w-8 h-8 ml-6" src="../assets/images/app-icon.png" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter()
const route = useRoute()

const changeRoute = (routeName) => {
  if (route.name !== routeName) {
    router.push({ name: routeName });
  }
};
</script>
