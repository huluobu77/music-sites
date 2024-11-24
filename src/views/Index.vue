<template>
    <div class="index">
        <el-carousel v-if="swiperList.length" class="swiper-container" type="card" height="20vw" :interval="4000">
            <el-carousel-item v-for="(item, index) in swiperList" :key="index">
                <img :src="HttpManager.attachImageUrl(item.pic)" />
            </el-carousel-item>
        </el-carousel>
        <el-container>
            <el-main>
                <h3>歌单推荐</h3>
                <div class="image-grid">
                    <SongThumb path="song-detail" v-for="(item, index) in songList" :key="index" :item="item"></SongThumb>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElCarousel, ElCarouselItem, ElContainer, ElMain } from 'element-plus'; // 导入必要的组件
import SongThumb from '../components/SongThumb.vue';
// import playList from '../components/PlayList.vue'
import { HttpManager } from '@/api';
import { BASIC_IAMAGE_URL } from './../constant.js'
// 定义轮播内容，包含图片路径和文本
const carouselItems = ref([
]);

const songList = ref([]); // 歌单列表
const singerList = ref([]); // 歌手列表
const swiperList = ref([]);// 轮播图 每次都在进行查询
try {

    HttpManager.getBannerList().then((res) => {
        swiperList.value = (res).data.sort();
    });

    HttpManager.getSongList().then((res) => {
        songList.value = (res).data.sort().slice(0, 10);
    });

    HttpManager.getAllSinger().then((res) => {
        singerList.value = (res).data.sort().slice(0, 10);
    });

    onMounted(() => {
        // changeIndex(NavName.Home);
    });
} catch (error) {
    console.error(error);
}


</script>

<style scoped>
.index {
    margin-top: 20px;
    padding: 0 40px;
    margin-bottom: 150px;
}

.carousel-image {
    width: 100%;
    height: 398px;
}

.image-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    /* 列间距 */
    /* margin-top: 20px; */
    /* 上边距 */
}

.image-item {
    position: relative;
    border-radius: 10px;
    /* 圆角 */
    text-align: center;
    /* 内容居中 */

    /* padding: 10px; */
    /* 内边距，确保图片与边缘有10px的距离 */
}


.image-item img {
    height: auto;
    /* 保持比例 */
    border-radius: 10px;
    /* 圆角 */
    width: 250px;
    /* 设置宽度为100%以自适应父容器 */
    height: 250px;
    /* 固定高度为100px */
}

.image-description {
    margin-top: 8px;
    /* 描述与图片的间距 */
}
</style>
