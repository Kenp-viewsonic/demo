<template>

    <a :href="hypRef" id="Wrapper">
        <div class="card">
            <div class="date">
                <div class="day">{{day}}</div>
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
<style scoped>
.card {
    display: flex;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    overflow: hidden;
    font-family: Arial, sans-serif;
    margin: 0px;
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
    flex-grow: 1;
    max-width: 80%;
    height: 64px;
}

.title {
    margin-top: 20px;
    margin-left: 5px;
    margin-bottom: auto;
    max-width: 80%;
    font-size: 18px;
    font-weight: bold;
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
    margin: 0px;
}
</style>