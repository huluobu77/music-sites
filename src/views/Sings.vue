<template>
    <div>
        <el-container>
            <el-main style="margin-top: 40px;">
                <h3 class="h1">全部歌单</h3>
                <button class="btn1">华语</button>
                <button class="btn1">粤语</button>
                <button class="btn1">欧美</button>
                <button class="btn1">日韩</button>
                <button class="btn1">轻音乐</button>
                <button class="btn1">BGM</button>
                <button class="btn1">乐器</button>
                <div class="image-grid">
                    <div class="image-item" v-for="(item, index) in gridItems" :key="index">
                        <img :src="item.image" alt="" />
                        <div class="image-description">{{ item.description }}</div>
                    </div>
                </div>
            </el-main>
        </el-container>
       
        <div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { httpManager } from '@/api';
const gridItems = ref([
    { image: "/src/assets/images/sing.jpg", description: "描述 1" },
    { image: "/src/assets/images/sing.jpg", description: "描述 2" },
    { image: "/src/assets/images/sing.jpg", description: "描述 3" },
    { image: "/src/assets/images/sing.jpg", description: "描述 4" },
    { image: "/src/assets/images/sing.jpg", description: "描述 5" },
    { image: "/src/assets/images/sing.jpg", description: "描述 6" },
    { image: "/src/assets/images/sing.jpg", description: "描述 7" },
    { image: "/src/assets/images/sing.jpg", description: "描述 8" },
    { image: "/src/assets/images/sing.jpg", description: "描述 9" },
    { image: "/src/assets/images/sing.jpg", description: "描述 10" },
]);

const getAllBanner = async () => {
    httpManager.test();
    const res = await httpManager.getAllBanner();
    console.log(res)
}

getAllBanner();

</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
.h1{
    display: inline;
    margin: 30px;
}
.btn1{
    border: none;
    background: white;
    margin-left: 30px;
    color: gray;
}
.image-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    margin-top: 20px;
}

.image-item {
    position: relative;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
}


.image-item img {
    height: auto;
    border-radius: 10px;
    width: 250px;
    height: 250px;
}

.image-description {
    margin-top: 8px;
}
</style>
