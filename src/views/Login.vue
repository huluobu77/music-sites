<<template>
    <div class="login-container">
        
        <div class="left">
            <h1>Welcome back</h1>
            <el-form  label-width="80px" style="border:1px solid #C4E1C5;padding:20px;">
            <el-form-item >
                <el-input placeholder="username"></el-input>
                <el-input placeholder="passward"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login-rgs" type="text" plain disabled>注册</el-button>
            </el-form-item>
            <el-form-item>
                <el-button class="login-btn" type="primary">登录</el-button>
            </el-form-item>
        </el-form>
        </div>

        <div class="right">
            
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.login-btn{
    font-size: 15px;
    padding: 10px 150px;
}


</style>

<!-- 


 <template>
    <div class="all">

        <div class="left">
            <h1>Welcome back</h1>

            <el-form :model="ruleForm" :rules="rules">

                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username"  placeholder="username" />
                </el-form-item>

                <el-form-item prop="passward">
                    <el-input v-model="ruleForm.passward" placeholder="passward" type="passward" @keyup.enter="onSubmit"/>
                </el-form-item>

                <el-form-item>
                    <el-button class="login-rgs" type="text" plain disabled>注册</el-button>
                </el-form-item>

                <el-form-item>
                    <el-button class="login-btn" type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>

            </el-form>
            
        </div>

        <div class="right">
            <img src="/src/assets/images/bg.png" style="width: 800px;">
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

.all{
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;

    width: 1920px;
    height: 1080px;
}

.left{

  width: 50%;

}

.right{
    width: 50%;
}

.login-btn{
    font-size: 15px;
    padding: 10px 140px;
}

.login-rgs{
    margin-left: 270px;
}

.demo-form-inline .el-input {
--el-input-width: 220px;
}

.demo-form-inline .el-select {
--el-select-width: 220px;
}

h1{
    text-align: center;
    margin-top: 200px;
}
.el-input{
    width: 300px;
}

.el-form{
    margin-left: 330px;
}
</style> -->