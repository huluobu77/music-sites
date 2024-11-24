<template>
    <div class="box">
        <h3>歌曲</h3>
        <el-table :data="tableData">
            <el-table-column prop="number" label="#" width="80" />
            <el-table-column prop="song" label="歌曲" width="300" />
            <el-table-column prop="singer" label="歌手" width="300" />
            <el-table-column prop="album" label="专辑" width="300" />
            <el-table-column prop="time" label="时长" />
        </el-table>
    </div>
</template>

<script setup>

// el-table的定义数据
const tableData = [
    {
        number: '01',
        song: '爱的回归线',
        singer: '单依纯',
        album: '巨好听的歌《第五期》',
        time: '3:42',
    },
]

</script>

<style lang="scss" scoped>
h3 {
    margin-top: 30px;
    margin-left: 40px;
}

.el-table {
    padding-top: 10px;
    background: none;
    padding-left: 30px;
    padding-right: 30px;
}
</style>