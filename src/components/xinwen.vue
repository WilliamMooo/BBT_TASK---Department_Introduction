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
      introduction: '于文字的刀光剑影中追寻真相，于摄影的光影变化中记录变迁。我们是百步梯综合新闻部，是华工校内举办各大明星活动时的现场首席媒体，是以新闻理想为精神食粮的校媒记者。我们关注学生权益、为学生发声，我们更是温暖有力、共同成长的大家庭。如果你对非虚构写作感兴趣、对摄影感兴趣、对正在发生的事情感兴趣；如果你对追求事实与真相有自己的坚守、愿意在大学期间加入一个大家庭，无悔奉献自己的青春，做自己认为有意义的事情，那就加入我们吧。真相永远不会太晚。'
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
  background: url(../assets/page-4/xinwen.png) no-repeat top;
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
