<template>
    <div class="image-item">
        <img :src="item.image" alt="" />
        <div class="image-description">{{ item.description }}</div>
    </div>
</template>

<script setup>
defineProps({
    item: {
        type: Object
    }
})
</script>

<style  scoped>
.image-item {
    position: relative;
    border-radius: 10px;
    /* 圆角 */
    text-align: center;
    /* 内容居中 */

    padding: 10px;
    /* 内边距，确保图片与边缘有10px的距离 */
}


.image-item img {
    height: auto;
    /* 保持比例 */
    border-radius: 10px;
    /* 圆角 */
    width: 200px;
    /* 设置宽度为100%以自适应父容器 */
    height: 200px;
    /* 固定高度为100px */
}

.image-description {
    margin-top: 8px;
    /* 描述与图片的间距 */
}
</style>
