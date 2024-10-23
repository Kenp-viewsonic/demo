<script>

export default {
    name: 'App'
}
</script>
<script setup>
import { ref } from 'vue'

//默认选中的菜单索引
//const selectedIndex = ref("2-2")
const selectedIndex = ref("3")

//选中菜单触发的回调
const selected = (index, indexPath) => {
    console.log("index", index, "indexPath", indexPath)
}


// //用户执行的命令
// const userCommand = (command) => { //点击菜单触发的回调
//     console.log("command:", command)
// }
</script>
<template>
    <!-- <img alt="logo" src="./assets/0185.png" class="background"> -->
    <div class="backgroundcontainer">
        <h1 class="title">智联七十五载，数创强国新篇</h1>
    </div>
    <el-menu mode="horizontal" :default-active="selectedIndex" @select="selected" background-color="#c03e3e"
        text-color="#fff" active-text-color="#ffd04b" style="height: 10%; width: 100%;position: relative;">
        <el-menu-item index="1"><router-link to="/pagez">首页</router-link></el-menu-item>
        <el-sub-menu index="2">
            <template #title>我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>



    
    <router-view></router-view>

</template>

<style scoped>
.backgroundcontainer {
    background-image: url('./assets/0185.png');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: auto;
    position: relative;
    margin:0px;
    top: 0;
    left: 0;
    z-index: -1;
    padding: 80px;
}

.title {
    backdrop-filter: blur(10px) brightness(90%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    text-align: center;
    height: 30%;
    margin:0px;
    
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.67);
    /* 确保内容在图片上方 */
    font-size: 50px;
    padding: 10px;
}
</style>