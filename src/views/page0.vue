<template>
  <div class="wholepage">
    <p></p>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item><a href="#">首页</a></el-breadcrumb-item>
        <el-breadcrumb-item>邓瑞编程</el-breadcrumb-item>
        <el-breadcrumb-item>dengruicode.com</el-breadcrumb-item>
    </el-breadcrumb>
    <p></p>
    <h2 class="header">智联七十五载，数创强国新篇</h2>
    <el-menu mode="horizontal" :default-active="activeIndex" @select="selected" :ellipsis="false" class="nav-bar">

      <el-menu-item index="0"><a href="http://localhost:8081/" style="text-decoration: none;">首页</a></el-menu-item>
      <el-menu-item index="1"><a href="http://localhost:8081/" style="text-decoration: none;">成就巡礼</a></el-menu-item>
      <el-menu-item index="2"><a href="http://localhost:8081/" style="text-decoration: none;">数说75年</a></el-menu-item>
    </el-menu>
    <!-- <hellodemo title="KonGo狼" :imgsrc="img1"></hellodemo>
    <hellodemo title="misakaNetwork" :imgsrc="img2"></hellodemo>
    <hellodemo title="另一张图" :imgsrc="img3"></hellodemo> -->
    <p></p>
    <el-row gutter="20">
      <el-col :span="12">
        <ThemeHref day="21" month="12" year="2024" hyp-ref="http://localhost:8081/"
          title="庆祝中华人民共和国成立75周年招待会在京隆重举行 习近平发表重要讲话"></ThemeHref>
      </el-col>
      <el-col :span="12">
        <ThemeHref day="21" month="12" year="2024" hyp-ref="http://localhost:8081/"
          title="【向祖国致敬】我校统一战线成员开展红色观影活动庆祝新中国成立75周年"></ThemeHref>
      </el-col>
    </el-row>

    <el-row gutter="20">
      <el-col :span="12">
        <ThemeHref day="21" month="12" year="2024" hyp-ref="http://localhost:8081/" title="新中国成立75周年推进民族团结进步成就综述">
        </ThemeHref>
      </el-col>
      <el-col :span="12">
        <ThemeHref day="21" month="12" year="2024" hyp-ref="http://localhost:8081/"
          title="新中国成立75周年——回顾历史展望未来新中国成立75年来取得辉煌成就但仍面临国内外挑战"></ThemeHref>
      </el-col>
    </el-row>

    <el-row gutter="20">
      <el-col :span="12">
        <ThemeHref day="21" month="12" year="2024" hyp-ref="http://localhost:8081/"
          title=" 奋进强国路 阔步新征程丨同心奔赴美好前程——新中国成立75周年推进民族团结进步成就综述"></ThemeHref>
      </el-col>
      <el-col :span="12">
        <ThemeHref day="21" month="12" year="2024" hyp-ref="http://localhost:8081/" title="Card 卡片1"></ThemeHref>
      </el-col>
    </el-row>

    <p></p>
  </div>


  <p></p>
  <!-- <ThemeHrefSecond day="21" month="12" year="2024" hyp-ref="https://element-plus.org/zh-CN/component/card.html" title="demo"></ThemeHrefSecond> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import hellodemo from './components/helloDemo.vue'
import ThemeHref from '../components/ThemeHref.vue'
// import ThemeHrefSecond from './components/ThemeHrefSecond.vue';
export default {
  data() {
    return {
      img1: "1(85).png",
      img2: "1(92).png",
      img3: "1(87).jpg"
    }
  },
  name: 'PageZ',
  components: {
    // hellodemo,
    ThemeHref,
    //   ThemeHrefSecond,
  }
}
</script>

<style>
.wholepage {
  width: 50%;
  height: 100%;
  align-self: center;
}

.el-row {
  margin-bottom: 10px;
}

.header {
  text-align: left;
}

.nav-bar {
  background-color: #c03e3e;
  border-bottom: none;
}

.nav-bar .el-menu-item {
  color: #fff;
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
