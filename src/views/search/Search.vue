<template>
  <div class="search">
    <yin-nav :styleList="searchNavList" :activeName="activeName" @click="handleChangeView"></yin-nav>
    <component v-if="currentView == 'SearchSong'" class="search-list" :is="SearchSong"></component>
    <component v-else class="search-list" :is="SearchSongList"></component>

  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, nextTick } from "vue"
import YinNav from "@/components/YinNav.vue";
import SearchSong from "@/views/search/SearchSong.vue";
import SearchSongList from "@/views/search/SearchSongList.vue";

const searchNavList = ref([
  {
    name: "歌曲",
    value: "SearchSong",
  },
  {
    name: "歌单",
    value: "SearchSongList",
  },
])

const activeName = ref("歌曲");
const currentView = ref("SearchSong");

function handleChangeView(item) {
  activeName.value = item.name;
  currentView.value = item.value;
}
</script>

<style lang="scss" scoped>
.search {
  margin: auto;
  width: 900px;

  .search-list {
    min-height: 480px;
  }
}
</style>
