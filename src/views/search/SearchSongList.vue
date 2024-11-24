<template>
  <div class="search-song-list">
    <play-list :playList="playList" path="song-detail"></play-list>
  </div>
</template>

<script setup>
import { defineComponent, ref, computed, watch, onMounted, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router'
import PlayList from "@/components/PlayList.vue";
import { HttpManager } from "@/api";

const store = useStore();
const route = useRoute();

const playList = ref([]);
const searchWord = computed(() => store.getters.searchWord);
watch(searchWord, (value) => {
  getSearchList(value);
});

async function getSearchList(value) {
  if (!value) return;
  const result = (await HttpManager.getSongListOfLikeTitle(value));
  if (!result.data.length) {
    ElMessage.error("暂无该歌曲内容")
  } else {
    playList.value = result.data;
  }
}

onMounted(() => {
  getSearchList(route.query.keywords);
});

</script>
