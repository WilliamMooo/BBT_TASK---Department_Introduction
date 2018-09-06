<template>
  <div class="main">
    <div class="title"></div>
    <div @click="back()" class="back"></div>
    <div class="introduction">{{introduction}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      introduction: '⽤声⾳传递咨询、交流观点；⽤声⾳述说故事、分享⽣活。节⽬部主要负责每天下午五点三⼗分开始的校园⼴播，百步梯微信公众平台的“BBT汇⾳”栏⽬，以及荔枝FM运营。我们的主播负责节⽬的构思、录制和剪辑。现有新闻、⾳乐、粤语、英语、情感、时尚六⼤类型的节⽬。每年秋天，节⽬部还会承办百步梯三⼤活动之⼀的“爱上⼥主播”播⾳主持⼤赛。这⾥是华南理⼯⼤学⼤学城校区⼴播台。来这⾥，节⽬部为每⼀个有播⾳主持梦想的你，提供⼀个绽放的舞台。'
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
  background: url(../assets/page-4/background.png) repeat bottom;
  background-size: auto 100%;
}

.title {
  width: 100vw;
  height: calc((885 / 2208) * 100vh);
  background: url(../assets/page-4/jiemu.png) no-repeat top;
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
  max-height: calc((1103 / 2208) * 100vh);
  overflow-y: scroll;
}

@media screen and (max-width: 420px) {
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
