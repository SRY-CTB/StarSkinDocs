<template>
  
      <div id="app" style="
    margin: 0;
    padding: 0;
">

    <div v-if="isLoading" class="loading-bar"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const router = useRouter();
    const isLoading = ref(false);

    router.beforeEach((to, from, next) => {
      isLoading.value = true;
      next();
    });

    router.afterEach(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 500); // 根据动画的持续时间调整
    });

    return {
      isLoading
    };
  }
}

</script>

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

.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: 0;
  background-color: #42b983;
  z-index: 9999;
  transition: width 0.5s ease;
}

@keyframes loading-bar-animation {
  0% {
    left: -100%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0;
  }
}

.loading-bar.active {
  animation: loading-bar-animation 2s linear infinite;
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
}

@media (hover: hover) {
    a:hover {
        background-color: hsla(0, 0%, 100%, 0) !important;
    }
}

</style>
