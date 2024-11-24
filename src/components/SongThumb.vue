<template>
    <div class="card" @click="goAblum(item)">
        <div class="image-item">
            <el-image class="card-img" fit="contain" :src="HttpManager.attachImageUrl(item.pic)" />
            <div class="mask" @click="goAblum(item)"></div>
        </div>
        <div class="image-description">{{ item.name || item.title }}</div>
    </div>
</template>

<script setup>
import { HttpManager } from '@/api';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore();
const router = useRouter();

const props = defineProps({
    item: Object,
    path: String
})
function goAblum(item) {
    store.commit('setSongDetails', item);
    router.push(`/${props.path}/${item.id}`);
}
</script>

<style  scoped>
.image-item .card-img {
    border-radius: 10px;
}

.image-description {
    margin-top: 3px;
    /* 描述与图片的间距 */
}

.card {
    width: 200px;

    .image-item {
        position: relative;
        width: 200px;
        height: 0;
        padding-bottom: 100%;
        overflow: hidden;
        border-radius: 5px;

        .card-img {
            width: 100%;
            transition: all 0.4s ease;
        }
    }

    .card-name {
        overflow: hidden;
        text-overflow: ellipsis;
        /* // display: -webkit-box; */
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin: 0.5rem 0;
    }

    &:hover .card-img {
        transform: scale(1.2);
    }
}

.mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
    /* background-color: rgba(52, 47, 41, 0.4); */
    transition: all 0.3s ease-in-out;
    opacity: 0;

    &:hover {
        opacity: 1;
        cursor: pointer;
    }
}
</style>
