<template>
    <div class="common_layout">
    <el-container>
      <el-header style="background-color: azure;text-align: center;">Header</el-header>
      <el-container>
        <el-aside width="520px" style="background-color: aqua;width: auto;">
            <img :src="require('D:/fstkdev/KenpFrontEndDev/demo/src/assets/0185.png')" alt="pic" sizes="">
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default ({
    name: 'pageSecond',
    data() {
        return {
            activeIndex: '1'
        };
    }
});
</script>

<style scoped>
.common_layout{
    margin-right: auto;
    margin-left: auto;
    width: 50%;
}
.hero {
    position: relative;
    text-align: center;
    color: white;
}

.hero-content {
    height: 300px;
    background-color: #ff7f50;
}

aside {
    float: right;
    width: 20%;
    background-color: #f1f1f1;
    padding: 20px;
}
</style>