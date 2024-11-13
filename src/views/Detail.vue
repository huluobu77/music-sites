<template>
    <div class="horizontal-layout">
        <div class="box">
            <div class="left">
                <img src="/src/assets/images/test_pic.png" />
                <div class="text-container">
                    <p class="singer">歌手：周玲</p>
                    <p class="song">歌曲：好运来</p>
                </div>
            </div>
            <div class="right">
                <div class="sing">
                    <img src="/src/assets/images/test_pic.png" class="blurred-image" />
                    <div class="scroll-container">
                        <el-scrollbar height="696px">
                            <div class="lyrics">
                                <h2>好运来</h2>
                                <p>这是第一句歌词。</p>
                                <p>这是第二句歌词。</p>
                                <p>这是第三句歌词。</p>
                                <p>这是第四句歌词。</p>
                                <p>这是第五句歌词。</p>
                                <p>...</p>
                                <p>（更多歌词内容）</p>
                            </div>
                        </el-scrollbar>
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
                <img src="./assets/img/tianzhidao/logo.png" class="music-disk-picture" />
                <div class="comment_item_text">
                    <p style="font-size: 16px; color: gray">tina</p>
                    <p style="font-size: 16px; color: gray">2024-11-3 15:25</p>
                    <p style="font-size: 24px; font-weight: bold">haoyunlai</p>
                </div>
                <div class="comment_item_right">
                    <el-button link type="primary" size="large" @click="incrementCount">
                        <img src="/src/assets/images/sidebar.png" alt="Sidebar" class="icon" />
                    </el-button>
                    <p>{{ count }}</p>
                    <el-button link type="primary" size="large" @click="incrementCount">
                        <img src="/src/assets/images/sidebar.png" alt="Sidebar" class="icon" />
                    </el-button>
                </div>
            </div>
            <hr style="height: 0.1px; background-color: rgb(214, 211, 211)" />

        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import { ElScrollbar, ElInput } from "element-plus";
const count = ref(1); // 初始化计数

const incrementCount = () => {
    count.value += 1; // 每次点击加1
};
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
    margin-right: 30px;
    align-items: center;
    /* 垂直居中对齐 */
}

.comment_item_text {
    margin-left: 15px;
}

.music-disk-picture {
    width: 79px;
    height: 79px;
    margin: 5px;
    border-radius: 50%;
    overflow: hidden;
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
    height: 80px;
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
    padding: 20px;
    /* 内边距 */
    border-radius: 8px;
    /* 圆角 */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    /* 阴影效果 */
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
    margin-top: 20px;
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
}

img {
    width: 200px;
    /* 调整为适合的大小 */
    height: 200px;
    margin: 20px;
    border-radius: 50%;
}

.text-container {
    text-align: center;
}

p {
    margin: 20px;
    font-weight: bold;
    font-size: 20px;
    /* 设置字体大小为 24 像素 */
}


.right {
    display: flex;
    width: 65%;
    position: relative;
    align-items: center;
    height: 600px;
}

.sing {
    width: 100%;
    height: 600px;
    overflow: hidden;
    align-items: center;
    border-radius: 8px;
    /* 圆角 */
}

.blurred-image {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
    filter: blur(5px);
    object-fit: cover;
    filter: blur(80px);
    /* 设置模糊效果 */
    z-index: 1;
    /* 设置z-index以在底层 */
}

.scroll-container {
    background: rgba(255, 255, 255, 0.8);
    /* 更明亮的背景 */

    padding: 20px;
    text-align: center;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
}

.lyrics {
    display: flex;
    flex-direction: column;
    /* 垂直排列 */

    font-size: 20px;
    /* 设置字体大小 */
    line-height: 1.5;
    /* 设置行高 */
    color: #444;
    /* 字体颜色 */
}

.lyrics p {
    margin: 10px 0;
    /* 段落上下间距 */
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
}</style>
  