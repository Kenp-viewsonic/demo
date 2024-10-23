<template>
    <div class="layout">
      <header class="header">专题网站</header>
      <nav class="navbar">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">国庆聚焦</a></li>
          <li><a href="#">主题活动</a></li>
          <li><a href="#">成就献礼</a></li>
        </ul>
      </nav>
      <main class="main-content">
        <section class="content">
          <!-- 主要内容 -->
          <h2>国庆聚焦</h2>
          <div class="hero-content">
            <!-- 这里可以放置图片或视频 -->
            <p>这里是主要内容区域，可以放置文章、图片等内容。</p>
          </div>
        </section>
        <aside class="sidebar">
          <!-- 侧边栏内容 -->
          <h3>侧边栏</h3>
          <ul>
            <li><a href="#">更多</a></li>
            <!-- 其他链接 -->
          </ul>
        </aside>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageFirst',
    // 这里可以添加组件的逻辑，例如数据、方法、生命周期钩子等
  };
  </script>
  
  <style scoped>
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