<script>

export default {
    name: 'App'
}
</script>
<script setup>
import { ref } from 'vue'

//默认选中的菜单索引
//const selectedIndex = ref("2-2")
const selectedIndex = ref("1")

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
        <div class="titleContainer">
            <h1 class="title">
                <img class="titlePic" src="./assets/Connect75.png" alt="智联75载"> 
                <img class="titlePic"  src="./assets/composeNewPower.png" alt="数创强国新篇">
            </h1>
        </div>
    </div>

    <el-menu mode="horizontal" :default-active="selectedIndex" @select="selected" background-color="#c03e3e"
        text-color="#fff" active-text-color="#ffd04b" style=" width: 100%;position: relative;margin-bottom: 0px;">
        <el-menu-item index="1">
            <router-link to="/pagez" style="text-decoration: none;width: 100%;text-align: center;">首页</router-link></el-menu-item>
        <el-menu-item index="2" >
            <router-link to="/page1" style="text-align: center;text-decoration: none;width: 100%;">数说华诞</router-link></el-menu-item>
        <el-menu-item index="3" >
            <router-link to="/page2" style="text-decoration: none;width: 100%;">数创强国</router-link></el-menu-item>
    </el-menu>




    <router-view></router-view>

</template>

<style scoped>
.backgroundcontainer {
    background-image: url('./assets/redFlag.png');
    background-size: cover;
    background-position: center;
    max-width: 100%;
    height: auto;
    position: relative;
    margin: 0px;
    top: 0;
    left: 0;
    z-index: -1;
    padding: 10% 5%;
}
.titlePic{
    width: 100%;
}

.title {
    backdrop-filter: blur(10px) brightness(90%);
    background-color: rgba(255, 200, 200, 0.3);
    border-radius: 10px;
    text-align: left;
    margin: 0px;
    padding: 20px 20px 50px 20px;
    height: inherit;
    word-wrap: break-word;
    /* word-break: break-all; */
    white-space: normal;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.67);
    /* 确保内容在图片上方 */
    font-size: 7vmin;
    padding: 1vmin 20%;
}

.title2 {
    backdrop-filter: blur(10px) brightness(90%);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    text-align: right;
    margin: 0px;
    height: inherit;
    word-wrap: break-word;
    /* word-break: break-all; */
    white-space: normal;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.67);
    /* 确保内容在图片上方 */
    font-size: 7vmin;
    padding: 10%;
}
</style>