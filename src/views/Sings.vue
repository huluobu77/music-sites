<template>
  <div>
    <el-container>
      <el-main style="margin-top: 40px;">
        <h3 class="h1">全部歌手</h3>
        <button class="btn1" @click="toggleVisibility(1)">男歌手</button>
        <button class="btn1" @click="toggleVisibility(2)">女歌手</button>
        <button class="btn1" @click="showAllDivs">全部歌手</button>
        <div class="image-grid" id="nan" v-show="visibleDiv === 1 || showAll">
          <div class="image-item" v-for="(item, index) in sings1" :key="index" @click="goDetail">
            <img :src="item.image" alt=""  @click="singerdetailPage"/>
            <div class="image-description">{{ item.description }}</div>
          </div>
        </div>
        <div class="image-grid" id="nv" v-show="visibleDiv === 2 || showAll">
          <div class="image-item" v-for="(item, index) in sings2" :key="index">
            <img :src="item.image" alt="" @click="singerdetailPage"/>
            <div class="image-description">{{ item.description }}</div>
          </div>
        </div>
      </el-main>
    </el-container>

    <div>
      <ul class="pagination">
        <li style="width: 80px;background-color: white;">Total 10</li>
        <li>&lt;</li>
        <li @click="showAllDivs">1</li>
        <li>></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { httpManager } from '@/api';
const router = useRouter();
const singerdetailPage = () => {
    router.push('/SingerDetail')
}
const sings1 = ref([
  { image: "/src/assets/images/sing.jpg", description: "男歌手" },
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
const sings2 = ref([
  { image: "/src/assets/images/sing.jpg", description: "女歌手" },
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
const page = ref(['<', 1, '>']);
const goDetail = () => {
  router.push('/singerDetail')
}

</script>
<script>
export default {
  name: 'ToggleDivsWithAllButton',
  data() {
    return {
      visibleDiv: 1,
      showAll: false,
    };
  },
  methods: {
    toggleVisibility(divNumber) {
      this.visibleDiv = divNumber;
      this.showAll = false;
    },
    showAllDivs() {
      this.showAll = true;
      this.visibleDiv = null;
    },
  },
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.h1 {
  display: inline;
  margin: 30px;
}

.btn1 {
  border: none;
  background: white;
  margin-left: 30px;
  color: gray;
}

.btn1:hover {
  color: black;
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

.pagination {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.pagination li {
  cursor: pointer;
  padding: 5px 10px;
  width: 30px;
  height: 25px;
  margin: 0 5px;
  background-color: rgba(244, 244, 245, 1);
  text-align: center;
}

.pagination li.active a {
  color: white;
  background-color: #007bff;
}

.pagination a {
  color: gray;
  text-decoration: none;
}

.pagination a:hover {
  color: white;
}

.pagination li:hover {
  background-color: rgba(64, 158, 255, 1);
}
</style>
