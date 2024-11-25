<template>
    <div class="container">

        <div class="top" v-if="singerDetail">
            <div class="left" style="display: inline-block;">
                <el-image class="i1" fit="contain" :src="HttpManager.attachImageUrl(singerDetail.pic)" />
            </div>

            <div class="right">
                <div class="text">
                    <h1>
                        {{ singerDetail.name }}
                    </h1>
                    <span style=" color: gray;">{{ getBirth(singerDetail.birth)
                    }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span v-if="singerDetail.sex !== 2" style="color: gray;">性别：{{
                        getUserSex(singerDetail.sex) }}</span>&nbsp;&nbsp;
                    <span style="color: gray;">{{ singerDetail.location }}</span><br>
                    <div style=" color: gray;line-height: 20px;">{{ singerDetail.introduction }}</div><br>
                </div>
            </div>

        </div>

        <div class="bottom">
            <song-list :songList="currentSongList"></song-list>
        </div>

    </div>
</template>


<script setup >
import { defineComponent, ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router'
import mixin from "@/mixins/mixin";
import SongList from "@/components/SongList.vue";
import { HttpManager } from "@/api";
import { getBirth } from "@/utils";

const { getUserSex } = mixin();
const route = useRoute();
const singerDetail = ref();
const currentSongList = ref([]);
onMounted(async () => {
    //获取当前歌手
    let result = await HttpManager.getSingerById(route.params.id);
    singerDetail.value = result.data;
    //获取歌手的歌曲
    result = (await HttpManager.getSongOfSingerId(route.params.id));
    currentSongList.value = result.data;
})



</script>


<style lang="scss" scoped>
.container {
    margin-bottom: 150px;
}

.top {
    display: flex;
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
    margin-left: 60px;
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
    width: 180px;
    border-radius: 20px;
    overflow: hidden;
    max-height: 100%;
    margin-top: 5px;
    margin-left: 80px;

}

.i2 {
    width: 20px;
    margin-left: 20px;

}

.bottom {
    background: white;
    padding: 0 50px;
}
</style>
