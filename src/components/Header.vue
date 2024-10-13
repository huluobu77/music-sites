<template>
    <el-container>
        <el-header class="navbar">
            <div class="logo">
                <img src="/src/images/icon.png" alt="畅听" />
                <span class="logo-text">畅听</span>
            </div>
            <div class="nav-links">
                <RouterLink to="/" class="nav-item">首页</RouterLink>
                <RouterLink to="/sings" class="nav-item">歌手</RouterLink>
                <RouterLink to="/songlist" class="nav-item">歌单</RouterLink>
            </div>
            <div class="search">
                <el-input class="custom-input" placeholder="搜索歌曲歌手" :suffix-icon="Search" v-model="input"/>
            </div>
        </el-header>
        <el-main>
            <!-- 主内容区 -->
        </el-main>
    </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { ElInput,ElHeader,ElMain,ElContainer } from 'element-plus' // 导入必要的组件
const input = ref('')
</script>

<style scoped>
.navbar {
    display: flex;
    /* 使用 Flexbox 布局 */
    justify-content: space-between;
    /* 内容两端对齐 */
    align-items: center;
    /* 垂直居中对齐 */
    padding: 10px 20px;
    /* 内边距 */
    background-color: #f8f9fa;
    /* 背景颜色 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* 盒子阴影 */
}
.search {
    justify-content: right; 

}
.custom-input .el-input__inner {
    background-color: #aa0d0d !important; /* 添加 !important 以提高优先级 */
    color: #000000; /* 输入文本颜色 */
}
.logo {
    display: flex;
    /* 使用 Flexbox 布局 */
    align-items: center;
    /* 垂直居中对齐 */
    margin-left: 10px;
    /* 左边距 */
}

.logo img {
    height: 40px;
    /* 设置图片高度 */
    margin-right: 10px;
    /* 图片与文字之间的间距 */
}

.logo-text {
    font-size: 18px;
    /* 字体大小 */
}

.nav-links {
    display: flex;
    /* 使用 Flexbox 布局 */
    margin-left: 50px;
    flex-grow: 1;
    /* 使导航链接区域占据剩余空间 */
}

.nav-item {
    margin: 0 20px;
    /* 每个菜单项之间的间距 */
    font-size: 16px;
    /* 增大字体大小 */
    color: black;
    /* 字体颜色设为黑色 */
    text-decoration: none;
    /* 去掉下划线 */
}

.nav-item:hover {
    text-decoration: underline;
    /* 可选：悬停时添加下划线 */
}
.search {
    margin-left: auto; /* 自动左边距，将搜索框推到右侧 */
    display: flex;
    align-items: center; /* 垂直居中 */
    width: 300px; 
    
}

.el-input {
    min-width: 200px; /* 设置最小宽度以确保输入框足够大 */
}
</style>
