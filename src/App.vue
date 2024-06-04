<template>
  <Header />
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<style scoped>
</style>
