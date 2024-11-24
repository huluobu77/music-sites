<template>
    <el-container>
        <el-header class="navbar">
            <div class="logo">
                <img src="../assets/images/icon.png" alt="畅听" />
                <span class="logo-text">畅听</span>
            </div>
            <div class="nav-links">
                <RouterLink to="/" class="nav-item">首页</RouterLink>
                <RouterLink to="/songList" class="nav-item">歌单</RouterLink>
                <RouterLink to="/singers" class="nav-item">歌手</RouterLink>

            </div>
            <div class="search">
                <el-input class="custom-input" placeholder="搜索歌曲歌手" :suffix-icon="Search" v-model="keywords"
                    @keyup.enter="goSearch()" />
            </div>
            <div class="rihgt-btn" v-if="!token">
                <div @click="router.push('/login')"><el-icon>
                        <User />
                    </el-icon>登录</div>
                <div @click="router.push('/register')"><el-icon>
                        <Right />
                    </el-icon>注册</div>
            </div>
            <el-dropdown class="user-wrap" v-if="token" trigger="click">
                <el-image class="user" fit="contain" :src="HttpManager.attachImageUrl(userPic)" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="(item, index) in menuList" :key="index"
                            @click.stop="goMenuList(item.path)">{{ item.name }}</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-header>
    </el-container>
</template>

<script setup>
import { ref, reactive, computed, } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { User, Right } from '@element-plus/icons-vue'
import { Search } from '@element-plus/icons-vue'
import avatarSrc from '@/assets/images/用户.png';
import { ElMessage } from 'element-plus'
import { HttpManager } from "@/api";

const store = useStore();
const router = useRouter();
// 引入图片资源


const keywords = ref('')
const userPic = computed(() => store.getters.userPic);
const token = computed(() => store.getters.token);

const onClickUserAvatar = () => {
    router.push('/userIndex');
}

const menuList = ref([
    {
        name: '个人主页',
        path: '/userIndex'
    },
    {
        name: '设置',
        path: '/userEdit'
    },
    {
        name: '退出',
        path: '/logout'
    },
])

function goSearch() {
    if (keywords.value !== "") {
        store.commit('setSearchWord', keywords.value);
        router.push(`/search?keywords=${keywords.value}`)
    } else {
        ElMessage.error('搜索内容不能为空');
    }
}

function goMenuList(path) {
    if (path == '/logout') {
        store.commit("setToken", false);
        router.push('/')
    } else {
        router.push(path)
    }
}
</script>

<style scoped>
.block {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    /* 使块居中 */
    margin-left: 10px;
}

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
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    /* 盒子阴影 */
}

.search {
    justify-content: right;
}

.custom-input .el-input__inner {
    background-color: #aa0d0d !important;
    /* 添加 !important 以提高优先级 */
    color: #000000;
    /* 输入文本颜色 */
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
    margin-left: auto;
    /* 自动左边距，将搜索框推到右侧 */
    display: flex;
    align-items: center;
    /* 垂直居中 */
    width: 300px;

}

.el-input {
    min-width: 200px;
    /* 设置最小宽度以确保输入框足够大 */
}

.rihgt-btn {
    display: flex;
}

.rihgt-btn div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 86px;
    height: 38px;
    font-size: 14px;
    text-align: center;

    &:hover {
        cursor: pointer;
    }

    &:nth-child(1) {
        color: var(--main-bg-darkColor);

        .el-icon {
            width: 18px;
            height: 18px;
            background-color: rgb(191, 204, 210);
            color: #ffffff;
            border-radius: 50%;
            margin-right: 10px;
        }



    }

    &:nth-child(2) {
        .el-icon {
            width: 18px;
            height: 18px;
            background-color: #ffffff;
            color: #000000;
            border-radius: 50%;
            margin-right: 10px;
        }

        background-color: #000000;
        color: white;
    }
}

.user-wrap {
    position: relative;
    display: flex;
    align-items: center;

    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 10px;
        /* margin-right: ; */
        cursor: pointer;
    }
}
</style>
