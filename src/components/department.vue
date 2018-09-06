<template>
  <div class="main">
    <div class="title"></div>
    <div @click="back()" class="back"></div>
    <transition-group name="departments" tag="div" class="departments">
      <img v-for="icon in icons" :key="icon.id" :src="icon.src" alt="" @click="jump(icon)">
    </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        {
          id: 0,
          src: ''
        },
        {
          id: 1,
          src: require('../assets/page-3.1/jiemu.png')
        },
        {
          id: 2,
          src: require('../assets/page-3.1/cetui.png')
        },
        {
          id: 3,
          src: require('../assets/page-3.1/zongguan.png')
        },
        {
          id: 4,
          src: require('../assets/page-3.1/jishu.png')
        },
        {
          id: 5,
          src: require('../assets/page-3.1/shipin.png')
        },
        {
          id: 6,
          src: require('../assets/page-3.1/xinwen.png')
        },
        {
          id: 7,
          src: require('../assets/page-3.1/bianji.png')
        },
        {
          id: 8,
          src: require('../assets/page-3.1/renli.png')
        },
        {
          id: 9,
          src: require('../assets/page-3.1/shishe.png')
        },
        {
          id: 10,
          src: require('../assets/page-3.1/wailian.png')
        },
        {
          id: 11,
          src: ''
        }
      ]
    }
  },
  methods: {
    back () {
      history.go(-1)
    },
    jump (icon) {
      if (icon.id === 1) {
        this.$router.push('/jiemu')
      } else if (icon.id === 2) {
        this.$router.push('/cetui')
      } else if (icon.id === 3) {
        this.$router.push('/zongguan')
      } else if (icon.id === 4) {
        this.$router.push('/jishu')
      } else if (icon.id === 5) {
        this.$router.push('/shipin')
      } else if (icon.id === 6) {
        this.$router.push('/xinwen')
      } else if (icon.id === 7) {
        this.$router.push('/bianji')
      } else if (icon.id === 8) {
        this.$router.push('/renli')
      } else if (icon.id === 9) {
        this.$router.push('/shishe')
      } else if (icon.id === 10) {
        this.$router.push('/wailian')
      }
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: url(../assets/page-3/title-2.png) no-repeat top;
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

.departments {
  position: absolute;
  left: 0;
  right: 0;
  top: calc((745 / 2208) * 100vh);
  margin: auto 0;
  display: flex;
  flex-wrap: wrap;
}

img {
  width: 13vw;
  height: auto;
  margin: 0 6vw;
  flex-grow: 1;
  align-self: flex-start;
}

img:nth-child(3n+1) {
  margin-left: 10vw;
}

@media screen and (min-width: 750px) {
  .back {
    left: 20vw;
  }

  img {
    width: 10vw;
    margin: 0 7vw;
  }
}

@media screen and (min-width: 1050px) {
  .back {
    left: 32vw;
  }

  img {
    width: 3vw;
    margin: 0 5vw;
  }

  img:nth-child(3n+1) {
  margin-left: 30vw;
  }

  img:nth-child(3n) {
  margin-right: 30vw;
  }
}
</style>
