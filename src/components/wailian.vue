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
      introduction: '我们是百步梯对外交流的窗⼝，我们本着勇于挑战、⾃信乐观的宗旨⼒求以最完美的公关形象展现百步梯的⻛采。作为与社会联系最紧密的部⻔，我们主要负责与企业进⾏公关洽谈、与⾼校间信息交流互通、与各⼤媒体紧密合作、主办百步梯年会以及配合其他部⻔举办活动，我们是⼀⽀智⼒与实⼲相结合的优秀公关团队，始终⼒求以⼴阔的社会视⻆，担任好百步梯的“外交使者”。'
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
  background: url(../assets/page-4/wailian.png) no-repeat top;
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
