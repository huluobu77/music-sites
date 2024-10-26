<template>
    <div class="container">

        <div class="top">
            <div class="left" style="display: inline-block;">
              <img plain @click="open" class="i1" src="https://img.js.design/assets/img/66ee87c44f6056eb85aefe68.jpg#56526c5627f4fe7218ac4ef5d58b0364">
            </div>
            
            <div class="right">
              <div class="text">
                <h1>My Heart Will Go On <img class="i2" src="https://img.js.design/assets/img/66eecae23280c0d64a960e29.png#6352e5eb18ef0d17965ea85f8a39998f"> </h1>
                <br>
                <h5>地区：湖南</h5>
              </div>
            </div>

        </div>  


        <div class="upload" v-show="isVisible">
        <p class="title">修改头像</p>
        <hr/>
        <div class="section">
            <el-upload :show-file-list="false" 
            >
            <div>
                将文件拖到此处或点击上传
            </div>
            </el-upload>
        </div>
    ···</div>


        <div class="bottom">
            <h4>收藏歌曲</h4>

            <el-table :data="tableData">
              
              <el-table-column prop="number" label="#" width="80" />
              <el-table-column prop="song" label="歌曲" width="300" />
              <el-table-column prop="singer" label="歌手" width="300" />
              <el-table-column prop="album" label="专辑" width="300" />
              <el-table-column prop="time" label="时长"/>
            </el-table>       

        </div>

    </div>


</template>


<script setup>

import { ElMessage, ElMessageBox } from 'element-plus'
import { h } from 'vue';


//更新用户头像
// const updateAvatar=async()=>{
//     const result = await userAvatarService(imgUrl.value)
//     const message = result.message
//     if (result.code == 0) {
//         ElMessage.success(message ? message : '上传成功!')
//         userInfoStore.userInfo.userPic=imgUrl.value
//     } else {
//         ElMessage.error(message ? message : '上传失败,请稍后重试!')
//     }
// }




// el-table的定义数据
const tableData = [
  {
    number:'01',
    song: '爱的回归线',
    singer: '单依纯',
    album:'巨好听的歌《第五期》',
    time:'3:42',
  },
]



const open = () => {


  
  ElMessageBox.alert('修改头像',{
    callback: (action) => {
      // 使用action作为字符串类型进行处理
      if (action === 'confirm') {
        ElMessage({
          type: 'info',
          message: '用户点击'
        });
        // 处理其它情况
      } else if (action === 'cancel') {
        ElMessage({
          type: 'info',
          message: '用户取消'
        });
      }
    }
  });
};



</script>


<style lang="scss" scoped>

*{
  padding: 0px;
  margin: 0px;
}

.top{
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
  left: 0;
  right: 0;
  bottom: 0;
  background: url(https://img.js.design/assets/img/66ee87c44f6056eb85aefe68.jpg#56526c5627f4fe7218ac4ef5d58b0364);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  filter: blur(20px);
  z-index: -1; /* 将伪元素置于底层，不影响其他内容的交互 */
}

.left{
  float: left;
  width: 20%;
  
}

.right{
  float: right;
  width: 80%;
}

.text{
  margin-top: 55px;
  display: inline-block;
  margin-left: 50px;
}

.i1{
    height: 200px;
    border: 1px solid white;
    border-radius: 100%;
    overflow: hidden;
    max-height: 100%;
    margin-left: 80px;
    
}

.i2{
   width: 20px;
   margin-left: 20px;

}

h1{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

h4 {
  position: absolute; /* 将标题设置为绝对定位 */
  top: 20px; /* 距离顶部为0 */
  left: 50px; /* 距离左侧为0 */
  // font-weight: 545;
}

h5{
  margin-top: 10px;
  color: gray;
  font-weight: 10;
}

.bottom{
  position: relative;
  height: 200px;
}

.el-table {
  padding-top: 50px;
  background: none;
  padding-left: 30px;
  padding-right: 30px;
}



</style>
