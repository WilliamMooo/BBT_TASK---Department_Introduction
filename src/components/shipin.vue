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
      introduction: '我们是第⼀时间采访明星名⼈的校园媒体也是百步梯甚⾄华南理⼯⼤学官⽅视频的记录团队。⽤⼩⼩视频拍出⼤⼤世界，通过亲⾝实践实现⾃⼰的梦想。只要你有想法、感兴趣、有热情，就可以加⼊我们，制作出属于你的视频。零基础的同学不⽤怕，有后期培训迎接你。百步梯视频部，欢迎你的加⼊！'
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
  background: url(../assets/page-4/shipin.png) no-repeat top;
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
