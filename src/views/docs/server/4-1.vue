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
            <div style="font-size: 16px;">新增服务</div>
            <div class="toolbar">
              <el-link href="https://star-skin.cn" type="info" :underline="false" style="margin-right: 40px;"><box-icon name='link-external' color='#C7C3C3' style="margin-right: 10px;"></box-icon>官网</el-link>
              <el-link href="https://star-skin.cn" type="info" :underline="false"><box-icon name='link-external' color='#C7C3C3' style="margin-right: 10px;"></box-icon>赞助</el-link>
            </div>
          </el-header>
  
          <el-main class="main" ref="containerRef">
            
            <div style="width: 70%; margin-right: 50px; overflow: auto; height: 570px;" class="main-left" ref="containerRef">
              <div id="part1" class="docs-section">
                <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">优化建议收集</div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    位于 <el-tag type="warning" >工单</el-tag>页面（https://star-skin.cn/user/mail），我们会根据用户提出的建议逐步完善 StarSkin 的不足之处。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    <el-image :src="img1" />
                </div>
              </div>

              <el-divider />

              <div id="part2" class="docs-section">
                <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">资源下载</div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    位于 <el-tag type="warning" >资源下载</el-tag>页面（https://star-skin.cn/user/download），主要解决部分资源的下载问题。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    后续会考虑单独整理为一个网站。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    <el-image :src="img2" />
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
                <el-anchor-link href="#part1" title="优化建议收集" />
                <el-anchor-link href="#part2" title="资源下载" />
              </el-anchor>  
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
    
    <script setup lang="ts">
    import { ref } from 'vue'
    const img1 ='https://img-2.shanrenyi.top/i/2024/08/27/66cdb78d2692b.png'
    const img2 ='https://img-2.shanrenyi.top/i/2024/08/27/66cdb9996480c.png'

    const containerRef = ref<HTMLElement | null>(null)
    
    const handleClick = (e: MouseEvent) => {
      e.preventDefault()
    }
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