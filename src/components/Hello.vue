<template>
    <div>
        <button @click="count++">{{ count }}按钮</button>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
const count = ref(0);
onMounted(() => {
    console.log('挂载')
})
</script>

<style scoped></style>
