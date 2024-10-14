<template>
  <Header></Header>
  <router-view></router-view>
  
</template>

<script setup>
import Header from '@/components/Header.vue';
import { httpManager } from './api';
httpManager.test()
</script>

<style scoped></style>
