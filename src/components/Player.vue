<template>
    <div class="music-player">
        <el-slider class="progress-bar" v-model="nowTime" @change="changeTime" size="small" />
        <div class="horizontal-layout">

            <div class="vertical-layout">
                <img @click="goPlayerPage" class="music-disk-picture" :src="attachImageUrl(this.songPic)"
                    alt="Music Disk" />
                <div class="text-layout">
                    <p class="text">{{ this.songTitle }} - {{ this.singerName }}</p>
                    <p class="text_time">{{ startTime }}/{{ endTime }}</p>
                </div>
            </div>

            <div class="controls">
                <!-- 改变播放方式 -->
                <!-- <el-button link type="primary" size="large" @click="changePlayState">
                    <img :src="isRandom
                        ? '/src/assets/images/orderplay.png'
                        : '/src/assets/images/randomplay.png'
                        " alt="Play Mode" class="icon" />
                </el-button> -->
                <!-- 上一首 -->
                <el-button link type="primary" size="large" @click="prev">
                    <img src="/src/assets/images/before.png" class="icon" alt="Previous" />
                </el-button>
                <!-- 播放 -->
                <el-button link type="primary" size="large" @click="togglePlay">
                    <img :src="isPlay
                        ? '/src/assets/images/stop.png'
                        : '/src/assets/images/begin.png'
                        " alt="Play Mode" class="icon" />
                </el-button>
                <!-- 下一首 -->
                <el-button link type="primary" size="large" @click="next">
                    <img src="/src/assets/images/after.png" class="icon" alt="Next" />
                </el-button>
                <!--音量-->
                <el-dropdown class="yin-play-show" trigger="click">
                    <yin-icon v-if="volume !== 0" :icon="iconList.YINLIANG"></yin-icon>
                    <yin-icon v-else :icon="iconList.JINGYIN"></yin-icon>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-slider class="yin-slider" style="height: 150px; margin: 10px 0" v-model="volume"
                                :vertical="true"></el-slider>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>

            <div class="right-layout">
                <el-button link type="primary" size="large" @click="changeCollection">
                    <img :src="isCollection
                        ? '/src/assets/images/redLike.png'
                        : '/src/assets/images/Like.png'
                        " alt="Like" class="icon" />
                </el-button>
                <el-button link type="primary" size="large" @click="changeAside">
                    <img src="/src/assets/images/sidebar.png" alt="Sidebar" class="icon" />
                </el-button>
            </div>

        </div>
    </div>
</template>
<script>
import { computed, defineComponent, getCurrentInstance, onMounted, ref, watch } from "vue";
import { mapGetters, useStore } from "vuex";
import { useRouter } from 'vue-router'
import mixin from "@/mixins/mixin";
// import YinIcon from "@/components/YinIcon.vue";
import { HttpManager } from "@/api";
import { formatSeconds } from "@/utils";
import { Icon } from "@/enums/icon";

