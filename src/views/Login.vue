<template>
    <div class="all" style="margin-top: 20px;">

        <div class="left">
            <h1>用户登录</h1>

            <div class="form-list">

                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" placeholder="用户名" style="height: 50px;" />
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input v-model="ruleForm.password" placeholder="密码" type="password" style="height: 50px;" />
                    </el-form-item>

                    <el-form-item>
                        <el-text type="info" style="margin-left: 280px;" @click="router.push('/register')">注册</el-text>
                    </el-form-item>

                    <el-form-item>
                        <el-button class="login-btn" type="primary" @click="onSubmit" style="height: 35px;">登录</el-button>
                    </el-form-item>

                </el-form>

            </div>

        </div>

        <div class="right">
            <img class="img1"
                src="https://img.js.design/assets/img/66ed6f40c6ebda7a2a163c9a.jpg#ea9d4281bf16114767909ba76e10357a">
        </div>

    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { HttpManager } from "@/api";

const router = useRouter();
const store = useStore();

const ruleForm = reactive({
    username: '',
    password: '',
})
const ruleFormRef = ref(null);

const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 2, max: 10, message: '用户名长度请控制在2-10位', trigger: 'blur' },
    ],

    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 12, message: '密码长度请控制在3-12位', trigger: 'blur' },
    ],

})

const onSubmit = () => {
    ruleFormRef.value.validate(async (valid) => {
        if (!valid) return;
        console.log('submit!');

        try {
            const username = ruleForm.username;
            const password = ruleForm.password;
            const result = (await HttpManager.signIn({ username, password }));
            ElMessage({
                message: result.message,
                type: result.type,
            })

            if (result.success) {
                store.commit("setUserId", result.data[0].id);
                store.commit("setUsername", result.data[0].username);
                store.commit("setUserPic", result.data[0].avator);
                store.commit("setToken", true);
                router.push("/")
            }
        } catch (error) {
            console.error(error);
        }
    })

}
</script>

<style scoped>
.form-list {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.all {
    display: flex;
    justify-content: space-between;

    .left {
        margin-left: 260px;
    }

    .right {
        width: 40vw;
        margin-right: 0;

        img {
            width: 100%;

        }
    }
}

.left {
    /* width: 50%; */
    /* display: inline-block; */
    /* float: left; */
    /* text-align: center; */
}

.right {
    /* width: 50%; */
    /* display: inline-block; */
    /* float: right; */
    /* margin-right: 0;
    opacity: 1;
    .img{

    } */
}

.login-btn {
    font-size: 15px;
    padding: 10px 140px;
}

.demo-form-inline .el-input {
    --el-input-width: 220px;
}

.demo-form-inline .el-select {
    --el-select-width: 220px;
}

h1 {
    margin-top: 150px;
    margin-bottom: 10px;
    text-align: center;
}

.el-input {
    margin-left: 5px;
    margin-top: 5px;
}

.el-form {
    margin-top: 30px;

    .el-form-item:nth-child(1) {
        margin-top: 10px;
    }
}
</style>