<template>
    <!-- <a :href="hypRef" id="Wrapper">
        
        <el-card style="max-width: 50%" shadow="hover" id="item">
            

                <template #header>
                    <div id="headerContent">
                    {{ day }} / {{ month }} / {{ year }}</div>
                </template>

<el-card style="width: 80%" shadow="never">
    <div class="Title">{{ title }}</div>
</el-card>


</el-card>
</a> -->
    <a :href="hypRef" id="Wrapper">
        <div class="card">
            <div class="date">
                <span class="day">{{day}}</span>
                <span class="month">{{ year }}.{{month}}</span>
            </div>

            <div class="content" >
                <div class="title" >{{title}}</div>
            </div>
        </div>
    </a>

</template>

<script>
export default {
    name: 'ThemeHref',
    props: {
        day: String,
        month: String,
        year: String,
        hypRef: String,
        title: String,
    }
}
</script>
<!-- ### -->
<style>
.card {
    display: flex;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    overflow: hidden;
    font-family: Arial, sans-serif;
}

.date {
    background-color: #c03e3e;
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    max-width: 80px;
}

.day {
    font-size: 24px;
    font-weight: bold;
}

.month {
    margin-top: 5px;
}

.content {
    padding: 10px;
    flex-grow: 1;
    max-width: 80%;
}

.title {
    max-width: 80%-20px;
    font-size: 16px;
    color: #333;
    white-space: nowrap; /* 确保文本在一行内显示 */
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
}
</style>