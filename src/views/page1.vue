<template>
  <div class="backgroundcontainer1">
    <div class="contentPaper">
      
      <h1 class="GDPhead">1960-2023国内生产总值</h1>
      <div class="ChartContainer">
        <LineChart
          :in_labals="[1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]"
          :in_chart-d="[597.16249 , 500.56686 , 472.09186 , 507.06615 , 597.08125 , 704.36009 , 767.20005 , 728.81365 , 708.46276 , 797.05615 , 926.02635 , 998.00594 , 1136.89308 , 1385.43170 , 1441.88971 , 1634.29531 , 1539.39266 , 1749.35933 , 1495.40753 , 1782.80594 , 1911.49212 , 1958.66382 , 2050.89700 , 2306.86747 , 2599.46511 , 3094.88028 , 3007.58100 , 2729.72975 , 3123.53631 , 3477.68051 , 3608.57913 , 3833.73318 , 4269.15713 , 4447.31282 , 5643.21855 , 7344.84835 , 8637.49315 , 9616.01981 , 10290.60748 , 10940.03875 , 12113.31652 , 13394.00897 , 14705.57655 , 16602.80544 , 19553.46769 , 22859.61150 , 27521.18657 , 35503.27803 , 45943.36786 , 51016.91124 , 60871.91747 , 75515.45703 , 85321.85382 , 95704.71112 , 104756.24944 , 110615.72619 , 112333.13730 , 123104.91334 , 138949.07858 , 142799.68506 , 146877.44163 , 178204.59509 , 178817.83387 , 177947.81986]"
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
.backgroundcontainer1 {
  background-image: url('D:/fstkdev/KenpFrontEndDev/demo/src/assets/image.png');
  background-size: cover;
  background-position: center;
  max-width: 100%;
  height: auto;
  position: relative;
  margin-top: -30px;
  top: 0;
  left: 0;
  z-index: -1;
  padding: 0px 10%;
}
.contentPaper{
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 30px 10px;
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
}

.head2 {
  background: linear-gradient(90deg, #F83600 0%, #FFF2B8 59.58%, #FFFFFF 100%);
  padding-left: 3px;
  padding-top: 3px;
  padding-bottom: 4px;
  color: #FFFFFF;
}

.pragrf {
  max-width: 100%;
  margin-bottom: 20px;
  text-indent: 30px;
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