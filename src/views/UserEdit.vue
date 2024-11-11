<template>
    <div class="all">
        <div class="left">

            <h2>编辑个人信息</h2>
            <div class="form-left">
                <el-form :model="ruleForm" :rules="rules">

                    <el-form-item prop="username">
                        <span class="s1">*</span>
                        <label class="lb1" style="margin-right: 20px;">用户名</label>
                        <el-input class="in1" v-model="ruleForm.username"></el-input>
                    </el-form-item> 

                    <el-form-item>
                        <span class="s1">*</span>
                        <label class="lb1" style="margin-right: 60px;">性别</label>
                        <el-radio v-model="selectedOption" label="option1">男&nbsp;</el-radio>
                        <el-radio v-model="selectedOption" label="option2">女&nbsp;</el-radio>
                        <el-radio v-model="selectedOption" label="option3">保密</el-radio>
                    </el-form-item>

                    <el-form-item prop="phone">
                        <label class="lb1" style="margin-right: 20px;">手机</label>
                        <el-input class="in1" v-model="ruleForm.phone"></el-input>
                    </el-form-item> 

                    <el-form-item>
                        <span class="s1">*</span>
                        <label class="lb1">生日</label>
                        <el-date-picker class="in1" type="date"
                            style="margin-left: 20px;width: 300px;" placeholder="2020-01-04"></el-date-picker>
                    </el-form-item>
                    
                    <el-form-item prop="sign">
                        <span class="s1">*</span>
                        <label class="lb1" style="margin-right: 20px;">签名</label>
                        <el-input class="in2" type="textarea" v-model="ruleForm.sign"></el-input>
                    </el-form-item> 

                    <el-form-item>
                        <span class="s1">*</span>
                        <label class="lb1" style="margin-right: 20px;">地区</label>
                        <el-select v-model="selectedProvince" style="width: 300px;">
                            <el-option v-for="province in provinces" :key="province" :label="province" :value="province" />
                        </el-select>
                    </el-form-item> 

                    <el-form-item>
                        <el-button style="width: 100px;height: 40px;margin-right: 30px;" round>取消</el-button>
                        <el-button type="primary" @click="onSubmit" round>保存</el-button>
                    </el-form-item>
                    
                </el-form>
            </div>

        </div>

        <div class="line"></div> <!-- 新增竖线元素 -->

        <div class="right">  

            <h2>修改密码</h2>

            <div class="form-right">

                <el-form :model="ruleForm" :rules="rules">
                    <el-form-item prop="oldpassward">
                    <label class="lb1" style="margin-right: 20px;">旧密码</label>
                    <el-input class="in1" v-model="ruleForm.oldpassward" type="passward" @keyup.enter="onSubmit"></el-input>
                </el-form-item> 

                <el-form-item prop="newpassward">
                    <label class="lb1" style="margin-right: 20px;">新密码</label>
                    <el-input class="in1" v-model="ruleForm.newpassward"></el-input>
                </el-form-item> 
            
                <el-form-item prop="passwardconfirm">
                    <label class="lb1" style="margin-right: 20px;">密码确认</label>
                    <el-input class="in1" v-model="ruleForm.passwardconfirm"></el-input>
                </el-form-item> 

                <el-form-item>
                    <el-button>重置</el-button>
                    <el-button type="primary" @click="onSubmit">确认修改</el-button>
                </el-form-item>


                </el-form>
                
            </div>

        </div>

    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue';
import { reactive } from 'vue'

const ruleForm = reactive({
    username: '',
    phone: '',
    sign: '',
    // passward:'',
    oldpassward: '',
    newpassward: '',
    passwardconfirm: '',
})

const rules = reactive({
    username:[
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '用户名长度请控制在3-5位', trigger: 'blur' },
    ],

    phone:[
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    { min: 11, max: 11, message: '手机号码长度必须为11位', trigger: 'blur' },
    ],

    sign:[
    { required: true, message: '请输入自己的签名', trigger: 'blur' },
    // { min: 6, max: 8, message: '签名长度', trigger: 'blur' },
    ],

    // passward:[
    // { required: true, message: '请输入密码', trigger: 'blur' },
    // { min: 6, max: 8, message: '密码长度请控制在6-8位', trigger: 'blur' },
    // ],

    oldpassward:[
    { required: true, message: '请输入旧密码', trigger: 'blur' },
    { min: 6, max: 8, message: '密码长度请控制在6-8位', trigger: 'blur' },
    ],

    newpassward:[
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 6, max: 8, message: '密码长度请控制在6-8位', trigger: 'blur' },
    ],

    passwardconfirm:[
    { required: true, message: '请进行密码确认', trigger: 'blur' },
    { min: 6, max: 8, message: '密码长度应为6-8位', trigger: 'blur' },
    ],

})

// 单选按钮点击选中
const selectedOption = ref('男');

// 地区：省份数据
const provinces = ref([
    "北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省",
    "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省",
    "广东省", "海南省", "四川省", "贵州省", "云南省", "陕西省", "甘肃省", "青海省", "台湾省",
    "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"
]);
const selectedProvince = ref('地区');

const onSubmit = () => {
  console.log('submit!')
}

</script>

<style  scoped>

.all{
    margin-top: 30px;
}

.left {
    width: 50%;
    float: left;
    text-align: center;
}

.right {
    width: 50%;
    float: right;
    opacity: 1;
    text-align: center;
}

.line {
  width: 1px; /* 设置竖线的宽度 */
  height: 80%; /* 设置竖线的高度，使其与父容器等高 */
  background-color: #ccc; /* 设置竖线的颜色 */
  position: absolute; /* 使用绝对定位，使其脱离文档流并准确放置在两个div之间 */
  left: 50%; /* 将竖线水平居中放置在两个div之间 */
  top: 15%;
  transform: translateX(-50%); /* 通过 translateX 微调竖线位置，使其精确居中 */
}

.form-left{
    margin-left: 150px;
}

.form-right{
    margin-left: 150px;
    margin-top: 30px;
}

.in1 {
width: 300px;
height: 40px;
opacity: 1;
border-radius: 2px;
// background: rgba(255, 255, 255, 1);
// border: 1px solid rgba(176, 177, 177, 1);
}

.in2{
width: 300px;
}

</style>
