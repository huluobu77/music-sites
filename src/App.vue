<template>
  <Header></Header>
  <router-view></router-view>
  <Player></Player>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Player from './components/Player.vue';
</script>

<style scoped></style>
