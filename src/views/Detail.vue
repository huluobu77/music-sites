<template>
  <div class="horizontal-layout">
    <div class="box">
      <div class="left">
        <img src="/src/assets/images/test_pic.png" class="img" />
        <div class="text-container">
          <p style="font-family: serif; font-weight: bold;">歌手：周玲</p>
          <p style="font-family: serif; margin-top: 10px; font-weight: bold;">歌曲：好运来</p>
        </div>
      </div>
      <div class="right">
        <div class="sing">
          <img src="/src/assets/images/test_pic.png" class="blurred-image" />
          <div class="scroll-container">
          <div class="aaa">
         
            <div class="lyrics">
              <h2>My Heart Will Go On</h2>
              <p>Anything girl whatever the mood we're in<br>
                无论你心情怎样<br>
                All I know is (ooh ooh ooh)<br>
                我只知道<br>
                Getting lost late at night under stars<br>
                我们曾迷失在漫天繁星下<br>
                Finding love standing right where we are your lips<br></p>
              <p>这是第二句歌词。</p>
              <p>这是第三句歌词。</p>
              <p>这是第四句歌词。</p>
              <p>这是第四句歌词。</p>
              <p>这是第四句歌词。</p>
              <p>这是第四句歌词。</p>
              <p>这是第四句歌词。</p>

              <p>这是第五句歌词。</p>
              <p>...</p>
              <p>（更多歌词内容）</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 评论 -->
    <div class="comment">
      <div class="text">
        <h3>评论</h3>
        <p>共一条评论</p>
      </div>
      <div class="comment-input">
        <input class="input" />
        <el-button type="primary" @click="submit" class="submit">发布</el-button>
      </div>
      <div class="comment_item">
        <img src="/src/assets/images/test_pic.png" class="music-disk-picture" />
        <div class="comment_item_text">
          <p style="font-size: 16px; color: gray;font-family: serif;">tina</p>
          <p style="font-size: 16px; color: gray;font-family: serif;">2024-11-3 15:25</p>
          <p style="font-size: 24px; font-weight: bold;font-family: serif;">haoyunlai</p>
        </div>
        <div class="comment_item_right">
          <el-button link type="primary" size="large" @click="incrementCount">
            <img src="/src/assets/images/点赞.png" alt="Sidebar" class="icon" />
          </el-button>
          <p>{{ count }}</p>
          <el-button link type="primary" size="large" @click="deleteCount">
            <img src="/src/assets/images/删除.png" alt="Sidebar" class="icon" />
          </el-button>
        </div>
      </div>
      <hr style="height: 0.1px; background-color: rgb(214, 211, 211);margin-top: 10px;" />

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
const count = ref(1); // 初始化计数

const incrementCount = () => {
  count.value += 1; // 每次点击加1
};
const deleteCount = () => {
  ElMessage.success(`删除成功！`);
}
</script>

<style scoped>
.comment_item_right {
  display: flex;
  justify-content: flex-end;
  /* 右对齐 */
  flex-grow: 1;
  /* 允许它在空间中扩展 */
  gap: 20px;
  /* 控制按钮之间的间距 */
  margin-right: 15px;
  align-items: center;
  /* 垂直居中对齐 */
}

.comment_item_text {
  margin-left: 15px;
}

.music-disk-picture {
  width: 70px;
  height: 70px;
  margin: 5px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 0;
  /* 位于底层 */
}

.submit {
  width: 75px;
  /* 调整为适合的大小 */
  height: 40px;
  background: rgb(22, 118, 235);
  color: white;
  /* 设置文字颜色 */
  border: none;
  /* 去掉默认边框 */
  border-radius: 4px;
  /* 圆角 */
  display: flex;
  /* 使用Flexbox */
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  font-size: 16px;
  /* 字体大小 */
  cursor: pointer;
  /* 鼠标样式 */
}

.input {
  width: 100%;
  /* 宽度设置为100% */
  max-width: 1257px;
  /* 最大宽度设置为600px */
  height: 30px;
  /* 调整高度 */
  font-size: 16px;
  /* 调整字体大小 */
  padding: 10px;
  /* 添加内边距 */
  border: 1px solid #ccc;
  /* 边框样式 */
  border-radius: 4px;
  /* 圆角 */
  margin-right: 30px;
}

