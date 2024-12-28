<script>
  export default {
    name: 'Home'
  }
</script>

<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="header">
          <div style="display: flex;flex-direction: row;justify-content: space-between;">
              <div style="font-size: 18px;margin-left: 10px;">StarSkin Docs</div>
              <div style="display: flex;flex-direction: row;margin-right: 10px;">
                <div style="font-size: 16px;margin-right: 10px;"><el-link :underline="false" type="info" href="/docs" target="_blank">文档</el-link></div>
                <div style="font-size: 16px;"><el-link :underline="false" type="info" href="https://star-skin.cn" target="_blank">官网</el-link></div>
              </div>
          </div>
      </el-header>
      <el-main class="main">
        <div style="margin-top: 90px;flex-direction: column;align-items: center;display: flex;">
          <div style="font-size: 50px;font-weight: 800;color: #ffb400;">StarSkin Docs 3.0</div>
          <div style="font-size: 16px;margin-top: 18px;">基于 Vue 3 的全新文档，给予全新的体验</div>
        </div>
        <div style="display: flex;flex-direction: row;align-items: flex-start;justify-content: center;;margin-top: 80px;">
          <el-card style="width: 300px;margin-right: 30px;" shadow="always">
            <template #header>
              <div class="card-header">
                <span style="display: flex;align-items: center;"> <box-icon name='brightness' color="white" style="margin-right: 6px;"></box-icon>哪里新？</span>
              </div>
            </template>
            <div>StarSkin Docs 3.0 使用 Vue 3 和 element plus 组件构建，交互体验上会比原生的HTML会好很多。</div>
          </el-card>
          <el-card style="width: 300px;margin-right: 30px;" shadow="always">
            <template #header>
              <div class="card-header">
                <span style="display: flex;align-items: center;"> <box-icon name='brightness' color="white" style="margin-right: 6px;"></box-icon>内容和之前有什么区别？</span>
              </div>
            </template>
            <div>与之前的文档相比，会增加对MOD配置，皮肤站的新功能等更详细的介绍。文档还会归纳一些已经遇到的问题，帮助用户快速解决。</div>
          </el-card>

        </div>
      </el-main>
      
    </el-container>
  </div>
</template>

<style scoped>
body {
font-family: Inter, 'Helvetica Neue', Helvetica, 'PingFang SC',
'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.common-layout {
  height: 100vh; /* Full viewport height */
  width: 100vw;  /* Full viewport width */
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.header {
  background: #242424; /* Background color */
  padding: 14px;
  box-sizing: border-box; /* Include padding in element's total width and height */
  backdrop-filter: blur(24px);
  font-family: Inter, 'Helvetica Neue', Helvetica, 'PingFang SC',
'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}


.main {
  flex: 1; /* Fill remaining space */
  overflow: auto; /* Allow scrolling if content overflows */
  display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    background-image: url(https://img-2.shanrenyi.top/i/2024/08/23/66c83854be089.png);
}

</style>