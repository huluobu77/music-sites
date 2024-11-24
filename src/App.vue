<template>
  <Header></Header>
  <yin-current-play></yin-current-play>
  <router-view></router-view>
  <Player></Player>
  <yin-audio></yin-audio>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Player from '@/components/Player.vue';
import YinAudio from "@/components/layouts/YinAudio.vue";
import YinCurrentPlay from "@/components/layouts/YinCurrentPlay.vue";

import { onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore();
onMounted(() => {

  if (sessionStorage.getItem("dataStore")) {
    store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStorage.getItem("dataStore"))));
  }

  window.addEventListener("beforeunload", () => {
    console.log('---before')
    sessionStorage.setItem("dataStore", JSON.stringify(store.state));
  });
})

</script>

<style scoped></style>
