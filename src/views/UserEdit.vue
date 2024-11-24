<template>
  <div class="all">
    <div class="left">

      <h2>编辑个人信息</h2>
      <div class="form-left">
        <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef">

          <el-form-item label="用户名" prop="username" label-width="80">
            <el-input class="in1" v-model="ruleForm.username"></el-input>
          </el-form-item>

          <el-form-item label="性别" label-width="80" prop="sex">
            <el-radio-group v-model="ruleForm.sex">
              <el-radio :label="0">女</el-radio>
              <el-radio :label="1">男</el-radio>
              <el-radio :label="2">保密</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item prop="phoneNum" label="手机" label-width="80">
            <el-input class="in1" v-model="ruleForm.phoneNum"></el-input>
          </el-form-item>

          <el-form-item prop="birth" label="生日" label-width="80">
            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;" v-model="ruleForm.birth"></el-date-picker>
          </el-form-item>

          <el-form-item label="签名" prop="introduction" label-width="80">
            <el-input class="in2" type="textarea" v-model="ruleForm.introduction"></el-input>
          </el-form-item>

          <el-form-item prop="location" label="地区" label-width="80">
            <el-select v-model="ruleForm.location" placeholder="地区">
              <el-option v-for="item in AREA" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button class="cancel" @click="cancelForm(ruleFormRef)"
              style="width: 100px;height: 40px;margin-right: 30px;margin-left: 60px;margin-top: 20px;"
              round>取消</el-button>
            <el-button class="save" type="primary" @click="saveForm(ruleFormRef)" round
              style="width: 100px;height: 40px;margin-top: 20px;">保存</el-button>
          </el-form-item>

        </el-form>
      </div>

    </div>

    <div class="line"></div> <!-- 新增竖线元素 -->

    <div class="right">

      <h2>修改密码</h2>

      <div class="form-right">

        <el-form :model="ruleForm2" :rules="rules2" ref="formRef">
          <el-form-item prop="oldPassword">
            <label class="lb1" style="margin-right: 20px;margin-left: 10px;">旧密码</label>
            <el-input class="in1" v-model="ruleForm2.oldPassword" type="password"></el-input>
          </el-form-item>

          <el-form-item prop="newPassword">
            <label class="lb1" style="margin-right: 20px;margin-left: 10px;">新密码</label>
            <el-input class="in1" v-model="ruleForm2.newPassword" type="password"></el-input>
          </el-form-item>

          <el-form-item prop="confirmPassword">
            <label class="lb1">密码确认</label>
            <el-input class="in1" v-model="ruleForm2.confirmPassword" style="margin-left: 20px;"
              type="password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button class="reset" @click="resetForm(formRef)"
              style="width: 100px;height: 40px;margin-right: 30px;margin-left: 70px;margin-top: 20px;">重置</el-button>
            <el-button class="confirm" type="primary" @click="confirmForm(formRef)"
              style="width: 100px;height: 40px;margin-right: 30px;margin-top: 20px;">确认修改</el-button>
          </el-form-item>


        </el-form>

      </div>

    </div>

  </div>
</template>

<script  setup>
import { defineComponent, computed, onMounted, getCurrentInstance, ref, reactive } from "vue";
import { useStore } from "vuex";
import mixin from "@/mixins/mixin";
import { AREA } from "@/enums/area";
import { HttpManager } from "@/api";
import { getBirth } from "@/utils";
import { useRouter } from 'vue-router'


const formRef = ref()
const ruleFormRef = ref()

const router = useRouter();
const store = useStore();
const ruleForm = reactive({
  username: "",
  sex: "",
  phoneNum: "",
  email: "",
  birth: new Date(),
  introduction: "",
  location: "",
  userPic: "",
})

const ruleForm2 = reactive({
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
})


// 注册规则
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: "blur", min: 3 }],
  password: [{ required: true, message: '请输入密码', trigger: "blur", min: 3 }],
  sex: [{ required: true, message: "请选择性别", trigger: "change" }],
  phoneNum: [{ message: '请输入正确的手机号', pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|78|9]|18[0|1|23|5|6|7|8|9])\d{8}$/, trigger: ['blur', 'change'] },],
  birth: [{ required: true, type: "date", message: "请选择日期", trigger: "change" }],
  introduction: [{ required: true, message: "请输入介绍", trigger: "blur" }],
  location: [{ required: true, message: "请输入地区", trigger: "change" }],
})

