<template>
    <div>
            <el-container>
            <el-main style="margin-top: 40px;">
                <h3 class="h1">全部歌单</h3>
                <button class="btn1" @click="toggleVisibility(1)">华语</button>
                <button class="btn1" @click="toggleVisibility(2)">粤语</button>
                <button class="btn1" @click="toggleVisibility(3)">欧美</button>
                <button class="btn1" @click="toggleVisibility(4)">日韩</button>
                <button class="btn1" @click="toggleVisibility(5)">轻音乐</button>
                <button class="btn1" @click="toggleVisibility(6)">BGM</button>
                <button class="btn1" @click="toggleVisibility(7)">乐器</button>
                <div class="image-grid" id="huayu" v-show="visibleDiv === 1 || showAll">
                    <div class="image-item" v-for="(item, index) in songList1" :key="index">
                        <img :src="item.image" alt="" />
                        <div class="image-description">{{ item.description }}</div>
                    </div>
                </div>
                <div class="image-grid" id="yueyu" v-show="visibleDiv === 2 || showAll">
                    <div class="image-item" v-for="(item, index) in songList2" :key="index">
                        <img :src="item.image" alt="" />
                        <div class="image-description">{{ item.description }}</div>
                    </div>
                </div>
                <div class="image-grid" id="欧美" v-show="visibleDiv === 3 || showAll">
                    <div class="image-item" v-for="(item, index) in songList3" :key="index">
                        <img :src="item.image" alt="" />
                        <div class="image-description">{{ item.description }}</div>
                    </div>
                </div>
                <div class="image-grid" id="rihan" v-show="visibleDiv === 4 || showAll">
                    <div class="image-item" v-for="(item, index) in songList4" :key="index">
                        <img :src="item.image" alt="" />
                        <div class="image-description">{{ item.description }}</div>
                    </div>
                </div>
                <div class="image-grid" id="qingyinyue" v-show="visibleDiv === 5 || showAll">
                    <div class="image-item" v-for="(item, index) in songList5" :key="index">
                        <img :src="item.image" alt="" />
                        <div class="image-description">{{ item.description }}</div>
                    </div>
                </div>
                <div class="image-grid" id="BGM" v-show="visibleDiv === 6 || showAll">
                    <div class="image-item" v-for="(item, index) in songList6" :key="index">
                        <img :src="item.image" alt="" />
                        <div class="image-description">{{ item.description }}</div>
                    </div>
                </div>
                <div class="image-grid" id="yueqi" v-show="visibleDiv === 7 || showAll">
                    <div class="image-item" v-for="(item, index) in songList7" :key="index">
                        <img :src="item.image" alt="" />
                        <div class="image-description">{{ item.description }}</div>
                    </div>
                </div>
            </el-main>
        </el-container>
        <div >
            <ul class="pagination">
              <li style="width: 80px;background-color: white;">Total 10</li>
              <li>&lt;</li>
              <li @click="toggleVisibility(1)">1</li>
              <li @click="toggleVisibility(2)">2</li>
              <li @click="toggleVisibility(3)">3</li>
              <li @click="toggleVisibility(4)">4</li>
              <li>></li>
            </ul>
        </div>
        </div>
</template>

<script setup>
import { ref } from 'vue'
import SongThumb from '../components/SongThumb.vue';
const page=ref(['<',1,2,3,4,'>']);
const songList1 = ref([
    {
        image: 'https://i.loli.net/2021/04/14/nNly8EdXJ2aHYTe.jpg',
        description: '华语'
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
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
])
const songList2 = ref([
    {
        image: 'https://i.loli.net/2021/04/14/nNly8EdXJ2aHYTe.jpg',
        description: '粤语'
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
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
])
const songList3 = ref([
    {
        image: 'https://i.loli.net/2021/04/14/nNly8EdXJ2aHYTe.jpg',
        description: '欧美'
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
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
])
const songList4 = ref([
    {
        image: 'https://i.loli.net/2021/04/14/nNly8EdXJ2aHYTe.jpg',
        description: '日韩'
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
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
])
const songList5 = ref([
    {
        image: 'https://i.loli.net/2021/04/14/nNly8EdXJ2aHYTe.jpg',
        description: '轻音乐'
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
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
])
const songList6 = ref([
    {
        image: 'https://i.loli.net/2021/04/14/nNly8EdXJ2aHYTe.jpg',
        description: 'BGM'
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
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
])
const songList7 = ref([
    {
        image: 'https://i.loli.net/2021/04/14/nNly8EdXJ2aHYTe.jpg',
        description: '乐器'
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
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        description: '无线循环，解压'
    }, 
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
    {
        image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        description: '旅行必备'
    },
])
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
.btn1:hover{
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
    background-color:rgba(244, 244, 245, 1);
    text-align: center;
  }
  
  .pagination li.active a {
    color: white;
    background-color: #007bff;
  }
  .pagination a{
    color:gray;
    text-decoration: none;
  }
  .pagination a:hover{
    color: white;
  }
  .pagination li:hover{
    background-color:rgba(64, 158, 255, 1);
  }
</style>
