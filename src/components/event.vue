<template>
  <div class="main">
    <div class="title"></div>
    <div @click="back()" class="back"></div>
    <div v-html="introduction" class="introduction"></div>
  </div>
</template>

<script>
export default {
  name: 'event-introduction',
  data () {
    return {
      introduction: '●雕刻时光电影文化节</br>&nbsp&nbsp&nbsp&nbsp&nbsp往年的雕刻时光电影文化节有你的电影你做主、电影对对碰、电影交流会、光影狂欢以及雕刻盛典五部分组成。通过创意纷呈、形式多样的活动，传播当今社会的电影文化，沟通华园学子与社会的电影理念，丰富同学们的课余生活。是华园内每逢金秋最受瞩目和欢迎的大型活动之一。</br></br>●你的电影节你做主</br>&nbsp&nbsp&nbsp&nbsp&nbsp活动当天百步梯将在第一、二饭堂前摆摊,同学们可以通过制作精美的线上页面和线下装饰了解了详尽的电影介绍后利用多种有趣的投票方式为自己喜爱的电影进行投票,务求选出大家喜爱的电影,最终选数排前的电影能够在雕刻盛典当晚播出。</br></br>●电影对对碰</br>&nbsp&nbsp&nbsp&nbsp&nbsp此次活动为广大学子提供机会,在华园之中寻找你的有缘人!百步梯会在第饭堂前摆摊接受同学报名,只需简单填写个人信息参与由百步梯出品提供的趣味心理测试題测验出自己所属类型,便可得到一个带有编号的精美页面。参与者通过关注华工百步梯微信公众号,进入电影对对碰查询页面输入编号便可获得与你趣味相投的那个TA的信息。在千万人中遇见那个你,若双方匹配成功并在雕刻盛典当晚一同观看电影,就可以获得由百步梯准备的特别大礼和独一无二的“结缘证。</br></br>●电影交流会</br>&nbsp&nbsp&nbsp&nbsp&nbsp活动当天百步梯将邀请到时下最火最青春的将上映电影的电影剧组来到华工,与广大华园学子面对面接触并贴心交流,了解电影拍摄背后的种种,把社会最新的电影理念和文化带入校园。同学们还将获得与主演们亲密互动与电影精美周边的机会,重重福利,现场气氛更是high的让你意想不到!</br></br>●光影狂欢</br>&nbsp&nbsp&nbsp&nbsp&nbsp本次活动以荧光为视觉卖点,租用了整个生活区操场,布置成三大各有特色又吸引的活动区域。舞台区百步梯邀请到校内众多社团精心准备出演,强强联手,吸引了大批同学驻足观看;游戏区由多个荧光主题游戏摊位组成,同学们可在此尽情享受游戏的欢乐并赢取百步梯精心准备的小礼品;拍摄区由百步梯内专业人员掌机,为同学们拍摄趣味又回忆满满的独一无二的光迹涂鸦照片。各个趣味盎然的活动区域由布置精美的夜光装饰紧紧连接,成为华园夜里一道美丽的光景。</br></br>●雕刻盛典</br>&nbsp&nbsp&nbsp&nbsp&nbsp在活动当天百步梯将租下教学区A4、A5两栋大楼约30间教室,用于播放由同学们投选出来的电影。活动现场将进行盛大的主题装饰,为同学们带来一场独特的视觉盛宴!现场更有神秘大奖等你来拿!</br></br>●“爱上你主播“播音主持大赛</br>&nbsp&nbsp&nbsp&nbsp&nbsp10月中至11月中第九届“爱上你主播”以“拾光旅人”为主题,在华工这个充满理工色彩的美丽校园,男女主播在“爱上”舞台中浪漫邂逅,他们在舞台上赛出真我,让对方看到真实的自己。作为华南理工大学新生开学后举办的第一个校级比赛,更多的参赛血液来自初入大学的大新生,离别高中,初到大学,势必有许多的故事与心里话与大家分享,让男生也成为我校大型播音主持比赛的主角,无疑是我们这个理工校园中男同学们最强有力的心声。同时“爱上女主播”在高年级同学中沉淀下的影响力也将促使高年级的男女生积极参加,用舞台编织出最初的梦想,使自己的青春在舞台上绽放。</br></br>●治愈系</br>&nbsp&nbsp&nbsp&nbsp&nbsp十一月中句至十一月底，大型线上点歌互唱活动治愈系迈入第六载,广州五校联合举办,大学城广播台主播和新声Dai选手助力,点歌总数超过1万首,网页浏览量突破30万。每首歌背后都有一个故事,每个人都有些话渴望表达囗总会有一个人愿意与你分享同一首歌、愿意用TA的嗓音,在这冬天治愈你的心口在波板糖服务号里留下你的电话和想听的歌曲,有缘人会为你轻轻吟唱。</br></br>●时光胶囊</br>&nbsp&nbsp&nbsp&nbsp&nbsp百步梯在校内开启漂流慢递的活动,传递同学们对一段时间后自己或朋友的寄语和期望。同学们只需在活动现场报名,免费领取百步梯特别制作的信封和信纸,并在投信期内将信投至百步梯时光胶囊信箱内,百步梯将统一保管信封并根据同学们的选择在半年或一年后寄出。近年的时光胶囊更是推出了线上信和语音版,更加创意的方式等你来开启!</br></br>●创意市集</br>&nbsp&nbsp&nbsp&nbsp&nbsp通过摆摊,贩卖由百步梯视觉设计部DIY的乐趣商品,包括纪念明信片、个性徽章、潮流T恤、手绘书签等一系列印有独一无二华工印记的创意商品,并邀请现场同学参与互动,与大家分享创意生活,感受华工点滴美好记忆!</br></br>●照片墙</br>&nbsp&nbsp&nbsp&nbsp&nbsp可爱的华工背景板,专业的单反机器,快速洗照片,免费换服装,无论性别年级,或带着好闺蜜好兄弟,或是一个人独来。你的身影也许会出现在最后由百步梯特制的大型相册上。让你再一次拥抱华工,拥抱青春。</br></br>●许愿林</br>&nbsp&nbsp&nbsp&nbsp&nbsp大学生活,总有一些小心愿不曾实现,百步梯在毕业季将为你化身一片繁茂的森林,给你一个播种心愿的机会。在活动期间前来摊位制作专届你的许愿球,我们会帮你将愿望挂在一饭天桥,等待有缘人来为你摘下心愿的果实,收获实现愿望与奇妙缘分的欣喜。'
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
  background: url(../assets/page-3/title-3.png) no-repeat top;
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
