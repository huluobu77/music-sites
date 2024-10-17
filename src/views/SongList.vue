<template>
    <div>歌单
        <!-- 分类 -->
        <!-- 根据分类加载的歌单列表 -->
        <div class="image-grid">
            <SongThumb v-for="item in songList" :item="item"></SongThumb>
        </div>
        <!-- 分页 -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
import SongThumb from '../components/SongThumb.vue';
const songList = ref([
    {
        image: 'https://i.loli.net/2021/04/14/nNly8EdXJ2aHYTe.jpg',
        description: '无线循环，解压'
    }, {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    }, {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, {
        image: 'https://i.loli.net/2021/04/14/nNly8EdXJ2aHYTe.jpg',
        description: '无线循环，解压'
    }, {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    }, {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
])
</script>

<style lang="scss" scoped>
.image-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    /* 列间距 */
    margin-top: 20px;
    /* 上边距 */
}
</style>
