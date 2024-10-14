<template>
    <div class="all">
      <div class="left">
        <h1>用户注册</h1>
        <div class="le1">
            <el-form :model="formData" ref="formRef" >
                <el-form-item prop="username">
                    <span class="s1">*</span>
                    <label class="lb1">用户名</label>
                    <el-input v-model="formData.username" class="in1"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <span class="s1">*</span>
                    <label class="lb1"> 密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
                    <el-input v-model="formData.password" class="in1"></el-input>
                </el-form-item>
                <el-form-item >
                    <span class="s1">*</span>
                    <label class="lb1"> 性&nbsp;&nbsp;&nbsp;&nbsp;别</label>
                    <el-radio v-model="selectedOption" label="option1">男</el-radio>
                    <el-radio v-model="selectedOption" label="option2">女</el-radio>
                    <el-radio v-model="selectedOption" label="option3">保密</el-radio>
                </el-form-item>
                <el-form-item prop="phone">
                    <span class="s1">*</span>
                    <label class="lb1"> 手&nbsp;&nbsp;&nbsp;&nbsp;机</label>
                    <el-input v-model="formData.phone" class="in1"></el-input>
                </el-form-item>
                <el-form-item prop="birthday">
                    <span class="s1">*</span>
                    <label class="lb1"> 生&nbsp;&nbsp;&nbsp;&nbsp;日</label>
                    <el-date-picker v-model="formData.birthday" class="in1" type="data" style="margin-left: 30px;width: 300px;" placeholder="2020-01-04" ></el-date-picker>
                </el-form-item>
                <el-form-item prop="sign">
                    <span class="s1">*</span>
                    <label class="lb1"> 签&nbsp;&nbsp;&nbsp;&nbsp;名</label>
                    <el-input v-model="formData.sign" class="in1" style="height: 70px;"></el-input>
                </el-form-item>
                <el-form-item prop="selectedValue">
                    <span class="s1">*</span>
                    <label class="lb1"> 地&nbsp;&nbsp;&nbsp;&nbsp;区</label>
                    <el-select v-model="formData.selectedValue" style="width: 300px;margin-left: 30px;" placeholder="地区">
                      <el-option label="长沙" value="1"></el-option>
                      <el-option label="株洲" value="2"></el-option>
                      <el-option label="湘潭" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button style="width: 332px;height: 40px;background-color:#3366FF;margin-left: 60px;color: white;" type="primary" @click="register">注册</el-button>
                </el-form-item>
                <el-form-item>
                  <router-link to="/Login" style="margin-left: 332px;text-decoration: none; color: grey;">登录</router-link>
                </el-form-item>
            </el-form>
        </div>
      </div>
      <div class="right">
        <img class="img1" src="https://img.js.design/assets/img/66ed6f40c6ebda7a2a163c9a.jpg#ea9d4281bf16114767909ba76e10357a);"/>
      </div>
    </div>
</template>
  
  <script>
 import { ref } from 'vue';
 export default {
  data() {
    return {
      selectedOption: null ,
     formData:{
      username:"",
      password:"",
      phone:"",
      birthday:"",
      selectedValue:"",
      sign:""
     }
    };
  },
  methods: {
  handleSelection() {
    if (this.selectedOption === 'option1') {
    } else if (this.selectedOption === 'option2') {
    } else if (this.selectedOption === 'option3') {
    }
  },
  register() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          alert("注册成功");
          console.log('注册成功，表单数据：', this.formData);
        } else {
          alert("除电话以外其余不能为空")
          console.log('表单验证不通过');
        }
      });
    }
},
validations: {
    username: [
      { required: true, message: '用户名不能为空', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '密码不能为空', trigger: 'blur' }
    ],
    sign: [
      { required: true, message: '签名不能为空', trigger: 'blur' }
    ]
  }
};

  </script>
  
  <style scoped>
  .left{
    width: 60%;
   display: inline-block; 
   float: left;
   text-align: center;
  }
  .right{
    margin-top: 20px;
    width: 40%;
    display: inline-block;
    float: right;
   opacity: 1;
  
  }
  .img1{
    width: 100%;
    height: 600px;
  }
  .le1{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  .s1{
    color: red;
  }
  .in1{
    
    width: 300px;
    height: 40px;
    opacity: 1;
    border-radius: 2px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(176, 177, 177, 1);
  }
  .el-input{
    margin-left: 30px;
  }
 .el-form{
  margin-top: 30px;
 }
 .el-radio{
  margin-left: 30px;
 }
 
  </style>