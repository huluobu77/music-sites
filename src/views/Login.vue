 <template>
    <div class="all" style="margin-top: 20px;">

        <div class="left">
            <h1>Welcome back</h1>

            <div class="form-list">
                
                <el-form :model="ruleForm" :rules="rules">

                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username"  placeholder="用户名" style="height: 50px;"/>
                    </el-form-item>

                    <el-form-item prop="passward">
                        <el-input v-model="ruleForm.passward" placeholder="密码" type="passward" @keyup.enter="onSubmit" style="height: 50px;"/>
                    </el-form-item>

                    <el-form-item>
                        <el-button class="login-rgs" type="text" plain disabled>注册</el-button>
                    </el-form-item>

                    <el-form-item>
                        <el-button class="login-btn" type="primary" @click="onSubmit" style="height: 35px;">登录</el-button>
                    </el-form-item>

                </el-form>

            </div>
            
        </div>

        <div class="right">
            <img class="img1" src="https://img.js.design/assets/img/66ed6f40c6ebda7a2a163c9a.jpg#ea9d4281bf16114767909ba76e10357a">
        </div>

    </div>
</template>

<script lang="ts" setup>
import { reactive} from 'vue'


const ruleForm = reactive({
    username:'',
    passward:'',
})

const rules = reactive({
    username:[
    { required: true, message: 'Please input username', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],

    passward:[
    { required: true, message: 'Please input passward', trigger: 'blur' },
    { min: 6, max: 8, message: 'Length should be 6 to 8', trigger: 'blur' },
    ],

})

const onSubmit = () => {
console.log('submit!')
}
</script>

<style>

/* .all{
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;

    width: 1920px;
    height: 1080px;
} */

*{
    margin: 0px;
    padding: 0px;
}

.form-list{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left {
    width: 50%;
    /* display: inline-block; */
    float: left;
    /* text-align: center; */
}

.right {
    width: 50%;
    /* display: inline-block; */
    float: right;
    opacity: 1;

}

.img1 {
    width: 100%;
    /* height: 600px; */
    
    
}

.login-btn{
    font-size: 15px;
    padding: 10px 140px;
}

.login-rgs{
    margin-left: 280px;
}

.demo-form-inline .el-input {
--el-input-width: 220px;
}

.demo-form-inline .el-select {
--el-select-width: 220px;
}

h1{
    margin-top: 150px;
    margin-bottom: 10px;
    text-align: center;
}

.el-input {
    margin-left: 5px;
}

.el-form {
    margin-top: 30px;
}

</style>