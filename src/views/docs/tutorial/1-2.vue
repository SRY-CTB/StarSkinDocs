<template>
    <div class="common-layout">
      <el-container class="container">
          <el-aside width="300px">
          <div class="aside-title"><img style="    height: 40px;margin-right: 8px;" src="https://img-2.shanrenyi.top/image-1/2024/12/28/67701debc3863.ico">StarSkinDocs</div>
          <el-scrollbar>
            <el-menu router>
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><message /></el-icon>条款与声明
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/docs/section/0-1">服务条款</el-menu-item>
                  <el-menu-item index="/docs/section/0-2">隐私声明</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
  
              <el-sub-menu index="2">
                <template #title>
                  <el-icon><message /></el-icon>新手教程
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/docs/tutorial/1-1">注册与登录</el-menu-item>
                  <el-menu-item index="/docs/tutorial/1-2">角色配置</el-menu-item>
                  <el-menu-item index="/docs/tutorial/1-3">模组配置</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
  
              <el-sub-menu index="3">
                <template #title>
                  <el-icon><message /></el-icon>Yggdrasil 外置登录
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/docs/yggdrasi/3-1">客户端配置</el-menu-item>
                  <el-menu-item index="/docs/yggdrasi/3-2">服务端配置</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
  
              <el-sub-menu index="4">
                <template #title>
                  <el-icon><message /></el-icon>新增服务
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/docs/server/4-1">新增服务</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
  
              <el-sub-menu index="5">
                <template #title>
                  <el-icon><message /></el-icon>StarSkin API
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/docs/api/5-1">StarSkin API</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
  
            </el-menu>
          </el-scrollbar>
        </el-aside>
  
        <el-container>
          <el-header style="text-align: right; font-size: 14px;border-bottom: 1px solid var(--el-border-color);height: 70px;display: flex;    flex-direction: row;align-items: center;justify-content: space-between;">
            <div style="font-size: 16px;">新手教程 / 角色配置</div>
            <div class="toolbar">
              <el-link href="https://star-skin.cn" type="info" :underline="false" style="margin-right: 40px;"><box-icon name='link-external' color='#C7C3C3' style="margin-right: 10px;"></box-icon>官网</el-link>
              <el-link href="https://star-skin.cn" type="info" :underline="false"><box-icon name='link-external' color='#C7C3C3' style="margin-right: 10px;"></box-icon>赞助</el-link>
            </div>
          </el-header>
  
          <el-main class="main" ref="containerRef">
            
            <div style="width: 70%; margin-right: 50px; overflow: auto; height: 570px;" class="main-left" ref="containerRef">
              <div id="part1" class="docs-section">
                <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">创建角色</div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    在注册帐号之后，StarSkin 会强制让您创建一个角色。如果您还想创建新的角色，在 <el-tag type="warning">角色管理</el-tag> 页面（https://star-skin.cn/user/player），点击 <el-tag type="warning">添加新的角色</el-tag>，输入角色名即可。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    <vue3VideoPlay v-for="(video, index) in videosGroup1" :key="index" v-bind="video"/>
                </div>
              </div>
              
              <div id="part2" class="docs-section">
                <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">配置角色材质</div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    在 <el-tag type="warning">皮肤库</el-tag> （https://star-skin.cn/skinlib）中选择你想要的材质进入材质详情页面。在 <el-tag type="warning">材质预览</el-tag> 卡片下方点击 <el-tag type="warning">添加至衣柜</el-tag> 按钮，给材质命名后即可加入 <el-tag type="warning">我的衣柜</el-tag>。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    <vue3VideoPlay v-for="(video, index) in videosGroup2" :key="index" v-bind="video"/>
                </div>

                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    在 <el-tag type="warning">我的衣柜</el-tag> （https://star-skin.cn/user/closet）页面中选择点击你要的材质，会应用到右侧的模型，点击 <el-tag type="warning">材质预览</el-tag> 卡片下方的 <el-tag type="warning">使用</el-tag> ，选择应用到的角色即可。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    <vue3VideoPlay v-for="(video, index) in videosGroup3" :key="index" v-bind="video"/>
                </div>
              </div>

              <el-divider />


  

  
            </div>
            <div style="width: 30%;border-left: 1px solid var(--el-border-color);">
              <el-anchor
                :container="containerRef"
                direction="vertical"
                type="default"
                :offset="30"
                @click="handleClick"
              >
                <el-anchor-link href="#part1" title="创建角色" />
                <el-anchor-link href="#part2" title="配置角色材质" />
              </el-anchor>  
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
    
    <script setup lang="ts">
    import { ref } from 'vue'
    import { reactive } from 'vue';
    
    
    const containerRef = ref<HTMLElement | null>(null)
    
    const handleClick = (e: MouseEvent) => {
      e.preventDefault()
    }


