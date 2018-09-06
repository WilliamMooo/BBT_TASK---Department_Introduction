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
      introduction: '我们是百步梯的⼤管家⸺综合管理部。⾏政会务、物资管理、财务统计，肩负百步梯三⼤重要职能，我们是百步梯庞⼤的根系。我们管理⾏政，每⼀次的重⼤决策，都因为详尽的会议笔录得以铭记，每⼀项震撼⼈⼼的活动，背后都是我们严谨细致的活动申请；我们管理财务，复杂的经济收⽀在我们的记录与安排下，有条不紊；我们管理物资，⽆论是扫楼与摆摊的华丽登场，还是活动⾥的声光电⾊，我们总能为您找到最合⾝的装备。综管践⾏严谨、开拓创新为⾏为准则，以创新的理念，不断发展⾃⼰，为百步梯的传承竭尽全⼒。来吧，综管期待与你的邂逅！'
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
  background: url(../assets/page-4/zongguan.png) no-repeat top;
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
