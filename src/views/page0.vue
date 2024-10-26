<template>
  <div class="wholepage">
    <p></p>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item><router-link to="/page1">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item>智联七十五载  数创强国新篇</el-breadcrumb-item>
    </el-breadcrumb>
    <p></p>
    <!-- <el-menu mode="horizontal" :default-active="activeIndex" @select="selected" :ellipsis="false" class="nav-bar">

      <el-menu-item index="0"><a href="http://localhost:8081/" style="text-decoration: none;">首页</a></el-menu-item>
      <el-menu-item index="1"><a href="http://localhost:8081/" style="text-decoration: none;">成就巡礼</a></el-menu-item>
      <el-menu-item index="2"><a href="http://localhost:8081/" style="text-decoration: none;">数说75年</a></el-menu-item>
    </el-menu> -->
    <p></p>
    <el-row>
      <el-col :span="24"><h2 class="head2">献礼华诞</h2></el-col>
    </el-row>
    <el-row gutter="20" justify="space-evenly">
      <el-col :span="11">
        <ThemeHref day="30" month="9" year="2024" hyp-ref="https://news.xinmin.cn/2024/09/30/32747907.html"
          title="庆祝中华人民共和国成立75周年招待会在京隆重举行 习近平发表重要讲话"></ThemeHref>
      </el-col>
      <el-col :span="11">
        <ThemeHref day="29" month="9" year="2024" hyp-ref="https://www.suda.edu.cn/suda_news/sdyw/202409/f907734f-bc09-4821-80db-7f176cbbc725.html"
          title="苏州大学庆祝中华人民共和国成立75周年师生座谈会召开"></ThemeHref>
      </el-col>
    </el-row>

    <el-row gutter="20" justify="space-evenly">
      <el-col :span="11">
        <ThemeHref day="26" month="9" year="2024" hyp-ref="https://www.gov.cn/yaowen/liebiao/202409/content_6976756.htm" title="新中国成立75周年推进民族团结进步成就综述">
        </ThemeHref>
      </el-col>
      <el-col :span="11">
        <ThemeHref day="10" month="9" year="2024" hyp-ref="https://www.gov.cn/lianbo/bumen/202409/content_6973376.htm"
          title="新中国成立75周年——回顾历史展望未来"></ThemeHref>
      </el-col>
    </el-row>

    <el-row gutter="20" justify="space-evenly">
      <el-col :span="11">
        <ThemeHref day="21" month="12" year="2024" hyp-ref="http://localhost:8081/"
          title=" 奋进强国路 阔步新征程丨同心奔赴美好前程——新中国成立75周年推进民族团结进步成就综述"></ThemeHref>
      </el-col>
      <el-col :span="11">
        <ThemeHref day="21" month="12" year="2024" hyp-ref="http://localhost:8081/" title="Card 卡片1"></ThemeHref>
      </el-col>
    </el-row>

    <p></p>
  </div>


  <p></p>
  <!-- <ThemeHrefSecond day="21" month="12" year="2024" hyp-ref="https://element-plus.org/zh-CN/component/card.html" title="demo"></ThemeHrefSecond> -->
</template>

<script>
import ThemeHref from '../components/ThemeHref.vue'
// import ThemeHrefSecond from './components/ThemeHrefSecond.vue';
export default {
  data() {
    return {
      
    }
  },
  name: 'PageZ',
  components: {
    ThemeHref,
  }
}
</script>

<style scoped>
.head2{
  background: linear-gradient(90deg, #F83600 0%, #FFF2B8 59.58%, #FFFFFF 100%);
  padding-left: 3px;
  padding-top: 3px;
  padding-bottom: 4px;
  color: #FFFFFF;
}
.wholepage {
  max-width: 100%;
  height: 100%;
  align-self: center;
}

.el-row {
  margin-bottom: 10px;
  
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background: linear-gradient(90deg,#F83600 0%,#FFF2B8 59.58%,#FFFFFF 100%);
}

.header {
  text-align: left;
}

.nav-bar {
  background-color: #ff7070;
  border-bottom: none;
}

.nav-bar .el-menu-item {
  color: #353439;
  
  font-size: 16px;
}

.nav-bar .el-menu-item.is-active {
  color: #ffd04b !important;
  background-color: #b96f33 !important;
  border-color: #ffd04b !important;
}

.nav-bar .el-menu-item:hover {
  color: #fff !important;
  background-color: #8622227b !important;
}

.el-menu--horizontal>.el-menu-item:nth-child(1) {
  margin-right: auto;
}

.menu {
  margin-left: auto;
  margin-right: auto;
}
</style>
