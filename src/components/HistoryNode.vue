<template>

    <a :href="hypRef" id="Wrapper">
        <div class="card">
            <div class="date">
                <span class="day">{{ year }}</span>
                <div class="month">{{ month }}月</div>
            </div>

            <div class="content" >
                <div class="title" >{{title}}</div>
            </div>
        </div>
    </a>

</template>

<script>
export default {
    name: 'HistoryNode',
    props: {
        month: String,
        year: String,
        title: String
    }
}
</script>
<!-- ### -->
<style scoped>
.card {
    display: flex;
    border: 1.5px solid #dfe2e9;
    border-radius: 8px;
    overflow: hidden;
    font-family: Arial, sans-serif;
    margin: 0px;
}

.date {
    background: linear-gradient(90deg,#F83600 0%,#F9D423 100%); 
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    width: 60px;
}

.day {
    font-size: 24px;
    font-weight: bold;
}

.month {
    margin-top: 5px;
}

.content {
    flex-grow: 1;
    max-width: 80%;
    height: 70px;
    position: relative;
}

.title {
    position: absolute;
    top:0;
        left:0;
        right:0;
        bottom:0;
        margin: auto;
        padding: 10px;
    font-size: 18px;
    line-height: 1.25;
    color: #333;
    white-space: break-spaces; /* 确保文本在一行内显示 */
  overflow: hidden; /* 隐藏溢出的文本 */
  text-overflow: ellipsis; /* 使用省略号表示溢出的文本 */
}

#item {
    padding: 0px 0px 0px 0px;
}

#headerContent {
    background-color: red;
    max-height: 30%;
}

#item {
    text-decoration: none;
}

#Wrapper {
    text-decoration: none;
    margin: 0px;
}
</style>