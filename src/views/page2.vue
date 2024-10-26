<template>
    <div class="backgroundcontainer1">
        <div class="backgroundFilter">
            <div class="contentPaper">
                <h1 class="head2">计算机技术与建国75周年史</h1>
                <p class="pragrfContainer">
                    新中国成立75年来，计算机技术作为科技发展的重要组成部分，经历了从无到有、从弱到强的跨越式发展。在早期，中国的计算机技术基础几乎为零，但随着国家对科学技术的重视，计算机科学逐渐成为国家发展的战略重点。
                </p>
                <p class="pragrfContainer">
                    1958年8月1日，中国科学院计算技术研究所研制成功了我国第一台通用数字电子计算机“103机”，这标志着中国计算机技术的诞生。这台计算机虽然以每秒30次的运算速度运行，但它的成功运行代表了中国在计算机领域“从0到1”的突破
                    。</p>
                <p class="pragrfContainer">
                    进入60年代，中国科学院的科研人员连续攻克了电子管、晶体管、集成电路、超大规模集成电路等技术难关，不断研制出性能更强、速度更快、存储容量更大的计算机。1965年，中科院计算所研制成功第一台大型晶体管计算机109乙，之后推出109丙机，该机为两弹试验中发挥了重要作用
                    。</p>
                <p class="pragrfContainer">
                    到了70年代，随着大规模和超大规模集成电路的成功制作并用于计算机硬件生产过程，计算机的体积进一步缩小，性能进一步提高。这一时期的计算机采用了大规模和超大规模集成电路作为基本元件，使得计算机的性能得到了极大的提升，运算速度更快、体积更小、价格更亲民
                    。</p>
                <p class="pragrfContainer">
                    进入21世纪，中国的计算机技术继续快速发展。2001年，中科院计算所研制成功我国第一款通用CPU——“龙芯”芯片。2003年，百万亿次数据处理超级服务器曙光4000L通过国家验收，再一次刷新国产超级服务器的历史纪录
                    。</p>
                <p class="pragrfContainer">
                    党的十八大以来，中国不断健全新型举国体制，加快推进高水平科技自立自强，科技事业取得历史性成就、发生历史性变革。在计算机技术领域，中国已经能够自主研发高性能计算机，如“神威·太湖之光”超级计算机等，这些成就标志着中国在计算机科学领域已经走在了世界前列
                    。</p>
                <p class="pragrfContainer">
                    总体来看，新中国成立75年来，计算机技术的发展是中国科技事业进步的一个缩影，它不仅体现了国家对科技创新的重视，也展示了中国科技工作者的不懈努力和创新精神。随着技术的不断发展，计算机将更加智能化、人性化，更好地服务于人类社会的各个领域。
                </p>
                <h1 class="head2">计算机技术创新历史节点</h1>
                <ul>
                    <li v-for="(node,i) in nodeList" v-bind:key="i"><HistoryNode :year="node.year" :month="node.month" :title="node.title"></HistoryNode></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import HistoryNode from "../components/HistoryNode.vue"

export default ({
    name: 'pageSecond',
    data() {
        return {
            activeIndex: '1',
            nodeList: [
                {
                    year: '1953', month: '1', title: "华罗庚受命在刚成立不久的中国科学院数学所内组建中国第一个计算机科研小组。"
                },
                {
                    year: '1956', month: '1', title: "中国成立中科院计算技术研究所筹备委员会。"
                },
                {
                    year: '1958', month: '8', title: "中国人制造的第一架通用数字电子计算机 103 机正式诞生"
                }, {
                    year: '1959', month: '1', title: "第一台大型通用电子计算机 104 机成功研制，运算速度提升到每秒 1 万次。"
                }, {
                    year: '1960', month: '4', title: "小型通用电子数字计算机 107 机研制成功"
                }, {
                    year: '1964', month: '1', title: "第一台自行设计的大型通用数字电子管计算机 119 机研制成功。"
                }, {
                    year: '1965', month: '1', title: "第一台大型晶体管计算机 109 乙机研制成功"
                }, {
                    year: '1965', month: '1', title: "109 丙机，在我国两弹试制中发挥了重要作用，被用户誉为 “功勋机”"
                }, {
                    year: '1970', month: '1', title: "具有多道程序分时操作系统和标准汇编语言的 441B-Ⅲ 型全晶体管计算机研制成功"
                }, { year: '1973', month: '1', title: "研制成功运算速度每秒 100 万次的大型通用计算机" },
                { year: '1974', month: '1', title: "清华大学等单位联合设计研制成功 DJS-130 小型计算机" },
                { year: '1977', month: '1', title: "我国第一台自行设计研制的采用大规模集成电路的 16 位微型计算机 77 型机诞生。" },
                { year: '1983', month: '12', title: "中国自行研制的第一台每秒运算亿次级计算机 “银河 -Ⅰ” 研制成功" },
                { year: '1985', month: '1', title: "电子工业部计算机管理局研制成功与 IBM PC 机兼容的长城 0520CH 微机" },
                { year: '1992', month: '1', title: "国防科技大学研究出银河 -Ⅱ 通用并行巨型机，峰值速度达每秒 4 亿次浮点运算" },
                { year: '1993', month: '1', title: "中国自行研制的第一台高性能计算机 “曙光一号” 诞生" },
                { year: '1995', month: '1', title: "曙光公司推出了国内第一台具有大规模并行处理机（MPP）结构的并行机曙光 1000" },
                { year: '1997', month: '1', title: "国防科大研制成功银河 -Ⅲ 百亿次并行巨型计算机系统" },
                { year: '1999', month: '1', title: "国家并行计算机工程技术研究中心研制的神威 Ⅰ 计算机通过了国家级验收" },
                { year: '2000', month: '1', title: "曙光公司推出每秒 3000 亿次浮点运算的曙光 3000 超级服务器" },
                { year: "2001", month: "1", title: "中科院计算所研制成功我国第一款通用 CPU——“龙芯” 芯片" },
                { year: "2002", month: "1", title: "曙光公司推出完全自主知识产权的 “龙腾” 服务器" },
                { year: "2003", month: "1", title: "百万亿次数据处理超级服务器曙光 4000L 通过国家验收" },
                { year: "2009", month: "1", title: "中国首台千万亿次计算机 “天河一号” 研制成功" },
                { year: "2012", month: "12", title: "我国第一台采用自主设计的龙芯 3B 八核处理器的计算机研制成功" },
                { year: "2016", month: "6", title: "超级计算机 “神威・太湖之光” 诞生" },
            ]
        };
    },
    components: {
        HistoryNode,
    }
});
</script>

<style scoped>
.pragrfContainer {
    max-width: 80vmin;
    margin-left: auto;
    margin-right: auto;
    font-size: 15px;
    line-height: 1.5;
    text-indent: 30px;
}

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
    background-color: rgba(255, 255, 255, 0.85);
    padding: 30px 5vb 100px 5vb;
    z-index: -1;
}
</style>