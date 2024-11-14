<template>
  <div class="all">
      <div class="left">

          <h2>编辑个人信息</h2>
          <div class="form-left">
              <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef">

                  <el-form-item label="用户名" prop="username">
                      <el-input class="in1" v-model="ruleForm.username"></el-input>
                  </el-form-item> 

                  <el-form-item label="性别" prop="sex" style="margin-left: 10px;margin-top: 30px;">
                      <el-radio v-model="selectedOption" label="option1" style="margin-left: 40px">男&nbsp;</el-radio>
                      <el-radio v-model="selectedOption" label="option2" style="margin-left: 15px">女&nbsp;</el-radio>
                      <el-radio v-model="selectedOption" label="option3" style="margin-left: 15px">保密</el-radio>
                  </el-form-item>

                  <el-form-item prop="phone">
                      <label style="margin-left: 20px;">手机</label>
                      <el-input class="in1" v-model="ruleForm.phone" style="margin-left:20px;"></el-input>
                  </el-form-item> 

                  <el-form-item label="生日" required style="margin-left: 10px;margin-top: 30px;"> 
                    <el-col>
                      <el-form-item prop="birthday">
                        <el-date-picker
                          v-model="ruleForm.birthday"
                          type="date"
                          aria-label="Pick a date"
                          style="width: 300px;" 
                          placeholder="2020-01-04"
                        />
                      </el-form-item>
                    </el-col>
                  </el-form-item>
                  
                  <el-form-item label="签名" prop="sign" style="margin-left: 10px;margin-top: 30px;">
                      <el-input class="in2" type="textarea" v-model="ruleForm.sign" style="margin-left:5px;"></el-input>
                  </el-form-item> 

                  <el-form-item label="地区" prop="address" style="margin-left: 10px;margin-top: 30px;">
                      <el-select v-model="selectedProvince" style="width: 300px;margin-left: 5px;"  placeholder="地区">
                          <el-option v-for="province in provinces" :key="province" :label="province" :value="province" />
                      </el-select>
                  </el-form-item> 

                  <el-form-item>
                      <el-button class="cancel" @click="cancelForm(ruleFormRef)" style="width: 100px;height: 40px;margin-right: 30px;margin-left: 60px;margin-top: 20px;" round>取消</el-button>
                      <el-button class="save" type="primary" @click="saveForm(ruleFormRef)" round style="width: 100px;height: 40px;margin-top: 20px;">保存</el-button>
                  </el-form-item>
                  
              </el-form>
          </div>

      </div>

      <div class="line"></div> <!-- 新增竖线元素 -->

      <div class="right">  

          <h2>修改密码</h2>

          <div class="form-right">

              <el-form :model="ruleForm2" :rules="rules2" ref="formRef">
                  <el-form-item prop="oldpassward">
                    <label class="lb1" style="margin-right: 20px;margin-left: 10px;">旧密码</label>
                    <el-input class="in1" v-model="ruleForm2.oldpassward" type="passward" @keyup.enter="confirmForm"></el-input>
                  </el-form-item> 

                  <el-form-item prop="newpassward">
                    <label class="lb1" style="margin-right: 20px;margin-left: 10px;">新密码</label>
                    <el-input class="in1" v-model="ruleForm2.newpassward"></el-input>
                  </el-form-item> 
          
                  <el-form-item prop="passwardconfirm">
                    <label class="lb1" >密码确认</label>
                    <el-input class="in1" v-model="ruleForm2.passwardconfirm" style="margin-left: 20px;"></el-input>
                  </el-form-item> 

                  <el-form-item>
                    <el-button class="reset" @click="resetForm(formRef)" style="width: 100px;height: 40px;margin-right: 30px;margin-left: 70px;margin-top: 20px;">重置</el-button>
                    <el-button class="confirm" type="primary" @click="confirmForm(formRef)" style="width: 100px;height: 40px;margin-right: 30px;margin-top: 20px;">确认修改</el-button>
                  </el-form-item>


              </el-form>
              
          </div>

      </div>

  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'

const formRef = ref<FormInstance>()
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  username: '',
  sex:'',
  phone: '',
  birthday:'',
  sign: '',
  address:'',
})

const ruleForm2 = reactive({
  oldpassward: '',
  newpassward: '',
  passwardconfirm: '',
})


const rules = reactive({
  username:[
  { required: true, message: '请输入用户名', trigger: 'blur' },
  { min: 3, max: 5, message: '用户名长度请控制在3-5位', trigger: 'blur' },
  ],

  sex:[
  { required: true, message: '请选择您的性别', trigger: 'blur' },
  ],

  phone:[
  { required: true, message: '请输入手机号码', trigger: 'blur' },
  { min: 11, max: 11, message: '手机号码长度必须为11位', trigger: 'blur' },
  ],

  birthday:[
  { required: true, message: '请选择您的生日', trigger: 'blur' },
  ],

  sign:[
  { required: true, message: '请输入自己的签名', trigger: 'blur' },
  ],

  address:[
  { required: true, message: '请选择您的地址', trigger: 'blur' },
  ],

})

const rules2 = reactive({

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
const selectedOption = ref(null);

// 地区：省份数据
const provinces = ref([
  "北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省",
  "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省",
  "广东省", "海南省", "四川省", "贵州省", "云南省", "陕西省", "甘肃省", "青海省", "台湾省",
  "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"
]);
const selectedProvince = ref(null);


const cancelForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const saveForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('save!')
    } else {
      console.log('cancel!', fields)
    }
  })
}

const resetForm = (formE1: FormInstance | undefined) => {
  if (!formE1) return
  formE1.resetFields()
}

const confirmForm = async (formE1: FormInstance | undefined) => {
  if (!formE1) return
  await formE1.validate((valid, fields) => {
    if (valid) {
      console.log('reset!')
    } else {
      console.log('confirm!', fields)
    }
  })
}



</script>

<style lang="scss" scoped>

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

.cancel{
background-color: transparent; /* 背景透明 */
cursor: pointer; /* 鼠标指针变为手型 */
font-size: 14px; /* 字体大小 */
padding: 5px 10px; /* 内边距 */
border-radius: 15px;
}

.save{
border-radius: 15px;
cursor: pointer; /* 鼠标指针变为手型 */
font-size: 14px; /* 字体大小 */
padding: 5px 10px; /* 内边距 */
}

.reset{
background-color: transparent; /* 背景透明 */
cursor: pointer; /* 鼠标指针变为手型 */
font-size: 14px; /* 字体大小 */
padding: 5px 10px; /* 内边距 */
border-radius: 15px;
}

.confirm{
border-radius: 15px;
cursor: pointer; /* 鼠标指针变为手型 */
font-size: 14px; /* 字体大小 */
padding: 5px 10px; /* 内边距 */
}

.cancel {
  color: black;
  font-weight: bold;
}

.reset {
  color: black;
  font-weight: bold;
}

</style>
