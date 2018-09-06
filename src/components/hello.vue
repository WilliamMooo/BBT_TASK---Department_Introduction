<template>
  <div class="hello">
    <div id="logo" class="logo"></div>
    <div>
      <router-link to="/option"></router-link>
    </div>
    <div class="slide" @touchstart="start($event)" @touchend="end($event)"></div>
    <div class="pre">
      <img src="../assets/page-2/background.png" alt="">
      <img src="../assets/page-2/logo.png" alt="">
      <img src="../assets/page-3/background.png" alt="">
      <img src="../assets/page-3/title-1.png" alt="">
      <img src="../assets/page-3/title-2.png" alt="">
      <img src="../assets/page-3/title-3.png" alt="">
      <img src="../assets/page-3.1/bianji.png" alt="">
      <img src="../assets/page-3.1/cetui.png" alt="">
      <img src="../assets/page-3.1/jiemu.png" alt="">
      <img src="../assets/page-3.1/jishu.png" alt="">
      <img src="../assets/page-3.1/renli.png" alt="">
      <img src="../assets/page-3.1/shipin.png" alt="">
      <img src="../assets/page-3.1/shishe.png" alt="">
      <img src="../assets/page-3.1/wailian.png" alt="">
      <img src="../assets/page-3.1/xinwen.png" alt="">
      <img src="../assets/page-3.1/zongguan.png" alt="">
      <img src="../assets/page-4/background.png" alt="">
      <img src="../assets/page-4/bianji.png" alt="">
      <img src="../assets/page-4/cetui.png" alt="">
      <img src="../assets/page-4/jiemu.png" alt="">
      <img src="../assets/page-4/jishu.png" alt="">
      <img src="../assets/page-4/renli.png" alt="">
      <img src="../assets/page-4/shipin.png" alt="">
      <img src="../assets/page-4/shishe.png" alt="">
      <img src="../assets/page-4/wailian.png" alt="">
      <img src="../assets/page-4/xinwen.png" alt="">
      <img src="../assets/page-4/zongguan.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      touchX: 0,
      touchY: 0
    }
  },
  methods: {
    start ($event) {
      $event.preventDefault()
      this.touchX = $event.changedTouches[0].pageX
    },
    end ($event) {
      $event.preventDefault()
      this.touchY = $event.changedTouches[0].pageX
      if (this.touchY - this.touchX > 50) {
        this.$router.push('/option')
      }
    }
  }
}
</script>

<style scoped>
.hello {
  height: 100vh;
  width: 100vw;
  background: url(../assets/page-1/background.png) repeat bottom;
  background-size: auto 100%;
  z-index: 1;
}

.logo {
  width: calc((948 / 1242) * 100vw);
  height: calc((1539 / 2208) * 100vh);
  left: 0;
  right: 0;
  margin: 0 auto;
  background: url(../assets/page-1/1.png) no-repeat center;
  background-size: contain;
}

a {
  width: calc((129 / 1242) * 100vw);;
  height: calc((65 / 2208) * 100vh);
  background: url(../assets/page-1/next.png) no-repeat;
  background-size: contain;
  position: absolute;
  top: calc((1763 / 2208) * 100vh);
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 3;
}

.slide {
  width: 100vw;
  height: 20vh;
  position: absolute;
  bottom: 5vh;
  left: 0;
  right: 0;
  z-index: 2;
}

.pre {
  display: none;
}
</style>
