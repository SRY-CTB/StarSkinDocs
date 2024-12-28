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
            <div style="font-size: 16px;">新手教程 / 注册</div>
            <div class="toolbar">
              <el-link href="https://star-skin.cn" type="info" :underline="false" style="margin-right: 40px;"><box-icon name='link-external' color='#C7C3C3' style="margin-right: 10px;"></box-icon>官网</el-link>
              <el-link href="https://star-skin.cn" type="info" :underline="false"><box-icon name='link-external' color='#C7C3C3' style="margin-right: 10px;"></box-icon>赞助</el-link>
            </div>
          </el-header>
  
          <el-main class="main" ref="containerRef">
            
            <div style="width: 70%; margin-right: 50px; overflow: auto; height: 570px;" class="main-left" ref="containerRef">
              <div id="part1" class="docs-section">
                <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">注册</div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    在 <el-tag type="warning">注册</el-tag> 页面（https://star-skin.cn/auth/register），可以看到右侧写好的注意事项。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    邮箱注册：请务必使用可以正常使用的邮箱，例如126，163，qq等等。如果是自建邮箱，请确保您的邮箱可以正常接收邮件。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    第三方登录：StarSkin 提供Github和Microsoft两种方式，如果您正好注册其账号，可以快速登录StarSkin。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    <el-alert title="理解误区" type="warning" effect="dark" :closable="false" description="使用 Microsoft 登录 ≠ 正版登录，StarSkin 不会读取您正版账号的材质以及UUID，所谓的正版登录只说是登录您的 Microsoft 账号。" />
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    <el-alert title="注意" type="error" effect="dark" :closable="false" description="在使用 Microsoft 和 Github 登录后，StarSkin 不会自动储存您的密码！" />
                </div>
              </div>

              <el-divider />

              <div id="part2" class="docs-section">
                <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">登录</div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    在 <el-tag type="warning">登录</el-tag> 页面（https://star-skin.cn/auth/login），可以看到右侧写好的注意事项。
                </div>

                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    邮箱注册的用户：直接输入邮箱密码即可。如果忘了密码点击 <el-tag type="warning">忘记密码</el-tag> 进行找回。如果出现邮箱失效了，无法接受到邮件等情况，请联系我们手动修改密码，联系方式见 <el-tag type="warning">文档首页</el-tag> （https://dcso.star-skin.cn/docs）
                </div>

                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    第三方登录的用户：直接点击 <el-tag type="warning">Microsoft</el-tag> 或者 <el-tag type="warning">Github</el-tag> 登陆即可。
                </div>

              </div>

              <el-divider />

              <div id="part3" class="docs-section">
                <div style="font-size: 30px;font-weight: 800;    color: rgb(255, 180, 0);" class="docs-title">您可能会遇到的问题</div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    1. 使用第三方登录无法登录启动器？<br>
                    答：使用第三方登录的用户，在 <el-tag type="warning">个人资料</el-tag> 页面（https://star-skin.cn/user/profile）会出现 <el-tag type="warning">设置Oauth账户密码</el-tag> 的卡片，请首次登录之后就马上设置，避免后续出现的问题。
                </div>
                <div style="margin-top: 20px;font-size: 17px;" class="docs-contect">
                    2. 我是用正版（Microsoft）账号密码怎么无法登录？ / 我是用 Github 账号密码怎么无法登录?<br>
                    答：解决方法同问题1。
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
                <el-anchor-link href="#part1" title="注册" />
                <el-anchor-link href="#part2" title="登录" />
                <el-anchor-link href="#part3" title="您可能会遇到的问题" />
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