<template>
    <div class="song-list">
        <el-container>
            <el-main>
                <YinNav :styleList="songStyle" :activeName="activeName" @click="handleChangeView"></YinNav>
                <div class="image-grid">
                    <SongThumb path="song-detail" v-for="(item, index) in data" :key="item.id" :item="item"></SongThumb>
                </div>
            </el-main>
        </el-container>
        <div class="pagination">
            <el-pagination background layout="total, prev, pager, next" :current-page="currentPage" :page-size="pageSize"
                :total="allPlayList.length" @current-change="handleCurrentChange">
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

import { SONGSTYLE } from '@/enums/songList.js'
import { HttpManager } from '@/api';

const activeName = ref("全部歌单");
const pageSize = ref(15); // 页数
const currentPage = ref(1); // 当前页
const songStyle = ref(SONGSTYLE); // 歌单导航栏类别
const allPlayList = ref([]); // 歌单
const data = computed(() => allPlayList.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value));

// 获取全部歌单
async function getSongList() {
    allPlayList.value = (await HttpManager.getSongList()).data;
    currentPage.value = 1;
}

// 通过类别获取歌单
async function getSongListOfStyle(style) {
    allPlayList.value = (await HttpManager.getSongListOfStyle(style)).data;
    currentPage.value = 1;
}
try {
    getSongList();
} catch (error) {
    console.error(error);
}
// 获取歌单
async function handleChangeView(item) {
    console.log('first')
    activeName.value = item.name;
    allPlayList.value = [];
    try {
        if (item.name === "全部歌单") {
            await getSongList();
        } else {
            await getSongListOfStyle(item.name);
        }
    } catch (error) {
        console.error(error);
    }
}
// 获取当前页
function handleCurrentChange(val) {
    currentPage.value = val;
}
</script>
<style scoped>
.song-list {
    margin-bottom: 150px;
    padding: 0 40px;
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
