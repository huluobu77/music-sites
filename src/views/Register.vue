<template>
    <div class="all" style="margin-top: 30px;">
        <div class="left">
            <h1 style="margin: 0px;margin-top: 15px;">用户注册</h1>
            <div class="le1">
                <el-form :model="ruleForm" :rules="rules">
                    <el-form-item prop="username">
                        <span class="s1">*</span>
                        <label class="lb1">用户名</label>
                        <el-input v-model="ruleForm.username" class="in1"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <span class="s1">*</span>
                        <label class="lb1"> 密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
                        <el-input v-model="ruleForm.password" class="in1"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <span class="s1">*</span>
                        <label class="lb1"> 性&nbsp;&nbsp;&nbsp;&nbsp;别</label>
                        <el-radio v-model="selectedOption" label="option1">男</el-radio>
                        <el-radio v-model="selectedOption" label="option2">女</el-radio>
                        <el-radio v-model="selectedOption" label="option3">保密</el-radio>
                    </el-form-item>
                    <el-form-item prop="phone">
                        <label class="lb1"> &nbsp;&nbsp;手&nbsp;&nbsp;&nbsp;&nbsp;机</label>
                        <el-input v-model="ruleForm.phone" class="in1"></el-input>
                    </el-form-item>
                    <el-form-item prop="birthday">
                        <span class="s1">*</span>
                        <label class="lb1"> 生&nbsp;&nbsp;&nbsp;&nbsp;日</label>
                        <el-date-picker v-model="ruleForm.birthday" class="in1" type="data"
                            style="margin-left: 30px;width: 300px;" placeholder="2020-01-04"></el-date-picker>
                    </el-form-item>
                    <el-form-item prop="sign">
                        <span class="s1">*</span>
                        <label class="lb1"> 签&nbsp;&nbsp;&nbsp;&nbsp;名</label>
                        <el-input v-model="ruleForm.sign" class="in1" style="height: 70px;"></el-input>
                    </el-form-item>
                    <el-form-item prop="selectedValue">
                        <span class="s1">*</span>
                        <label class="lb1"> 地&nbsp;&nbsp;&nbsp;&nbsp;区</label>
                        <el-select v-model="selectedProvince" style="width: 300px; margin-left: 30px;">
                            <el-option v-for="province in provinces" :key="province" :label="province" :value="province" />
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            style="width: 332px;height: 40px;background-color:#3366FF;margin-left: 60px;color: white;"
                            type="primary" @click="register">注册</el-button>
                    </el-form-item>
                    <el-form-item>
                        <router-link to="/Login"
                            style="margin-left: 332px;text-decoration: none; color: grey;">登录</router-link>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="right">
            <img class="img1"
                src="https://img.js.design/assets/img/66ed6f40c6ebda7a2a163c9a.jpg#ea9d4281bf16114767909ba76e10357a);" />
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue';
import { reactive } from 'vue'
const ruleForm = reactive({
    username: '',
    password: '',
    phone: '',
    birthday: '',
    sign: '',
    selectedValue: '',
    selectedOption: null
})

const rules = reactive({
    username:[
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度应该在3-5之间', trigger: 'blur' },
    ],

    password:[
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 8, message: '长度应该在6-8之间', trigger: 'blur' },
    ],
    birthday:[
    { required: true, message: '请输入生日', trigger: 'blur' },
    ],
    sign:[
    { required: true, message: '请签名', trigger: 'blur' },
    ],
    selectedValue:[
    { required: true, message: '请填入地区', trigger: 'blur' },
    ],
})
const register = () => {
    console.log('register');

}
//单选按钮点击选中
const selectedOption = ref(null);
const provinces = ref([
      "北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", 
      "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", 
      "广东省", "海南省", "四川省", "贵州省", "云南省", "陕西省", "甘肃省", "青海省", "台湾省", 
      "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"
    ]);
    const selectedProvince = ref('北京市');
</script>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
}

.left {
    width: 60%;
    display: inline-block;
    float: left;
}

.right {
    width: 40%;
    display: inline-block;
    float: right;
    opacity: 1;

}

.img1 {
    width: 100%;
    height: 600px;
    margin: 0px;
}

.le1 {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.s1 {
    color: red;
}

.in1 {

    width: 300px;
    height: 40px;
    opacity: 1;
    border-radius: 2px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(176, 177, 177, 1);
}

.el-input {
    margin-left: 30px;
}

.el-radio {
    margin-left: 30px;
}

.el-form-item {
    margin-top: 20px;
}
</style>