<template>
  <div class="backgroundcontainer1">
    <div class="backgroundFilter">
      <div class="contentPaper">
        <el-row>
          <el-col :span="24">
            <h2 class="head2">献礼华诞</h2>
          </el-col>
        </el-row>
        <el-row style="margin: 0px 10px 10px 10px;">
          <el-col :span="24">
            <ThemeHref day="30" month="9" year="2024" hyp-ref="https://news.xinmin.cn/2024/09/30/32747907.html"
              title="庆祝中华人民共和国成立75周年招待会在京隆重举行 习近平发表重要讲话"></ThemeHref>
          </el-col>

        </el-row>
        <el-row style="margin: 0px 10px 10px 10px;">
          <el-col :span="24">
            <ThemeHref day="29" month="9" year="2024"
              hyp-ref="https://www.suda.edu.cn/suda_news/sdyw/202409/f907734f-bc09-4821-80db-7f176cbbc725.html"
              title="苏州大学庆祝中华人民共和国成立75周年师生座谈会召开"></ThemeHref>
          </el-col>
        </el-row>
        <el-row style="margin: 0px 10px 10px 10px;">
          <el-col :span="24">
            <ThemeHref day="29" month="9" year="2024"
              hyp-ref="https://www.gov.cn/yaowen/liebiao/202409/content_6973831.htm"
              title="向着科技强国加速迈进——新中国成立75周年科技事业发展综述"></ThemeHref>
          </el-col>
        </el-row>
        <el-row style="margin: 0px 10px 30px 10px;">
          <el-col :span="24">
            <ThemeHref day="26" month="9" year="2024"
              hyp-ref="https://www.gov.cn/yaowen/liebiao/202409/content_6976756.htm" title="新中国成立75周年推进民族团结进步成就综述">
            </ThemeHref>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="24">
            <h2 class="head2">阔步新章</h2>
          </el-col>
        </el-row>
        <a href="http://www.news.cn/politics/20240924/cec4ec424c58434a9075746cb13ee02b/c.html">
          <el-container style="margin: 0px 10px 20px 10px;">
            <el-aside width="150px"><img width="100%"
                :src="require('D:/fstkdev/KenpFrontEndDev/demo/src/assets/manufacturePower.jpg')"
                alt="工业经济跨越式增长，制造强国建设步伐坚定"></el-aside>
            <el-main class="tBWrap">
              <div class="titleBrief">
                <h3 style="margin: 0px 0px 5px 0px;">工业经济跨越式增长，制造强国建设步伐坚定</h3>
                <p>新华社：新中国成立75周年工业发展成就综述</p>
              </div>

            </el-main>
          </el-container>
        </a>

        <a href="http://www.news.cn/20241021/56cdce0e471b43a78c127dcdf03bbd23/c.html">
          <el-container style="margin: 0px 10px 20px 10px;">
            <el-aside width="150px"><img width="100%"
                :src="require('D:/fstkdev/KenpFrontEndDev/demo/src/assets/dam.png')"
                alt="白鹤滩水电站：每5分钟“全身体检”一次背后的大国科技"></el-aside>
            <el-main class="tBWrap">
              <div class="titleBrief">
                <h3 style="margin: 0px 0px 5px 0px;">白鹤滩水电站：每5分钟“全身体检”一次背后的大国科技</h3>
                <p>来源：新华网</p>
              </div>
            </el-main>
          </el-container>
        </a>

        <a href="http://www.news.cn/politics/20240924/cec4ec424c58434a9075746cb13ee02b/c.html">
          <el-container style="margin: 0px 10px 20px 10px;">
            <el-aside width="150px">
              <video autoplay width="100%" controls muted
                src="https://vodpub6.v.news.cn/yqfbzx-original/20241023/202410235ba25aa7633843e196276a50287aca3c_XxjfceC007092_20241023_CBVFN0A001.mp4"></video>
            </el-aside>
            <el-main class="tBWrap">
              <div class="titleBrief">
                <h3 style="margin: 0px 0px 5px 0px;">“中国天眼”：极目星空 竞逐未来</h3>
                <p>来源：新华网</p>
              </div>

            </el-main>
          </el-container>
        </a>
        <a href="http://www.news.cn/politics/20241020/1d80d91a67a74c739c392774dcaec48b/c.html">
          <el-container style="margin: 0px 10px 20px 10px;">
            <el-aside width="150px"><img width="100%"
                :src="require('D:/fstkdev/KenpFrontEndDev/demo/src/assets/火车.png')"
                alt="工业经济跨越式增长，制造强国建设步伐坚定"></el-aside>
            <el-main class="tBWrap">
              <div class="titleBrief">
                <h3 style="margin: 0px 0px 5px 0px;">雪域天路新征途</h3>
                <p>来源：新华网</p>
              </div>

            </el-main>
          </el-container>
        </a>
        <p></p>
      </div>


      <p></p>
    </div>
  </div>
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
.head2 {
  background: linear-gradient(90deg, #F83600 10%, #FFF2B8 69.58%, #f7f2d9 100%);
  padding-left: 3px;
  padding-top: 3px;
  padding-bottom: 4px;
  color: #FFFFFF;
}

.backgroundFilter {
  background: linear-gradient(180deg, #C03E3E 3%, #ffbd8e84 30%, rgba(255, 255, 255, 0));
  background-size: cover;
  background-position: center;
  max-width: 100%;
  height: auto;
  position: relative;
  margin-top: 0px;
  top: 0;
  left: 0;

  z-index: 10;
  padding: 0px 10%;
}

.backgroundcontainer1 {
  background-image: url('D:/fstkdev/KenpFrontEndDev/demo/src/assets/image.png');
  background-size: cover;
  background-position: center;
  max-width: 100%;
  height: auto;
  position: relative;
  margin-top: 0px;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 0px;
}


.contentPaper {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px 5vb 100px 5vb;
  z-index: -1;
}

.tBWrap {
  padding: 0px 20px 10px 20px;
}

.titleBrief {
  max-height: 100px;
  overflow: hidden;
}

.el-row {
  margin-bottom: 10px;

}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background: linear-gradient(90deg, #F83600 0%, #FFF2B8 59.58%, #FFFFFF 100%);
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
