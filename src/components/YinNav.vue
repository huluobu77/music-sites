<template>
  <ul class="yin-nav">
    <li v-for="(item, index) in styleList" :key="index" :class="{ active: item.name == activeName }"
      @click="handleChangeView(item)">
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup>

const props = defineProps({
  styleList: Array,
  activeName: String,
})
const emit = defineEmits(['click'])
const handleChangeView = (val) => {
  emit('click', val)
}
</script>

<style lang="scss" scoped>
.yin-nav {
  display: flex;
  width: 100%;

  li {
    line-height: 2rem;
    font-size: 1rem;
    width: 80px;
    text-align: center;
    color: var(--gray-color);
    border-bottom: none;
    cursor: pointer;
  }

  li.active {
    color: var(--gray-black);
    font-weight: 600;
  }
}
</style>