export default defineComponent({
    components: {
        // YinIcon,
    },
    setup() {
        const { proxy } = getCurrentInstance();
        const store = useStore();
        const router = useRouter();
        const { routerManager, playMusic, checkStatus, downloadMusic } = mixin();

        const isCollection = ref(false); // 是否收藏

        const userIdVO = computed(() => store.getters.userId);
        const songIdVO = computed(() => store.getters.songId);
        const token = computed(() => store.getters.token);

        watch(songIdVO, () => {
            initCollection();
        });
        watch(token, (value) => {
            if (!value) isCollection.value = false;
        });

        async function initCollection() {
            if (!checkStatus(false)) return;

            const userId = userIdVO.value;
            const type = '0';
            const songId = songIdVO.value;
            isCollection.value = ((await HttpManager.isCollection({ userId, type, songId }))).data;
        }

        async function changeCollection() {
            if (!checkStatus()) return;

            const userId = userIdVO.value;
            const type = '0'; //这里要看看 不能直接写死
            const songId = songIdVO.value;

            const result = isCollection.value
                ? ((await HttpManager.deleteCollection(userIdVO.value, songIdVO.value)))
                : ((await HttpManager.setCollection({ userId, type, songId })));
            ElMessage({
                message: result.message,
                type: result.type,
            })

            if (result.data == true || result.data == false) isCollection.value = result.data;
        }

        onMounted(() => {
            if (songIdVO.value) initCollection();
        });

        return {
            isCollection,
            playMusic,
            routerManager,
            checkStatus,
            attachImageUrl: HttpManager.attachImageUrl,
            changeCollection,
            downloadMusic
        };
    },
    data() {
        return {
            startTime: "00:00",
            endTime: "00:00",
            nowTime: 0, // 进度条的位置
            toggle: true,
            volume: 50,
            playState: Icon.XUNHUAN,
            playStateList: [Icon.XUNHUAN, Icon.LUANXU],
            playStateIndex: 0,
            iconList: {
                download: Icon.XIAZAI,
                ZHEDIE: Icon.ZHEDIE,
                SHANGYISHOU: Icon.SHANGYISHOU,
                XIAYISHOU: Icon.XIAYISHOU,
                YINLIANG: Icon.YINLIANG1,
                JINGYIN: Icon.JINGYIN,
                LIEBIAO: Icon.LIEBIAO,
                dislike: Icon.Dislike,
                like: Icon.Like,
            },
        };
    },
    computed: {
        ...mapGetters([
            "userId",
            "isPlay", // 播放状态
            "playBtnIcon", // 播放状态的图标
            "songId", // 音乐id
            "songUrl", // 音乐地址
            "songTitle", // 歌名
            "singerName", // 歌手名
            "songPic", // 歌曲图片
            "curTime", // 当前音乐的播放位置
            "duration", // 音乐时长
            "currentPlayList",
            "currentPlayIndex", // 当前歌曲在歌曲列表的位置
            "showAside", // 是否显示侧边栏
            "autoNext", // 用于触发自动播放下一首
        ]),
    },
    watch: {
        // 切换播放状态的图标
        isPlay(value) {
            this.$store.commit("setPlayBtnIcon", value ? Icon.ZANTING : Icon.BOFANG);
        },
        volume() {
            this.$store.commit("setVolume", this.volume / 100);
        },
        // 播放时间的开始和结束
        curTime() {
            this.startTime = formatSeconds(this.curTime);
            this.endTime = formatSeconds(this.duration);
            // 移动进度条
            this.nowTime = (this.curTime / this.duration) * 100;
        },
        // 自动播放下一首
        autoNext() {
            this.next();
        },
    },
    methods: {
        changeAside() {
            this.$store.commit("setShowAside", !this.showAside);
        },
        // 控制音乐播放 / 暂停
        togglePlay() {
            this.$store.commit("setIsPlay", this.isPlay ? false : true);
        },
        changeTime() {
            this.$store.commit("setChangeTime", this.duration * (this.nowTime * 0.01));
        },
        changePlayState() {
            this.playStateIndex = this.playStateIndex >= this.playStateList.length - 1 ? 0 : ++this.playStateIndex;
            this.playState = this.playStateList[this.playStateIndex];
        },
        // 上一首
        prev() {
            if (this.playState === Icon.LUANXU) {
                let playIndex = Math.floor(Math.random() * this.currentPlayList.length);
                playIndex = playIndex === this.currentPlayIndex ? playIndex + 1 : playIndex;
                this.$store.commit("setCurrentPlayIndex", playIndex);
                this.toPlay(this.currentPlayList[playIndex].url);
            } else if (this.currentPlayIndex !== -1 && this.currentPlayList.length > 1) {
                if (this.currentPlayIndex > 0) {
                    this.$store.commit("setCurrentPlayIndex", this.currentPlayIndex - 1);
                    this.toPlay(this.currentPlayList[this.currentPlayIndex].url);
                } else {
                    this.$store.commit("setCurrentPlayIndex", this.currentPlayList.length - 1);
                    this.toPlay(this.currentPlayList[this.currentPlayIndex].url);
                }
            }
        },
        // 下一首
        next() {
            if (this.playState === Icon.LUANXU) {
                let playIndex = Math.floor(Math.random() * this.currentPlayList.length);
                playIndex = playIndex === this.currentPlayIndex ? playIndex + 1 : playIndex;
                this.$store.commit("setCurrentPlayIndex", playIndex);
                this.toPlay(this.currentPlayList[playIndex].url);
            } else if (this.currentPlayIndex !== -1 && this.currentPlayList.length > 1) {
                if (this.currentPlayIndex < this.currentPlayList.length - 1) {
                    this.$store.commit("setCurrentPlayIndex", this.currentPlayIndex + 1);
                    this.toPlay(this.currentPlayList[this.currentPlayIndex].url);
                } else {
                    this.$store.commit("setCurrentPlayIndex", 0);
                    this.toPlay(this.currentPlayList[0].url);
                }
            }
        },
        // 选中播放
        toPlay(url) {
            if (url && url !== this.songUrl) {
                const song = this.currentPlayList[this.currentPlayIndex];
                this.playMusic({
                    id: song.id,
                    url,
                    pic: song.pic,
                    index: this.currentPlayIndex,
                    name: song.name,
                    lyric: song.lyric,
                    currentSongList: this.currentPlayList,
                });
            }
        },
        goPlayerPage() {
            this.$router.push(`/lyric/${this.songId}`)
        },
    },
});
</script>

<style scoped>
.music-player {

    background: white;
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
    margin-top: auto;
    width: 100%;
    height: 117px;
    /* margin: 15px; */
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