const validateCheck = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("密码不能为空"));
  } else if (value !== ruleForm2.newPassword) {
    callback(new Error("请输入正确密码"));
  } else {
    callback();
  }
};

const validatePassword = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("密码不能为空"));
  } else {
    callback();
  }
};
const rules2 = reactive({

  oldPassword: [{ validator: validatePassword, trigger: "blur", min: 3 }],
  newPassword: [{ validator: validatePassword, trigger: "blur", min: 3 }],
  confirmPassword: [{ validator: validateCheck, trigger: "blur", min: 3 }],
})

const userId = computed(() => store.getters.userId);
const userName = computed(() => store.getters.username);

async function getUserInfo(id) {
  const result = (await HttpManager.getUserOfId(id));
  ruleForm.username = result.data[0].username;
  ruleForm.sex = result.data[0].sex;
  ruleForm.phoneNum = result.data[0].phoneNum;
  ruleForm.email = result.data[0].email;
  ruleForm.birth = result.data[0].birth;
  ruleForm.introduction = result.data[0].introduction;
  ruleForm.location = result.data[0].location;
  ruleForm.userPic = result.data[0].avator;
}

const cancelForm = () => {
  router.back();
}

//修改用户
const saveForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const id = userId.value;
      const username = ruleForm.username;
      const sex = ruleForm.sex;
      const phoneNum = ruleForm.phoneNum;
      const email = ruleForm.email;
      const birth = ruleForm.birth;
      const introduction = ruleForm.introduction;
      const location = ruleForm.location;
      const result = (await HttpManager.updateUserMsg({ id, username, sex, phoneNum, email, birth, introduction, location }));
      ElMessage({
        message: result.message,
        type: result.type,
      });
      if (result.success) {
        store.commit("setUsername", ruleForm.username);
        router.back();
      }
    } else {
      console.log('cancel!', fields)
    }
  })
}


const resetForm = (formE1) => {
  if (!formE1) return
  formE1.resetFields()
}

const confirmForm = async (formE1) => {
  if (!formE1) return
  await formE1.validate(async (valid, fields) => {
    if (valid) {

      const id = userId.value;
      const username = userName.value;
      const oldPassword = ruleForm2.oldPassword;
      const password = ruleForm2.newPassword;

      const result = (await HttpManager.updateUserPassword({ id, username, oldPassword, password }));
      ElMessage({
        message: result.message,
        type: result.type,
      });
    } else {
      ElMessage.warning('请填写完整');
    }
  })
}



onMounted(() => {
  getUserInfo(userId.value);
});

</script>

<style lang="scss" scoped>
.all {
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
  width: 1px;
  /* 设置竖线的宽度 */
  height: 80%;
  /* 设置竖线的高度，使其与父容器等高 */
  background-color: #ccc;
  /* 设置竖线的颜色 */
  position: absolute;
  /* 使用绝对定位，使其脱离文档流并准确放置在两个div之间 */
  left: 50%;
  /* 将竖线水平居中放置在两个div之间 */
  top: 15%;
  transform: translateX(-50%);
  /* 通过 translateX 微调竖线位置，使其精确居中 */
}

.form-left {
  width: 370px;
  margin-left: 150px;
  margin-top: 20px;
}

.form-right {
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

.in2 {
  width: 300px;
}

.cancel {
  background-color: transparent;
  /* 背景透明 */
  cursor: pointer;
  /* 鼠标指针变为手型 */
  font-size: 14px;
  /* 字体大小 */
  padding: 5px 10px;
  /* 内边距 */
  border-radius: 15px;
}

.save {
  border-radius: 15px;
  cursor: pointer;
  /* 鼠标指针变为手型 */
  font-size: 14px;
  /* 字体大小 */
  padding: 5px 10px;
  /* 内边距 */
}

.reset {
  background-color: transparent;
  /* 背景透明 */
  cursor: pointer;
  /* 鼠标指针变为手型 */
  font-size: 14px;
  /* 字体大小 */
  padding: 5px 10px;
  /* 内边距 */
  border-radius: 15px;
}

.confirm {
  border-radius: 15px;
  cursor: pointer;
  /* 鼠标指针变为手型 */
  font-size: 14px;
  /* 字体大小 */
  padding: 5px 10px;
  /* 内边距 */
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
