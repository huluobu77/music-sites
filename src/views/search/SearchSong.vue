<template>
  <div class="search-song">
    <song-list :songList="currentSongList"></song-list>
  </div>
</template>

<script setup>
import { defineComponent, ref, computed, watch, onMounted, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router'
import SongList from "@/components/SongList.vue";
import { HttpManager } from "@/api";


const { proxy } = getCurrentInstance();
const store = useStore();
const route = useRoute();

const currentSongList = ref([]); // 存放的音乐
const searchWord = computed(() => store.getters.searchWord);
watch(searchWord, (value) => {
  searchSong(value);
});

// 搜索音乐
async function searchSong(value) {
  if (!value) {
    currentSongList.value = [];
    return;
  }
  const result = (await HttpManager.getSongOfSingerName(value));
  console.log(result)
  if (!result.data || !result.data.length) {
    currentSongList.value = [];
    ElMessage.error('暂时没有相关歌曲')
  } else {
    currentSongList.value = result.data;
  }
}

onMounted(() => {
  searchSong(route.query.keywords);
});

</script>
