<template>
  <div class="container">

    <div class="top">
      <div class="left" style="display: inline-block;">
        <img width="200" plain @click="dialogTableVisible = true" class="i1" :src="HttpManager.attachImageUrl(userPic)">
      </div>

      <div class="right">
        <div class="text">
          <h1>{{ personalInfo.username }} <img @click="goModifyUserPage" class="i2"
              src="https://img.js.design/assets/img/66eecae23280c0d64a960e29.png#6352e5eb18ef0d17965ea85f8a39998f">
          </h1>
          <br>
          <h5>地区：{{ personalInfo.location }}</h5>
        </div>
      </div>

    </div>

    <div class="personal-body">
      <song-list :songList="collectSongList" :show="true" @changeData="changeData"></song-list>
    </div>
    <el-dialog v-model="dialogTableVisible" title="修改头像">
      <upload></upload>
    </el-dialog>

  </div>
</template>


<script setup>

import { ElUpload, ElMessageBox, ElMessage } from 'element-plus';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref, reactive, nextTick, computed, watch } from 'vue';
import SongList from "@/components/SongList.vue";
import Upload from "@/views/setting/Upload.vue";
import mixin from "@/mixins/mixin";
import { HttpManager } from "@/api";

const router = useRouter();
const store = useStore();
const goModifyUserPage = () => {
  router.push('/userEdit')
}

const dialogTableVisible = ref(false);
const collectSongList = ref([]); // 收藏的歌曲
const personalInfo = reactive({
  username: "",
  userSex: "",
  birth: "",
  location: "",
  introduction: "",
});
const userId = computed(() => store.getters.userId);
const userPic = computed(() => store.getters.userPic);
watch(userPic, () => {
  dialogTableVisible.value = false;
});

function goPage() {
  routerManager(RouterName.Setting, { path: RouterName.Setting });
}
async function getUserInfo(id) {
  const result = (await HttpManager.getUserOfId(id));
  personalInfo.username = result.data[0].username;
  personalInfo.userSex = result.data[0].sex;
  personalInfo.birth = result.data[0].birth;
  personalInfo.introduction = result.data[0].introduction;
  personalInfo.location = result.data[0].location;
}
// 获取收藏的歌曲
async function getCollection(userId) {
  collectSongList.value = []
  const result = (await HttpManager.getCollectionOfUser(userId));
  const collectIDList = result.data || []; // 存放收藏的歌曲ID
  // 通过歌曲ID获取歌曲信息
  for (const item of collectIDList) {
    if (!item.songId) {
      console.error(`歌曲${item}异常`);
      continue;
    }

    const result = (await HttpManager.getSongOfId(item.songId));
    collectSongList.value.push(result.data[0]);
  }
}

function changeData() {
  getCollection(userId.value);
}

nextTick(() => {
  getUserInfo(userId.value);
  getCollection(userId.value);
});

// 上传成功的回调函数
const handleUploadSuccess = (response, file, fileList) => {
  ElMessage.success('头像上传成功');
  // updateAvatar(response.url); 
};

// 上传失败的回调函数
const handleUploadError = (error, file, fileList) => {
  ElMessage.error('头像上传失败，请稍后重试');
};

// 上传前的钩子函数
const beforeUploadFile = (file) => {
  const fileSize = file.size / 1024 / 1024;
  const fileExtension = file.name.split('.').pop().toLowerCase();
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

  if (fileSize > 10) {
    ElMessage.error('文件大小超过10M，请选择较小的文件');
    return false;
  }

  if (!allowedExtensions.includes(fileExtension)) {
    ElMessage.error('不支持的文件格式，请选择jpg、jpeg、png或gif文件');
    return false;
  }

  return true;
};





</script>


<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

.top {
  margin-top: 40px;
  height: 200px;
  max-height: 100%;
  position: relative;
  margin-right: 50px;
}


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
}

.text {
  margin-top: 55px;
  display: inline-block;
  margin-left: 50px;
}

.i1 {
  height: 200px;
  border: 1px solid white;
  border-radius: 100%;
  overflow: hidden;
  max-height: 100%;
  margin-left: 80px;

}

.i2 {
  width: 20px;
  margin-left: 20px;

}

h1 {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

h4 {
  position: absolute;
  /* 将标题设置为绝对定位 */
  top: 20px;
  /* 距离顶部为0 */
  left: 50px;
  /* 距离左侧为0 */
  font-weight: 545;
}

h5 {
  margin-top: 10px;
  color: gray;
  font-weight: 10;
}

.bottom {
  position: relative;
  height: 200px;
}

.el-table {
  padding-top: 50px;
  background: none;
  padding-left: 30px;
  padding-right: 30px;
}

.el-upload__text {
  margin-bottom: 5px;
  border: 2px dashed #ccc;
  /* 添加2像素宽的灰色虚线边框 */
  padding: 10px;
  /* 添加内边距，使内容与边框有一定距离 */
  border-radius: 5px;
  /* 添加边框圆角，使边框看起来更美观 */
}
</style>
