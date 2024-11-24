<template>
  <div class="song-list">
    <el-container>
      <el-main>
        <YinNav :styleList="singerStyle" :activeName="activeName" @click="handleChangeView"></YinNav>
        <div class="image-grid">
          <SongThumb path="singer-detail" v-for="(item, index) in data" :key="item.id" :item="item"></SongThumb>
        </div>
      </el-main>
    </el-container>
    <div class="pagination">
      <el-pagination class="pagination" background layout="total, prev, pager, next" :current-page="currentPage"
        :page-size="pageSize" :total="allPlayList.length" @current-change="handleCurrentChange">
      </el-pagination>
    </div>
    <div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import YinNav from '@/components/YinNav.vue'
import SongThumb from '@/components/SongThumb.vue';

import { singerStyle } from "@/enums/singer";
import { HttpManager } from '@/api';

const activeName = ref("全部歌手");
const pageSize = ref(15); // 页数
const currentPage = ref(1); // 当前页
const allPlayList = ref([]); // 歌单

const data = computed(() => allPlayList.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value));

// 获取所有歌手
async function getAllSinger() {
  const result = (await HttpManager.getAllSinger());
  currentPage.value = 1;
  allPlayList.value = result.data;
}

getAllSinger();

// 获取当前页
function handleCurrentChange(val) {
  currentPage.value = val;
}

function handleChangeView(item) {
  activeName.value = item.name;
  allPlayList.value = [];
  if (item.name === "全部歌手") {
    getAllSinger();
  } else {
    getSingerSex(item.type);
  }
}

// 通过性别对歌手分类
async function getSingerSex(sex) {
  const result = (await HttpManager.getSingerOfSex(sex));
  currentPage.value = 1;
  allPlayList.value = result.data;
}
</script>
<style scoped>
.song-list {
  padding: 0 40px;
  margin-bottom: 150px;
}


.image-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.pagination {
  display: flex;
  justify-content: center;
}
</style>
