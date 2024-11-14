<template>
    <div class="container">

        <div class="top">
            <div class="left" style="display: inline-block;">
                <img plain class="i1"
                    src="https://img.js.design/assets/img/66ed6064e466ac358fa15bcc.jpg">
            </div>

            <div class="right">
                <div class="text" v-for="(item, index) in sing" :key="index">
                    <h1>
                    {{ item.title }}
                    </h1>
                    <span style="margin-left: 125px;color: gray;">{{ item.introduce }}&nbsp;&nbsp;&nbsp;&nbsp;</span><br>
                    
                    <span style="margin-left: 125px;color: gray;">评分:<i class="star" style="margin-left: 8px;">&#9733;</i>
                        <i class="star">&#9733;</i><i class="star">&#9733;</i><i class="star1">&#9733;</i>
                        <i class="star1">&#9733;</i></span>
                        <span style="font-size: 9px;margin-left: 10px;margin-right: 50px;">3星</span>
                        <span style="color: gray;">已评分:<i class="star" style="margin-left: 8px;">&#9733;</i>
                        <i class="star">&#9733;</i><i class="star">&#9733;</i><i class="star1">&#9733;</i>
                        <i class="star1">&#9733;</i></span>
                        <span style="font-size: 9px;margin-left: 10px;">3星</span><br>
                    <button class="btn_1"><img src="/src/assets/images/播放.png" width="15px" height="15px">播放全部</button>
                </div>
            </div>

        </div>

        <div class="bottom">
            <el-table :data="tableData" >
                <el-table-column prop="number" label="#" width="80" class="customcolumnheight" />
                <el-table-column prop="song" label="歌曲" width="300" />
                <el-table-column prop="singer" label="歌手" width="300" />
                <el-table-column prop="album" label="专辑" width="300" />
                <el-table-column prop="time" label="时长" />
            </el-table>
           
        </div>

    </div>
</template>


<script setup lang="js">

import { ElUpload, ElMessageBox, ElMessage } from 'element-plus';
import { useRouter } from 'vue-router'
import { h, reactive } from 'vue';
import { ref } from 'vue';
const router = useRouter();
const goModifyUserPage = () => {
    router.push('/userEdit')
}

const sing=[{ title: '听完也该释怀了吧',
                introduce:'简介:"那些喜欢到循环播放的歌"'}]
// el-table的定义数据
const tableData = [
    {
        number: '01',
        song: '爱的回归线',
        singer: '周琳',
        album: '巨好听的歌《第五期》',
        time: '3:42',
    },
    {
        number: '02',
        song: '爱的回归线',
        singer: '周琳',
        album: '巨好听的歌《第五期》',
        time: '3:42',
    },
    {
        number: '03',
        song: '爱的回归线',
        singer: '周琳',
        album: '巨好听的歌《第五期》',
        time: '3:42',
    },
    {
        number: '04',
        song: '爱的回归线',
        singer: '周琳',
        album: '巨好听的歌《第五期》',
        time: '3:42',
    },
]



</script>


<style lang="scss" scoped>
* {
    padding: 0px;
    margin: 0px;
}
.btn_1{
    background-color: transparent;
    margin-left: 125px;
    border: 0.5px solid grey;
    padding: 4px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 4px;
}
.top {
    margin-top: 40px;
    height: 200px;
    max-height: 100%;
    position: relative;
    margin-right: 50px;
}

// 头像区域的背景设置
.top::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    right: 0;
    bottom: 0;
    background: url(https://img.js.design/assets/img/66ed6064e466ac358fa15bcc.jpg);
    opacity: 30%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    filter: blur(20px);
    z-index: -1;
    /* 将伪元素置于底层，不影响其他内容的交互 */
}

        
.left {
    float: left;
    width: 20%;

}

.right {
    float: right;
    width: 80%;
    height: 100%;
    line-height: 40px;
    font-family: "微软雅黑";
    font-size: 16px;
}

.text {
    margin-top: 20px;
    display: inline-block;
    height: 100%;
}

.i1 {
    height: 180px;
    border-radius: 20%;
    overflow: hidden;
    width: 210px;
    max-height: 100%;
    margin-top: 5px;
    margin-left: 80px;

}

.i2 {
    width: 20px;
    margin-left: 20px;

}

h1 {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-left: 50px;
}

h4 {
    position: absolute;
    /* 将标题设置为绝对定位 */
    top: 20px;
    /* 距离顶部为0 */
    left: 50px;
    /* 距离左侧为0 */
    // font-weight: 545;
}

h5 {
    margin-top: 10px;
    color: gray;
    font-weight: 10;
}

.bottom {
    position: relative;
    height: 260px;
}

.el-table {
    padding-top: 50px;
    background: none;
    padding-left: 60px;
    padding-right: 30px;
}
.star {
  
  color: #FFD700; /* 五角星颜色 */
  /* 其他样式如五角星的形状等 */
}
.star1{
  
  color:gainsboro;/* 五角星颜色 */
  /* 其他样式如五角星的形状等 */
}
</style>
