<template>
    <div class="music-player">
        <el-slider class="progress-bar" v-model="playTime" :format-tooltip="tooltipFormat" size="small" :max="sliderLength"
            @change="changePlayTime" />
        <div class="horizontal-layout">

            <div class="vertical-layout">
                <img @click="goSongDetail" class="music-disk-picture" src="/src/assets/images/test_pic.png"
                    alt="Music Disk" />
                <div class="text-layout">
                    <p class="text">好运来</p>
                    <p class="text_time">{{ formatTime(playTime) }}/{{ formatTime(sliderLength) }}</p>
                </div>
            </div>

            <div class="controls">
                <el-button link type="primary" size="large" @click="toggleRandomPlay">
                    <img :src="isRandom
                        ? '/src/assets/images/orderplay.png'
                        : '/src/assets/images/randomplay.png'
                        " alt="Play Mode" class="icon" />
                </el-button>
                <el-button link type="primary" size="large">
                    <img src="/src/assets/images/before.png" class="icon" alt="Previous" />
                </el-button>
                <el-button link type="primary" size="large" @click="RandomPlay">
                    <img :src="isplayRandom
                        ? '/src/assets/images/stop.png'
                        : '/src/assets/images/begin.png'
                        " alt="Play Mode" class="icon" />
                </el-button>
                <el-button link type="primary" size="large">
                    <img src="/src/assets/images/after.png" class="icon" alt="Next" />
                </el-button>
                <el-button link type="primary" size="large" @click="toggleVolume">
                    <img src="/src/assets/images/volume.png" alt="Volume" class="icon" />
                </el-button>
            </div>

            <div class="right-layout">
                <el-button link type="primary" size="large" @click="toggleLike">
                    <img :src="isLikeRandom
                        ? '/src/assets/images/Like.png'
                        : '/src/assets/images/redLike.png'
                        " alt="Like" class="icon" />
                </el-button>
                <el-button link type="primary" size="large" @click="toggleSidebar">
                    <img src="/src/assets/images/sidebar.png" alt="Sidebar" class="icon" />
                </el-button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { ElMessage, ElDialog, ElSlider, ElButton } from "element-plus";
import { useRouter } from 'vue-router'
const router = useRouter();
// 播放条
const playTime = ref(0);
const sliderLength = ref(200);
let timer;
const isplayRandom = ref(false);
const tooltipFormat = (value) => `${value}秒`;
const changePlayTime = (value) => {
    ElMessage.info(`当前播放时间: ${value}`);
};

const startTimer = () => {
    timer = setInterval(() => {
        if (playTime.value < sliderLength.value) {
            playTime.value++;
        } else {
            clearInterval(timer);
        }
    }, 1000);
};

const RandomPlay = () => {
    isplayRandom.value = !isplayRandom.value; // 切换播放状态
    if (isplayRandom.value) {
        startTimer(); // 开始计时器
    } else {
        clearInterval(timer); // 停止计时器
    }

};
onMounted(() => {
    playTime.value = 0; // 初始化播放时间
});

onBeforeUnmount(() => clearInterval(timer));



const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const isRandom = ref(false);
const isLikeRandom = ref(true);
const toggleRandomPlay = () => (isRandom.value = !isRandom.value);
const toggleLike = () => (isLikeRandom.value = !isLikeRandom.value);

// 音量调节

const toggleVolume = () => {
    ElMessage({
        message: '音量调节功能暂未实现',
        type: 'info',
    });
};
const goSongDetail = () => {
    router.push('/detail')
}
</script>

<style scoped>
.music-player {
    width: auto;
    height: 117px;
    margin: 15px;
}

.horizontal-layout {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    /* 均匀分布 */
}

.vertical-layout {
    display: flex;
    flex-grow: 1;
    /* 允许它在空间中扩展 */
    margin-left: 10px;
    justify-content: flex-start;
    /* 左对齐 */
}

.controls {
    display: flex;
    justify-content: center;
    /* 居中对齐 */
    align-items: center;
    gap: 20px;
    /* 控制按钮之间的间距 */
    flex-grow: 1;
    /* 允许它在空间中扩展 */
}

.right-layout {
    display: flex;
    justify-content: flex-end;
    /* 右对齐 */
    flex-grow: 1;
    /* 允许它在空间中扩展 */
    gap: 20px;
    /* 控制按钮之间的间距 */
    margin-right: 30px;
}


.music-disk-picture {
    width: 79px;
    height: 79px;
    margin: 5px;
    border-radius: 10%;
    overflow: hidden;
}

.text-layout {
    padding: 10px;
}

.text_time {
    margin-top: 10px;
}

.icon {
    width: 24px;
    /* 调整图标宽度 */
    height: 24px;
    /* 调整图标高度 */
}
</style>