.box {
  width: 100%;
  display: flex;
  margin-left: 20px;
}

.icon {
  width: 24px;
  /* 调整图标宽度 */
  height: 24px;
  /* 调整图标高度 */
}

.text {
  display: flex;
  align-items: center;
  /* 垂直居中 */
}

.text h3 {
  font-size: 36px;
  /* 标题字体大小 */
  color: #333;
  /* 标题颜色 */
  margin: 0;
  /* 去除默认的外边距 */
}

.text p {
  font-size: 18px;
  /* 段落字体大小 */
  color: #666;
  /* 段落颜色 */
  margin-left: 20px;
  /* 设置左间距 */
}

.comment {
  margin-top: 10px;
  /* 顶部间距 */
  margin-left: 50px;
  padding: 10px;
}

.horizontal-layout {
  width: 100%;
  margin: 0 auto;
  /* 居中对齐 */
}

.left {
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 600px;
  align-items: center;
  /* 水平居中对齐 */
  justify-content: center;
  /* 垂直居中对齐 */
}


.img {
  width: 280px;
  /* 调整为适合的大小 */
  height: 280px;
  margin: 20px;
  border-radius: 50%;
  /* 圆形 */
}

.text-container {
  text-align: center;
}

p {
  font-size: 20px;
  /* 设置字体大小为 24 像素 */
}


.right {
  display: flex;
  width: 65%;
  position: relative;
  align-items: center;
  margin-right: 20px;
  height: 600px;

}

.sing {
  width: 100%;
  margin: 20px;
  align-items: center;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  /* 更强的白色背景 */
  z-index: 1;
  /* 确保在中间层 */
  position: relative;
  /* 确保内容处于最上层 */
  height: 580px;
}

.blurred-image {
  position: absolute;
  /* 绝对定位以覆盖整个容器 */
  top: 20px;
  /* 距离上边20px */
  right: 20px;
  /* 距离右边20px */
  width: calc(100% - 30px);
  /* 宽度为100%减去左右边距 */
  height: calc(100% - 30px);
  /* 高度为100%减去上下边距 */
  object-fit: cover;
  /* 保持图像比例并填充 */
  filter: blur(20px);
  /* 只在图片上应用模糊效果 */
  opacity: 0.2;
  z-index: 0;
  /* 确保图片在最底层 */
}


.scroll-container {
  padding: 20px;
  text-align: center;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  z-index: 2;
  overflow-y: auto;
  /* 改为垂直滚动 */
  height: 696px;
  /* 确保容器有固定高度 */
  max-width: 100%;
  /* 确保宽度不会超出 */
  position: relative;
  /* 确保文字内容不会被遮挡 */
  height: 580px;

}

.aaa{
  display: flex;            /* 使用 flexbox 布局 */
  justify-content: center;  /* 居中 .lyrics 容器 */
  align-items: flex-start;  /* 顶部对齐 */
  width: 100%;              /* 容器占满宽度 */
  padding: 20px;            /* 可根据需要设置一些内边距 */
  box-sizing: border-box;   /* 确保内边距不会影响布局 */
}

.lyrics {
  display: flex;
  flex-direction: column;
  /* 垂直排列 */
  font-family: serif;
  font-size: 24px;
  line-height: 2.5;
  /* 设置行高 */
  color: #444;
  /* 字体颜色 */
  max-height: 100%;
  /* 设置最大高度 */
  overflow-y: auto;
  /* 内容溢出时启用垂直滚动条 */
  padding: 10px;
  text-align: left;
}

.lyrics p {
  margin: 10px 0;
  /* 段落上下间距 */
  color: black;
  font-family: serif;
  font-size: 18px;

}

.comment-input {
  display: flex;
  margin-top: 40px;
  align-items: center;
  /* 垂直居中 */
}

.comment_item {
  margin-top: 30px;
  display: flex;
  align-items: center;
  /* 垂直居中 */
  background-color: rgba(255, 255, 255, 0.2);
  /* 白色透明背景 */
  z-index: 1;
  /* 位于中间 */
}
</style>
