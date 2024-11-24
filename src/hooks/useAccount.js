// 查看 修改 当前登录的用户信息
import { getUser, setUser, removeUser, clearToken } from '@/utils/storage'

import { ref, watch } from 'vue'


const useAccount = () => {

    const user = ref();
    //初始化
    user.value = getUser();

    //监听user的变化
    watch(user, (newValue, oldValue) => {
        setUser(newValue);
    }, { immediate: true })


    const updateAccount = () => {
        user.value = getUser();
    }

    return {
        user,
        updateAccount
    }

}

export default useAccount