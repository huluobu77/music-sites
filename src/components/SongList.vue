<template>
  <div class="content">
    <el-table ref="singleTableRef" highlight-current-row :data="dataList" @row-click="handleClick">
      <el-table-column prop="songName" label="歌曲" />
      <el-table-column prop="singerName" label="歌手" />
      <el-table-column prop="introduction" label="专辑" />
      <!-- <el-table-column prop="introduction" label="时长" /> -->
      <!-- <el-table-column label="编辑" width="80" align="center">
        <template #default="scope">
          <el-dropdown>
            <el-icon @click="handleEdit(scope.row)">
              <MoreFilled />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Download" @click="
                  downloadMusic({
                    songUrl: scope.row.url,
                    songName: scope.row.name,
                  })
                  ">下载</el-dropdown-item>
                <el-dropdown-item :icon="Delete" v-if="show"
                  @click="deleteCollection({ id: scope.row.id })">删除</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { defineComponent,ref, getCurrentInstance, toRefs, computed, reactive } from "vue";
import { useStore } from "vuex";
import { MoreFilled, Delete, Download } from "@element-plus/icons-vue";
import { formatSeconds } from "@/utils";

import mixin from "@/mixins/mixin";
import { HttpManager } from "@/api";
import { Icon } from "@/enums/icon";

const props = defineProps({
  songList: Array,
  show: {
    default: false
  }
})

const emit = defineEmits(['changeData'])

const { getSongTitle, getSingerName, playMusic, checkStatus, downloadMusic } = mixin();
const { proxy } = getCurrentInstance();
const store = useStore();

const { songList } = toRefs(props);

const iconList = reactive({
  dislike: Icon.Dislike,
  like: Icon.Like,
});

const songUrl = computed(() => store.getters.songUrl);
const singerName = computed(() => store.getters.singerName);
const songTitle = computed(() => store.getters.songTitle);
const dataList = computed(() => {
  const list = [];
  songList.value.forEach((item, index) => {
    item["songName"] = getSongTitle(item.name);
    item["singerName"] = getSingerName(item.name);
    item["index"] = index;
    list.push(item);
  });
  return list;
});
const singleTableRef = ref()

function handleClick(row) {
  // singleTableRef.value?.setCurrentRow(row)

  playMusic({
    id: row.id,
    url: row.url,
    pic: row.pic,
    index: row.index,
    name: row.name,
    lyric: row.lyric,
    currentSongList: songList.value,
  });
}


</script>

<style lang="scss" scoped>
.content {
  background-color: var(--color-white);
  // border-radius: $border-radius-songlist;
  padding: 10px;
}

.content:deep(.el-table__row.current-row) {
  color: var(--color-black);
  font-weight: bold;
}

.content:deep(.el-table__row) {
  cursor: pointer;
}

.icon {
  // @include icon(1.2em, var(--color-black));
}
</style>
