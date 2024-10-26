<template>
  <div class="backgroundcontainer1">
    <div class="backgroundFilter">
      <div class="contentPaper">

        <h1 class="head2"><i>1960-2023国内生产总值</i></h1>
        <div class="ChartContainer">
          <LineChart
            :in_labals="[1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]"
            :in_chart-d="[597.16249, 500.56686, 472.09186, 507.06615, 597.08125, 704.36009, 767.20005, 728.81365, 708.46276, 797.05615, 926.02635, 998.00594, 1136.89308, 1385.43170, 1441.88971, 1634.29531, 1539.39266, 1749.35933, 1495.40753, 1782.80594, 1911.49212, 1958.66382, 2050.89700, 2306.86747, 2599.46511, 3094.88028, 3007.58100, 2729.72975, 3123.53631, 3477.68051, 3608.57913, 3833.73318, 4269.15713, 4447.31282, 5643.21855, 7344.84835, 8637.49315, 9616.01981, 10290.60748, 10940.03875, 12113.31652, 13394.00897, 14705.57655, 16602.80544, 19553.46769, 22859.61150, 27521.18657, 35503.27803, 45943.36786, 51016.91124, 60871.91747, 75515.45703, 85321.85382, 95704.71112, 104756.24944, 110615.72619, 112333.13730, 123104.91334, 138949.07858, 142799.68506, 146877.44163, 178204.59509, 178817.83387, 177947.81986]"
            :in_mean="'国内生产总值(亿美元)'"></LineChart>
        </div>
        <div class="pragrfContainer">
          <h2 class="head2">国民经济快速增长</h2>
          <p class="pragrf"> 1952 年国内生产总值 679 亿元，到 1978 年 3679 亿元；改革开放后加速发展，2020 年突破 100 万亿元大关，2023 年超过 126
            万亿元，按不变价计算，2023
            年比 1952 年增长 223 倍，年均增长 7.9%，其中 1979 - 2023 年年均增长 8.9%，远高于同期世界经济增速。
          </p>
          <h2 class="head2">人均 GDP 显著提高</h2>
          <p class="pragrf"> 1952 年人均国内生产总值 119 元，2019 年人均 GDP 达到 70078 元，首次突破 1 万美元；2023 年达 89358 元，比 1952 年实际增长 89
            倍，年均增长
            6.5%，按年平均汇率折算为 12681 美元，连续 3 年超过 1.2 万美元，已跻身中等偏上收入国家行列。
          </p>
          <h2 class="head2">综合国力跃居世界前列</h2>
          <p class="pragrf"> 新中国成立初期经济总量占世界比重小，至 1978 年为 1.7%，居世界第 10 位。2023 年我国经济总量占世界的比重升至 17% 左右，1979 - 2023
            年对世界经济增长的年均贡献率为 24.8%，居世界首位。我国成为全球制造业第一大国、货物贸易第一大国、商品消费第二大国以及外汇储备第一大国。
          </p>
        </div>
        <h1 class="head2"><i>1949-2023铁路营业里程</i></h1>
        <div class="ChartContainer">
          <LineChart
            :in_labals="[1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]"
            :in_chart-d="[2.18, 2.22, 2.23, 2.29, 2.38, 2.45, 2.56, 2.65, 2.67, 3.02, 3.23, 3.39, 3.45, 3.46, 3.5, 3.69, 3.8, 3.93, 3.86, 3.88, 4.17, 4.37, 4.53, 4.63, 4.66, 4.75, 4.86, 4.91, 5.06, 5.17, 5.3, 5.33, 5.39, 5.33, 5.46, 5.48, 5.52, 5.58, 5.6, 5.62, 5.7, 5.79, 5.78, 5.81, 5.86, 5.9, 6.24, 6.49, 6.6, 6.64, 6.74, 6.87, 7.01, 7.19, 7.3, 7.44, 7.54, 7.71, 7.8, 7.97, 8.55, 9.12, 9.32, 9.76, 10.31, 11.18, 12.1, 12.4, 12.7, 13.17, 13.99, 14.63, 15.07, 15.5, 15.9 ]"
            :in_mean="'铁路营业里程(万公里)'"></LineChart>
        </div>
        <div class="pragrfContainer">
          <h2 class="head2">跨越</h2>
          <p class="pragrf">新中国成立初期，铁路营业里程仅为2.2万公里，且线路破损、设备陈旧。随着国家对基础设施的重视，铁路网络迅速扩张，尤其是进入21世纪后，高铁的快速发展更是成为中国现代化建设的一张亮丽名片。</p><p class="pragrf">
            到2024年，中国铁路营业里程已超过16万公里，其中高铁超过4.6万公里，中国已成为世界上高铁网络最发达的国家之一。这不仅极大地促进了人员和物资的流动，也为经济社会发展提供了强有力的支撑
          </p>
          <h2 class="head2">智能</h2>
          <p class="pragrf"> 中国铁路积极推进智能化技术的应用，如北斗卫星导航、5G、人工智能、大数据等前沿技术与铁路领域的深度融合。这包括智能动车组、智能建造、智能运营平台的研发，以及智能综合调度关键技术攻关，实现更高效、安全的铁路运营。
          </p>
          <p class="pragrf">例如，京张高铁上的复兴号智能动车组已实现时速350公里的自动驾驶功能，而京雄城际铁路则实现了从设计、施工到运营的三维数字化智能管理 
            。</p>
          <h2 class="head2">数字</h2>
          <p class="pragrf"> 中国铁路在数字化方面取得了显著进展，如全面数字化的客运电子发票服务的推广，这使得旅客在办理购票、退票、改签业务后，能够通过铁路12306平台便捷地开具电子发票，提高了效率并减少了纸张消耗，体现了数字化转型的深入 。
          </p><p class="pragrf">国铁集团印发的《数字铁路规划》明确了到2027年，铁路数字化水平将大幅提升，重点领域实现智能化，形成纵向贯通各层级业务场景，横向联通各专业系统的推进格局 。
          </p>
          <h2 class="head2">创新</h2>
          <p class="pragrf">中国铁路的发展历程中，创新是贯穿始终的主题。从引进技术到自主研发，中国铁路在列车控制系统、轨道技术、高速动车组等方面取得了一系列创新成果。例如，CR450动车组的研发将填补时速400公里高铁技术标准体系的空白，进一步提升铁路科技自立自强能力 
            。
          </p><p class="pragrf">
            国家铁路局发布的《“十四五”铁路科技创新规划》中提到，到2025年，智能铁路技术将全面突破，安全保障技术明显提升，绿色低碳技术广泛应用，创新体系更加完善，总体技术水平世界领先 
