<template>
  <div class="main">
    <div class="title"></div>
    <div @click="back()" class="back"></div>
    <div class="introduction">{{introduction}}</div>
  </div>
</template>

<script>
export default {
  name: 'organization-introduction',
  data () {
    return {
      introduction: '华南理工大学百步梯学生创新中心（以下简称百步梯），是在校团委指导下、以互联网和学生广播电台为主要工作平台的校级学生组织，百步梯致力于为华工师生提供各类生活资讯、新闻广播以及包括主页空间、网上视频、FTP资源共享等在内的网络服务，同时以不同形式全力支持华工同学的创新活动。如今百步梯已经发展成华南地区最大的学生综合门户网站和一个优秀的校级学生组织。'
    }
  },
  methods: {
    back () {
      history.go(-1)
    }
  }
}
</script>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  background: url(../assets/page-3/background.png) repeat bottom;
  background-size: auto 100%;
}

.title {
  width: 100vw;
  height: calc((679 / 2208) * 100vh);
  background: url(../assets/page-3/title-1.png) no-repeat top;
  background-size: contain;
  z-index: 1;
}

.back {
  width: 25vw;
  height: 7vh;
  position: absolute;
  top: 6.5vh;
  z-index: 2;
  left: calc(50% - 40vw);
}

.introduction {
  width: calc((318 / 440) * 100vw);
  left: 0;
  right: 0;
  margin: 5vh auto;
  text-indent: 2em;
  font-family: 'Microsoft YaHei';
  line-height: calc((92 / 57) * 1em);
  text-align: justify;
  max-height: calc((1253 / 2208) * 100vh);
  overflow-y: scroll;
}

@media screen and (max-width: 750px) {
  .back {
    left: calc((160 / 1242) * 100vw);
  }
}

@media screen and (min-width: 750px) {
  .back {
    left: 20vw;
  }
}

@media screen and (min-width: 1050px) {
  .back {
    left: 32vw;
  }
}
</style>
