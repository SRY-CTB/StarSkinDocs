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
            <div style="font-size: 16px;">新手教程 / 模组配置</div>
            <div class="toolbar">
              <el-link href="https://star-skin.cn" type="info" :underline="false" style="margin-right: 40px;"><box-icon name='link-external' color='#C7C3C3' style="margin-right: 10px;"></box-icon>官网</el-link>
              <el-link href="https://star-skin.cn" type="info" :underline="false"><box-icon name='link-external' color='#C7C3C3' style="margin-right: 10px;"></box-icon>赞助</el-link>
            </div>
          </el-header>
  
          <el-main class="main" ref="containerRef">
            
            <div style="width: 70%; margin-right: 50px; overflow: auto; height: 570px;" class="main-left" ref="containerRef">
              <div id="part1" class="docs-section">
                <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">CustomSkinLoader</div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    CustomSkinLoader 又叫  万用皮肤补丁 ，缩写 CSL 。利用此Mod我们可以任意加载自己喜欢的披风或者皮肤。
                </div>
              </div>

              <el-divider />

              <div id="part2" class="docs-section">
                <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">下载此 Mod</div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    StarSkin 已经在 <el-tag type="warning" >资源加载</el-tag> 页面（https://star-skin.cn/user/config）提供了下载服务，选择加载器和游戏版本即可下载。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    <el-image :src="img1" />
                </div>
              </div>

              <el-divider />

              <div id="part3" class="docs-section">
                <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">配置模组 <el-tag type="info">模组版本在14.4以上</el-tag></div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    ExtraList 是 CustomSkinLoader 在14.4 以上版本提供的快捷添加皮肤站功能，方便用户将皮肤站加入 CustomSkinLoader 加载列表。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    ExtraList 文件下载 在<el-tag type="warning" >资源加载</el-tag> 页面（https://star-skin.cn/user/config），将文件放入版本文件夹 <el-tag type="warning">/CustomSkinLoader/ExtraList</el-tag>目录下并重启游戏即可。在安装完成后重启游戏并成功载入 CustomSkinLoader（进入任意一个世界/服务器）后 ExtraList 文件会被自动删除，这是正常现象。StarSkin 提供的新添配置此时已被添加至 CustomSkinLoader 加载列表的顶部。
                </div>
                
                    <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    <el-image :src="img2" />
                  </div>
              </div>

              <el-divider />

              <div id="part4" class="docs-section">
                <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">配置模组 <el-tag type="info">模组版本在14.4以下</el-tag></div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                  由于模组前期版本没有 Extralist 快速配置，我们就需要手动配置。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                  在 <el-tag type="warning">.minecraft（游戏目录）/CustomSkinLoader/</el-tag> 目录下分别有名为 <el-tag type="warning">skinurls.txt</el-tag> 和 <el-tag type="warning">capeurls.txt</el-tag> 的两个配置文件。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                  使用记事本或者代码编辑器打开 <el-tag type="warning">skinurls.txt</el-tag> ，将原有的所有内容替换为以下内容，<el-tag type="warning">*</el-tag> 需要替换成角色名。<br>
                  <highlightjs
                      language="Plaintext"
                      code="https://star-skin.cn/skin/*.png"
                  />
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                  使用记事本或者代码编辑器打开 <el-tag type="warning">capeurls.txt</el-tag> ，将原有的所有内容替换为以下内容，<el-tag type="warning">*</el-tag> 需要替换成角色名。<br>
                  <highlightjs
                      language="Plaintext"
                      code="https://star-skin.cn/cape/*.png"
                  />
                </div>

                <el-divider />

                <div id="part5" class="docs-section">
                  <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">配置模组 <el-tag type="info">游戏版本为1.7.10</el-tag></div>
                  <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    游戏版本为 1.7.10 需要 搭配 [CLFCSL]万用皮肤补丁兼容层 使用。
                  </div>
                  <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    CLFCSL 需要 CustomSkinLoader Forge 作为前缀，并且 CustomSkinLoader 版本必须至少为 14.13-SNAPSHOT-203。需要注意的是，CSL 此时并不会显示在游戏内 Mods 列表中。如果启动游戏后在游戏目录文件夹内生成 CustomSkinLoader 文件夹，那么就视为安装成功了。
                  </div>
                  <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    StarSkin暂时不提供 CLFCSL 的下载，请自行到各大资源站下载。
                  </div>

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
                <el-anchor-link href="#part1" title="CustomSkinLoader" />
                <el-anchor-link href="#part2" title="下载此 Mod" />
                <el-anchor-link href="#part3" title="配置模组（模组版本在14.4以上）" />
                <el-anchor-link href="#part4" title="配置模组（模组版本在14.4以下）" />
                <el-anchor-link href="#part5" title="配置模组（游戏版本为1.7.10）" />
              </el-anchor>  
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
    
    <script setup lang="ts">
    import { ref } from 'vue'
    const img1 ='https://img-2.shanrenyi.top/i/2024/08/24/66c9e0b6bf82d.png'
    const img2 ='https://img-2.shanrenyi.top/i/2024/08/24/66c9e50fdda75.png'

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