。

          </p>
        </div>
      </div>
    </div> 


  </div>
</template>

<script>
import LineChart from '../components/Charts.vue';
export default {
  name: 'PageFirst',
  components: {
    LineChart,
  }
};
</script>

<style scoped>
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
  padding: 30px 5vb;
}

.GDPhead {
  text-align: center;

}

.ChartContainer {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.pragrfContainer {
  max-width: 80vmin;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  line-height: 1.5;
}

.head2 {
  background: linear-gradient(90deg, #F83600 10%, #FFF2B8 69.58%, #f7f2d9 100%);
  padding-left: 3px;
  padding-top: 3px;
  padding-bottom: 4px;
  color: #FFFFFF;
}

.pragrf {
  max-width: 100%;
  margin-bottom: 20px;
  text-indent: 30px;
  z-index: 2;
}

.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "navbar navbar"
    "content sidebar";
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr 300px;
  height: 100vh;
  margin: 0;
}

.header {
  grid-area: header;
  background-color: #ff0000;
  color: white;
  text-align: center;
  padding: 20px;
}

.navbar {
  grid-area: navbar;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.main-content {
  grid-area: content;
  display: grid;
  grid-template-areas: "content sidebar";
  grid-template-columns: 3fr 1fr;
}

.content {
  grid-area: content;
  padding: 20px;
}

.sidebar {
  grid-area: sidebar;
  background-color: #f1f1f1;
  padding: 20px;
}
</style>