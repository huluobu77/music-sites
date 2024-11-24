<template>
  <div class="play-list">
    <div class="play-title" v-if="title">{{ title }}</div>
    <ul class="play-body">
      <li class="card-frame" v-for="(item, index) in playList" :key="index">
        <div class="card" @click="goAblum(item)">
          <el-image class="card-img" fit="contain" :src="HttpManager.attachImageUrl(item.pic)" />
          <div class="mask" @click="goAblum(item)">
            <yin-icon class="mask-icon" :icon="BOFANG"></yin-icon>
          </div>
        </div>
        <p class="card-name">{{ item.name || item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineComponent, getCurrentInstance, toRefs } from "vue";

import YinIcon from "@/components/layouts/YinIcon.vue";
import mixin from "@/mixins/mixin";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { Icon } from "@/enums/icon";
import { HttpManager } from "@/api";


const store = useStore();
const router = useRouter();

const BOFANG = Icon.BOFANG;
const props = defineProps({
  title: String,
  playList: Array,
  path: String,
})

const { proxy } = getCurrentInstance();
const { routerManager } = mixin();

function goAblum(item) {
  store.commit("setSongDetails", item);
  router.push(`/${props.path}/${item.id}`)
  // routerManager(props.value.path, { path: `/${props.value.path}/${item.id}` });
}

</script>

<style lang="scss" scoped>
.play-list {
  padding: 0 1rem;

  .play-title {
    height: 60px;
    line-height: 60px;
    font-size: 28px;
    font-weight: 500;
    text-align: center;
    color: var(--color-black);
    box-sizing: border-box;
  }

  .play-body {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    // @include layout(flex-start, stretch, row, wrap);
  }
}

.card-frame {
  .card {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
    border-radius: 5px;

    .card-img {
      width: 100%;
      transition: all 0.4s ease;
    }
  }

  .card-name {
    overflow: hidden;
    text-overflow: ellipsis;
    // display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin: 0.5rem 0;
  }

  &:hover .card-img {
    transform: scale(1.2);
  }
}

.mask {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
  background-color: rgba(52, 47, 41, 0.4);
  transition: all 0.3s ease-in-out;
  opacity: 0;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}
</style>
