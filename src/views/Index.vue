<template>
    <div>
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
                <img :src="item.image" alt="" class="carousel-image" />
            </el-carousel-item>
        </el-carousel>

        <el-container>
            <el-main>
                <h3>歌单推荐</h3>
                <div class="image-grid">
                    <div class="image-item" v-for="(item, index) in gridItems" :key="index">
                        <img :src="item.image" alt="" />
                        <div class="image-description">{{ item.description }}</div>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElCarousel, ElCarouselItem, ElContainer, ElMain } from 'element-plus'; // 导入必要的组件

// 定义轮播内容，包含图片路径和文本
const carouselItems = ref([
    { image: "/src/assets/images/image.png" },
    { image: "/src/assets/images/image.png" },
    { image: "/src/assets/images/image.png" },
]);

// 定义网格内容
const gridItems = ref([
    { image: "/src/assets/images/image.png", description: "描述 1" },
    { image: "/src/assets/images/image.png", description: "描述 2" },
    { image: "/src/assets/images/image.png", description: "描述 3" },
    { image: "/src/assets/images/image.png", description: "描述 4" },
    { image: "/src/assets/images/image.png", description: "描述 5" },
    { image: "/src/assets/images/image.png", description: "描述 6" },
    { image: "/src/assets/images/image.png", description: "描述 7" },
    { image: "/src/assets/images/image.png", description: "描述 8" },
]);
</script>

<style scoped>
.el-carousel__item {
    position: relative;
}

.carousel-image {
    width: 1776px;
    height: 398px;
}

.image-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px; /* 列间距 */
    margin-top: 20px; /* 上边距 */
}
.image-item {
    position: relative;
    border-radius: 10px; /* 圆角 */
    text-align: center; /* 内容居中 */
    
    padding: 10px; /* 内边距，确保图片与边缘有10px的距离 */
}


.image-item img {
    height: auto; /* 保持比例 */
    border-radius: 10px; /* 圆角 */
    width: 150px; /* 设置宽度为100%以自适应父容器 */
    height: 150px; /* 固定高度为100px */
}

.image-description {
    margin-top: 8px; /* 描述与图片的间距 */
}
</style>
