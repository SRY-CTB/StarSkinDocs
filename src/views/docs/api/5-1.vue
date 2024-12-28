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
            <div style="font-size: 16px;">StarSkin API</div>
            <div class="toolbar">
              <el-link href="https://star-skin.cn" type="info" :underline="false" style="margin-right: 40px;"><box-icon name='link-external' color='#C7C3C3' style="margin-right: 10px;"></box-icon>官网</el-link>
              <el-link href="https://star-skin.cn" type="info" :underline="false"><box-icon name='link-external' color='#C7C3C3' style="margin-right: 10px;"></box-icon>赞助</el-link>
            </div>
          </el-header>
  
          <el-main class="main" ref="containerRef">
            
            <div style="width: 70%; margin-right: 50px; overflow: auto; height: 570px;" class="main-left" ref="containerRef">
              <div id="part1" class="docs-section">
                <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">StarSkin API</div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    StarSkin API 主要用于更加便捷的开发网页，方便调用各种功能等等。StarSkin 使用 Blessing Skin Server 6.0.2 正式版，可以调用Blessing Skin Server API，以及 StarSkin 定制的一些 API。
                </div>
              </div>

              <el-divider />

              <div id="part2" class="docs-section">
                <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">Blessing Skin Server API</div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    这是 Blessing Skin Server 本身带有的 API ，自行阅读 <el-link type="warning" href="https://blessing.netlify.app/api/">Blessing Skin API 文档</el-link>
                </div>
              </div>

              <el-divider />

                <div id="part3" class="docs-section">
                    <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">StarSkin 特有的 API</div>
                    <div style="margin-top: 20px;font-size: 17px;display: flex;align-items: center;" class="docs-contect">
                        <box-icon name='polygon' color='#959292' style="margin-right: 10px;"></box-icon> 获取公告栏内容
                    </div>
                    <div style="margin-top: 10px;font-size: 17px;" class="docs-contect">
                      <highlightjs
                            language="Plaintext"
                            code="GET  https://api.star-skin.cn/info/"
                        />
                    </div>
                    <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                      <el-descriptions border :column="1">
                        <el-descriptions-item label="announcement">公告内容，含有HTML标签</el-descriptions-item>
                      </el-descriptions>
                    </div>
                    <div style="margin-top: 20px;font-size: 17px;    display: flex;align-items: center;" class="docs-contect">
                        <box-icon name='polygon' color='#959292' style="margin-right: 10px;"></box-icon> 获取用户注册数量以及材质总数量
                    </div>
                    <div style="margin-top: 10px;font-size: 17px;" class="docs-contect">
                      <highlightjs
                            language="Plaintext"
                            code="GET  https://api.star-skin.cn/count/"
                        />
                    </div>
                    <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                      <el-descriptions border :column="1">
                        <el-descriptions-item label="user_count">用户注册数量</el-descriptions-item>
                        <el-descriptions-item label="texture_count">材质总数量</el-descriptions-item>
                      </el-descriptions>
                    </div>
                </div>
            </div>
            <div style="width: 30%;border-left: 1px solid var(--el-border-color);">
              <el-anchor
                :container="containerRef"
                direction="vertical"
                type="default"
                :offset="30"
                @click="handleClick"
              >
                <el-anchor-link href="#part1" title="StarSkin API" />
                <el-anchor-link href="#part2" title="Blessing Skin Server API" />
                <el-anchor-link href="#part3" title="StarSkin 特有的 API" />
              </el-anchor>  
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
    
    <script setup lang="ts">
    import { ref } from 'vue'
    
    const containerRef = ref<HTMLElement | null>(null)
    
    const handleClick = (e: MouseEvent) => {
      e.preventDefault()
    }
    </script>

    <script lang="ts">
    import 'highlight.js/lib/common';
    import hljsVuePlugin from "@highlightjs/vue-plugin";

    export default {
        components: {
            highlightjs: hljsVuePlugin.component
        }
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