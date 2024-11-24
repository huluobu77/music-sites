<template>
    <div class="all" style="margin-top: 20px;">

        <div class="left">
            <h1>用户注册</h1>

            <div class="form-list">

                <el-form ref="signUpForm" label-width="70px" status-icon :model="registerForm" :rules="SignUpRules">
                    <el-form-item prop="username" label="用户名">
                        <el-input v-model="registerForm.username" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="密码">
                        <el-input type="password" placeholder="密码" v-model="registerForm.password"></el-input>
                    </el-form-item>
                    <el-form-item prop="sex" label="性别">
                        <el-radio-group v-model="registerForm.sex">
                            <el-radio :label="0">女</el-radio>
                            <el-radio :label="1">男</el-radio>
                            <el-radio :label="2">保密</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item prop="phoneNum" label="手机">
                        <el-input placeholder="手机" v-model="registerForm.phoneNum"></el-input>
                    </el-form-item>
                    <el-form-item prop="birth" label="生日">
                        <el-date-picker type="date" placeholder="选择日期" v-model="registerForm.birth"
                            style="width: 100%"></el-date-picker>
                    </el-form-item>
                    <el-form-item prop="introduction" label="签名">
                        <el-input type="textarea" placeholder="签名" v-model="registerForm.introduction"></el-input>
                    </el-form-item>
                    <el-form-item prop="location" label="地区">
                        <el-select v-model="registerForm.location" placeholder="地区" style="width: 100%">
                            <el-option v-for="item in AREA" :key="item.value" :label="item.label"
                                :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-text type="info" style="margin-left: 250px;" @click="router.push('/login')">登录</el-text>
                    </el-form-item>
                    <el-form-item class="sign-btn">
                        <el-button class="login-btn" type="primary" @click="handleSignUp"
                            style="height: 35px;">注册</el-button>
                        <!-- <el-button @click="goBackRegist()">取消</el-button>
                        <el-button type="primary" @click="handleSignUp(formRef)">确定</el-button> -->
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
import mixin from "@/mixins/mixin";
import { HttpManager } from "@/api";
import { AREA } from '@/enums/area.js'
import { getBirth } from "@/utils";
import { useRouter } from 'vue-router'

const router = useRouter();
const signUpForm = ref(null);
const registerForm = reactive({
    username: "",
    password: "",
    sex: "",
    phoneNum: "",
    birth: new Date(),
    introduction: "",
    location: "",
});

const SignUpRules = reactive({
    username: [{ required: true, message: '请输入用户名', trigger: "blur", min: 3 }],
    password: [{ required: true, message: '请输入密码', trigger: "blur", min: 3 }],
    sex: [{ required: true, message: "请选择性别", trigger: "change" }],
    phoneNum: [{ message: '请输入正确的手机号', pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|78|9]|18[0|1|23|5|6|7|8|9])\d{8}$/, trigger: ['blur', 'change'] },],
    birth: [{ required: true, type: "date", message: "请选择日期", trigger: "change" }],
    introduction: [{ required: true, message: "请输入介绍", trigger: "blur" }],
    location: [{ required: true, message: "请输入地区", trigger: "change" }],
})


async function handleSignUp() {
    let canRun = true;
    signUpForm.value.validate(async (valid) => {
        if (!valid) return (canRun = false);
        try {
            const username = registerForm.username;
            const password = registerForm.password;
            const sex = registerForm.sex;
            const phoneNum = registerForm.phoneNum;
            const email = registerForm.email;
            const birth = registerForm.birth;
            const introduction = registerForm.introduction;
            const location = registerForm.location;
            const result = (await HttpManager.SignUp({ username, password, sex, phoneNum, email, birth, introduction, location }));
            ElMessage({
                message: result.message,
                type: result.type,
            })

            if (result.success) {
                router.push('/login');
            }
        } catch (error) {
            console.error(error);
        }
    });
    // if (!canRun) return;


}

</script>

<style scoped>
.all {
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;

    .left {
        width: 400px;
        margin-left: 260px;

        ::v-deep(.el-form-item__content) {
            width: 100% !important;
        }
    }

    .right {
        width: 40vw;
        margin-right: 0;

        img {
            width: 100%;

        }
    }
}



.login-btn {
    width: 280px;
    font-size: 15px;
    padding: 10px 140px;
}


::v-deep(.el-select),
::v-deep(.el-textarea),
::v-deep(.el-input) {
    width: 280px !important;
}

h1 {
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
}

.el-input {
    height: 40px;
}
</style>