// 基础配置
const baseOptions = {
  color: "rgb(255, 180, 0)",
  title: '',
  muted: false,
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"],
  autoPlay: false,
  loop: false,
  mirror: false,
  ligthOff: false,
  volume: 0.3,
  control: true,
  controlBtns: ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen']
};

// 视频组1
const videosGroup1 = reactive([
  {  width: '100%',
  height: 'auto',
    src: "https://ddns.home.shanrenyi.top:446/f/wKPty/QQ2024824-11550-HD.mp4",
    title: 'Video 1 - Group 1',
    options: { ...baseOptions, title: 'Video 1 - Group 1' },
  }
]);

// 视频组2
const videosGroup2 = reactive([
  {  width: '100%',
  height: 'auto',
    src: "https://ddns.home.shanrenyi.top:446/f/x2Zux/freecompress-QQ2024824-133254-HD.mp4",
    title: 'Video 1 - Group 2',
    options: { ...baseOptions, title: 'Video 1 - Group 2' }
  }
]);

const videosGroup3 = reactive([
  {  width: '100%',
  height: 'auto',
    src: "https://ddns.home.shanrenyi.top:446/f/y9QFL/freecompress-dddsdsds.mp4",
    title: 'Video 1 - Group 2',
    options: { ...baseOptions, title: 'Video 1 - Group 2' }
  }
]);
    </script>
    
    <style scoped>
    .el-anchor__link.is-active {
      color: rgb(255, 180, 0) !important;
    }
    .docs-title{
      margin-top: 30px;font-size: 30px;font-weight: 800;
    }
    .docs-contect{
      margin-top: 10px;font-size: 14px;margin-left: 20px;
    }
    .el-anchor__marker {
      background-color: rgb(255, 180, 0) !important;
    }
    .el-aside{
      height: 100vh;
      overflow: hidden;
    }
    .aside-title{
      height: 70px;
      border-bottom: 1px solid var(--el-border-color);
      border-right: 1px solid var(--el-border-color);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 22px;
    }
    a:hover {
      border-radius: 4px !important;
      padding: 4px !important;
      background-color: hsl(36deg 100% 37% / 20%) !important;
    }
    .el-sub-menu__title:hover {
      background-color: hsl(36deg 100% 37% / 20%) !important;
    }
    .el-menu-item:hover {
      background-color: hsl(36deg 100% 37% / 20%) !important;
    }
    :root {
      --el-sub-menu__title: hsl(36deg 100% 37% / 20%) !important;
    }
    .el-menu-item.is-active {
      color: hsl(36, 100%, 37%) !important;
    }
    .main{
      padding-top: 40px;
      padding-left: 90px;
      font-family: Inter, 'Helvetica Neue', Helvetica, 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
    @media (hover: hover) {
      a:hover {
        background-color: hsla(0, 0%, 100%, 0) !important;
      }
    }
    .main-left::-webkit-scrollbar {
      display: none;
    }
    </style>