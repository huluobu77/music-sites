<template>
    <div class="container">

        <div class="top" v-if="songDetails">
            <div class="left" style="display: inline-block;">
                <el-image class="i1" fit="contain" :src="HttpManager.attachImageUrl(songDetails.pic)" />
            </div>

            <div class="right">
                <div class="text" v-for="(item, index) in sing" :key="index">
                    <h1>
                        {{ songDetails.title }}
                    </h1>
                    <el-text line-clamp="2" style=" color: gray;line-height: 22px;">{{ songDetails.introduction
                    }}</el-text><br>
                    <!--评分-->
                    <div class="album-score">
                        <div>
                            <h3>歌单评分</h3>
                            <el-rate v-model="nowRank" allow-half disabled></el-rate>
                        </div>
                        <!-- <span>{{ nowRank * 2 }}</span> -->
                        <div>
                            <h3>{{ assistText }} <span v-if="nowScore"> {{ nowScore * 2 }}</span></h3>
                            <el-rate allow-half v-model="nowScore" :disabled="disabledRank" @click="pushValue()"></el-rate>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom">
            <song-list class="album-body" :songList="currentSongList"></song-list>
        </div>

    </div>
</template>


<script setup >
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { HttpManager } from "@/api";
import mixin from "@/mixins/mixin";
import SongList from "@/components/SongList.vue";

const router = useRouter();
const route = useRoute();
const store = useStore();

const { checkStatus } = mixin();
const currentSongList = ref([]); // 存放的音乐
const nowSongListId = ref(""); // 歌单 ID
const nowScore = ref(0);
const nowRank = ref(0);
const disabledRank = ref(false);
const assistText = ref("评价");
// const evaluateList = ref(["很差", "较差", "还行", "推荐", "力推"]);
const songDetails = ref(null); // 单个歌单信息
const nowUserId = computed(() => store.getters.userId);


nowSongListId.value = route.params.id; // 给歌单ID赋值

async function getSongList() {
    const result = await HttpManager.getSongListById(nowSongListId.value);
    console.log(result);
    songDetails.value = result.data;
}

// 收集歌单里面的歌曲
async function getSongId(id) {
    const result = (await HttpManager.getListSongOfSongId(id));
    // 获取歌单里的歌曲信息
    for (const item of result.data) {
        // 获取单里的歌曲
        const resultSong = (await HttpManager.getSongOfId(item.songId));
        currentSongList.value.push(resultSong.data[0]);
    }
}
// 获取评分
async function getRank(id) {
    const result = (await HttpManager.getRankOfSongListId(id));
    nowRank.value = result.data / 2;
}
async function getUserRank(userId, songListId) {
    const result = (await HttpManager.getUserRank(userId, songListId));
    if(!result.data){
        return;
    }
    nowScore.value = result.data / 2;
    disabledRank.value = true;
    assistText.value = "已评价";
}
// 提交评分
async function pushValue() {
    console.log('ee')
    if (disabledRank.value || !checkStatus()) return;

    const songListId = nowSongListId.value;
    var consumerId = nowUserId.value;
    const score = nowScore.value * 2;
    try {
        const result = (await HttpManager.setRank({ songListId, consumerId, score }));
        ElMessage({
            message: result.message,
            type: result.type,
        })

        if (result.success) {
            getRank(nowSongListId.value);
            disabledRank.value = true;
            assistText.value = "已评价";
        }
    } catch (error) {
        console.error(error);
    }
}

getSongList();
getUserRank(nowUserId.value, nowSongListId.value);
getRank(nowSongListId.value); // 获取评分
getSongId(nowSongListId.value); // 获取歌单里面的歌曲ID

console.log(route.params.id)
const goModifyUserPage = () => {
    router.push('/userEdit')
}

const sing = [{
    title: '听完也该释怀了吧',
    introduce: '简介:"那些喜欢到循环播放的歌"'
}]


</script>


<style lang="scss" scoped>
.container {
    margin-bottom: 150px;
}

.top {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    height: 220px;
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
    opacity: 37%;
    box-shadow: 0px 2px 4px rgba(208, 199, 199, 0.25);
    filter: blur(20px);
    z-index: -1;
    /* 将伪元素置于底层，不影响其他内容的交互 */
}


.left {
    width: 20%;

}

.right {
    margin-left: 125px;
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
}

h5 {
    margin-top: 10px;
    color: gray;
    font-weight: 10;
}

.bottom {
    background: white;
    padding: 0 50px;
}

.album-score {
    display: flex;
}
</style>
