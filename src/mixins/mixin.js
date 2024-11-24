import { getCurrentInstance, computed } from "vue";
import { useStore } from "vuex";
import { ElMessage } from 'element-plus'
import axios from 'axios'


export default function () {

  const store = useStore();
  const token = computed(() => store.getters.token);

  function getUserSex(sex) {
    if (sex === 0) {
      return "女";
    } else if (sex === 1) {
      return "男";
    }
  }

  // 获取歌曲名
  function getSongTitle(str) {
    return str.split("-")[1];
  }

  // 获取歌手名
  function getSingerName(str) {
    return str.split("-")[0];
  }

  // 判断登录状态
  function checkStatus(status) {
    if (!token.value) {
      if (status !== false)
        ElMessage.error('请先登录')
      return false;
    }
    return true;
  }

  // 播放
  function playMusic({ id, url, pic, index, name, lyric, currentSongList }) {
    const songTitle = getSongTitle(name);
    const singerName = getSingerName(name);
    store.dispatch("playMusic", {
      id,
      url,
      pic,
      index,
      songTitle,
      singerName,
      lyric,
      currentSongList,
    });
  }

  function getFileName(path) {
    const parts = path.split('/');
    return parts[parts.length - 1];
  }

  // 下载
  async function downloadMusic({ songUrl, songName }) {
    if (!songUrl) {
      ElMessage.error('下载链接为空！')
      return;
    }
    const fileName = getFileName(songUrl);
    const downUrl = "/download/" + fileName
    // const result = (await HttpManager.downloadMusic(downUrl)) as ResponseBody;
    // console.log(result.data);

    // const eleLink = document.createElement("a");
    // eleLink.download = `${fileName}`;
    // eleLink.style.display = "none";
    // // 字符内容转变成 blob 地址
    // const blob = new Blob([result.data]);
    // console.log(blob)
    // eleLink.href = URL.createObjectURL(blob);
    // document.body.appendChild(eleLink); // 触发点击
    // eleLink.click();
    // document.body.removeChild(eleLink); // 移除

    const response = await axios.get(downUrl, {
      responseType: 'blob', // 指定响应类型为二进制数据
    });

    // 创建一个Blob URL来下载文件
    const blob = new Blob([response.data], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);

    // 创建一个隐藏的<a>标签来下载文件
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();

    // 释放URL对象
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);

  }

  // 导航索引
  function changeIndex(value) {
    store.dispatch("setActiveNavName", value);
  }
  return {
    getUserSex,
    getSongTitle,
    getSingerName,
    changeIndex,
    checkStatus,
    playMusic,
    downloadMusic,
  };
}
