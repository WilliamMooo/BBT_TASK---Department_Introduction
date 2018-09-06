<template>
  <div class="main">
    <div class="logo"></div>
    <div class="option">
      <router-link to="/organization-introduction">
        <img src="../assets/page-2/1.png" alt="">
        {{msg1}}
        <img src="../assets/page-2/2.png" alt="">
      </router-link>
    </div>
    <div class="option">
      <router-link to="/department-introduction">
        <img src="../assets/page-2/1.png" alt="">
        {{msg2}}
        <img src="../assets/page-2/2.png" alt="">
      </router-link>
    </div>
    <div class="option">
      <router-link to="/event-introduction">
        <img src="../assets/page-2/1.png" alt="">
        {{msg3}}
        <img src="../assets/page-2/2.png" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg1: '组织介绍',
      msg2: '部门介绍',
      msg3: '活动介绍'
    }
  }
}
</script>

<style scoped>
.main {
  height: 100vh;
  width: 100vw;
  background: url(../assets/page-2/background.png) repeat bottom;
  background-size: auto 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.logo {
  width: 100vw;
  height: calc((1471 / 2208) * 100vh);
  position: absolute;
  top: 0;
  background: url(../assets/page-2/logo.png) no-repeat center;
  background-size: contain;
  z-index: 1;
}

.option {
  z-index: 2;
  margin: 5vh 0;
}

a {
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  font-size: calc((100 / 2208) * 100vh);
  font-family: 'Microsoft YaHei';
  padding: 2vh;
}

img {
  pointer-events: none;
  height: calc((71 / 2208) * 100vh);
}

@media screen and (min-height: 700px) {
}
</style>
