<template>
<div class="container">
  <!-- 顶部navigation -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
background-color="#31394d" text-color="#cdcac7"
active-text-color="#fc4053" @select="tabSelect">
  <el-menu-item index="1">关于我</el-menu-item>
   <el-menu-item index="2">作品展示</el-menu-item>
    <el-menu-item index="3">技术文章</el-menu-item>
     <el-menu-item index="4">联系我</el-menu-item>
</el-menu>
<!-- 头部动画栏 -->
  <div class="intro-header">
    <div class="intro-message">
      <img  id='thumb' src="../assets/ike.jpg" alt="">
      <h1 class="myname">IKE</h1>
      <h3>Hello, world.<span class="mouseflick">&nbsp;</span></h3>
    </div>

    <!-- particles container -->
<div id="particlesId"></div>
  </div>

<!-- self-intro -->
<div id="self-info">
  <div class="aboutme">
    <h1>关于我
      <a href="https://github.com/Amesmer" target="_blank"><i class="icon iconfont">&#xea0b;</i></a>
    </h1>
    
  </div>
  <p><strong>Not an ordinary front-end developer</strong> </p>
 <ul class="licontainer">
   <li>
    <img src="../assets/image/icon_graduate.png" alt="">
    <p>毕业于西北民族大学</p>
   </li>
    <li>
    <img src="../assets/image/icon_page.png" alt="">
    <p>自学前端出身的野生开发</p>
   </li>
    <li>
    <img src="../assets/image/icon_com.png" alt="">
    <p>已经工作三年了</p>
   </li>
    <li>
    <img src="../assets/image/icon_study.png" alt="">
    <p>咱们面试详聊</p>
   </li>
 </ul>
</div>

<div class="curmb-skill">
  <h3>开发技能
    <span >HTML</span>|
    <span>CSS</span>|
    <span>Javascript</span>|
    <span>ES6</span>|
    <span>VUE</span>|
    <span>axios</span>|
    <span>webpack</span>|
    <span>ElementUI</span>|
    <span>less</span>
  </h3>
  
</div>
<div class="curmb-hobby">
  <h3>兴趣爱好
    <span >前端开发</span>|
    <span>电影</span>|
    <span>看书</span>|
    <span>旅行</span>|
    <span>玩游戏</span>
  </h3>
  
</div>
<!-- show skil -->
<div class="showskill">
   <div class="section-header">
     <h1>作品展示</h1>
     <h3>我坚持学习最新的技能，也喜欢研究怎样使页面看起来更加舒服。</h3>
   </div>
   <div class="showskill-container">
     <div class="showbox" @mouseenter="mouseenter($event,0)" @mouseleave="mouseleave($event,0)">
       <a href="javascript:;">
         <img src="../assets/image/mailbox.jpg" alt="">
         <div class="overlay" :class="hoverstyle0" >
           <p>Vue全家桶</p>
         </div>
       </a>
     </div>
         <div class="showbox" @mouseenter="mouseenter($event,1)" @mouseleave="mouseleave($event,1)">
       <a href="javascript:;">
         <img src="../assets/image/mailbox.jpg" alt="">
         <div class="overlay" :class="hoverstyle1">
           <p>Vue全家桶</p>
         </div>
       </a>
     </div>
         <div class="showbox"  @mouseenter="mouseenter($event,2)" @mouseleave="mouseleave($event,2)">
       <a href="javascript:;">
         <img src="../assets/image/mailbox.jpg" alt="">
         <div class="overlay" :class="hoverstyle2">
           <p>Vue全家桶</p>
         </div>
       </a>
     </div>
         <div class="showbox"  @mouseenter="mouseenter($event,3)" @mouseleave="mouseleave($event,3)">
       <a href="javascript:;">
         <img src="../assets/image/mailbox.jpg" alt="">
         <div class="overlay" :class="hoverstyle3">
           <p>Vue全家桶</p>
         </div>
       </a>
     </div>
   </div>
</div>
<!-- wonderful css -->
<div>
  <div class="section-header">
     <h1>网页效果</h1>
     <h3>我喜欢用VUE写一些漂亮的组件</h3>
   </div>
</div>
<!-- articles -->
<div>
   <div class="section-header">
     <h1>技术文章</h1>
     <h3>我喜欢用写文章的方式记录学习,也希望帮到别人.</h3>
   </div>
</div>
<!-- contactMe -->

</div>
</template>

<script>
//
require('script-loader!particles.js')
export default {
  mounted() {
    // 参数1 ，为div节点的id , 参数2，为particles.json配置文件
    // particlesJS.myload('particlesId', this.paramsJsonStr)
    particlesJS.load('particlesId', './particles.json')
  },
  data() {
    return {
      activeIndex: '0',
      hoverstyle0: '',
      hoverstyle1: '',
      hoverstyle2: '',
      hoverstyle3: ''
    }
  },
  methods: {
    // tab切换事件
    tabSelect(key, keyPath) {},
    // 鼠标进入事件
    mouseenter(e, param) {
      console.log(e, param)
      const x = e.pageX - e.target.offsetLeft
      const y = e.pageY - e.target.offsetTop
      const w = e.target.clientWidth
      const h = e.target.clientHeight
      const enterResult = this.closestDist(x, y, w, h)
      console.log(x, y, w, h, enterResult)

      switch (param) {
        case 0:
          this.hoverstyle0 = enterResult
          break
        case 1:
          this.hoverstyle1 = enterResult
          break
        case 2:
          this.hoverstyle2 = enterResult
          break
        case 3:
          this.hoverstyle3 = enterResult
          break
      }
    },
    // 鼠标离开
    mouseleave(e, param) {
      const x = e.pageX - e.target.offsetLeft
      const y = e.pageY - e.target.offsetTop
      const w = e.target.clientWidth
      const h = e.target.clientHeight
      const enterResult = this.closestDist(x, y, w, h)
      console.log(x, y, w, h, enterResult)
      switch (param) {
        case 0:
          this.hoverstyle0 = 'reverse' + enterResult
          break
        case 1:
          this.hoverstyle1 = 'reverse' + enterResult
          break
        case 2:
          this.hoverstyle2 = 'reverse' + enterResult
          break
        case 3:
          this.hoverstyle3 = 'reverse' + enterResult
          break
      }
    },
    // 计算四方形某条边中点的位置
    toEdgeDist(x, y, x2, y2) {
      const xDiff = x - x2
      const yDiff = y - y2
      return xDiff ** 2 + yDiff ** 2
    },
    //calculate the closest middle point
    closestDist(x, y, w, h) {
      const toTop = this.toEdgeDist(x, y, w / 2, 0)
      const toBottom = this.toEdgeDist(x, y, w / 2, h)
      const toLeft = this.toEdgeDist(x, y, 0, h / 2)
      const toRight = this.toEdgeDist(x, y, w, h / 2)
      const minDist = Math.min(toTop, toBottom, toLeft, toRight)
      switch (minDist) {
        case toTop:
          return 'top'
        case toBottom:
          return 'bottom'
        case toLeft:
          return 'left'
        case toRight:
          return 'right'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu {
  border-bottom: solid 1px black !important;
  padding-left: 33px;
  .el-menu-item {
    font-size: 16px;
  }
}
#particlesId {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

.intro-header {
  position: relative;
  padding-top: 0px;
  padding-bottom: 20px;
  text-align: center;
  background-color: #31394d;
  .intro-message {
    position: relative;
    padding-top: 5%;
    padding-bottom: 10%;
    color: #ece7df;
    #thumb {
      width: 140px;
      border-radius: 50%;
    }
    .myname {
      font-size: 50px;
    }
    h3 {
      font-size: 28px;
    }
    .mouseflick {
      top: 0;
      right: 0;
      background: #31394d;
      width: 100%;
      border-left: 0.1em solid transparent;
      -webkit-animation: typing 3s steps(16) forwards, cursor 1s infinite;
      animation: typing 3s steps(16) forwards, cursor 1s infinite;
    }
  }
  /* Animation */
  @-webkit-keyframes typing {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
  @-webkit-keyframes cursor {
    50% {
      border-color: white;
    }
  }
  @keyframes typing {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
  @keyframes cursor {
    50% {
      border-color: white;
    }
  }
}

// self-intro part
#self-info {
  width: 100%;
  margin: 83px 0;
  color: #333333;
  text-align: center;
  .aboutme {
    h1 {
      font-size: 36px;
    }
    .icon {
      font-size: 30px;
      color: #337ab7;
    }
    a:hover .icon {
      color: #333333;
    }
  }
  strong {
    font-size: 21px;
  }
  .licontainer {
    list-style: none;
    img {
      width: 200px;
      height: 200px;
    }
    p {
      font-size: 18px;
      transition: all 0.2s;
    }
    p:hover {
      transform: scale(1.1);
    }
    display: flex;
    justify-content: space-evenly;
  }
}

.curmb-skill,
.curmb-hobby {
  background-color: #1789ce;
  font-size: 22px;
  padding: 21px;
  color: #fafafa;

  h3 {
    font-size: 22px;
    margin-left: 10%;
    font-weight: 100;
    text-shadow: 0 0 1px #fff;
  }
  span:nth-child(1) {
    margin-left: 8%;
  }
  span {
    font-weight: 100;
    font-size: 20px;
    padding: 0 10px;
    white-space: pre;
  }
}

.curmb-hobby {
  background-color: #25e47a;
}

// showskill
.section-header {
  width: 100%;
  text-align: center;
  color: #333333;
  h1 {
    font-size: 36px;
  }
  h3 {
    font-size: 21px;
    font-weight: 300;
    line-height: 1.4;
  }
}

.showskill {
  width: 100%;
  text-align: center;
  .showskill-container {
    margin: 0 auto;
    width: 1170px;
    padding-top: 1%;
    padding-bottom: 3%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .showbox {
      overflow: hidden;
      position: relative;
      width: 44%;
      height: 320px;
      margin: 2%;
      background-color: pink;
      box-shadow: 0 0 5px #ece7df;
      img {
        width: 100%;
      }
      .overlay {
        top: -100%;
        left: 0%;
        position: absolute;
        width: 100%;
        height: 100%;
        color: #fff;
        background-color: #ffd124;
        z-index: 10;
        p {
          font-size: 50px;
          font-weight: 300;
          padding-top: 80px;
        }
      }
    }
  }
}

.top {
  top: -100% !important;
  left: 0% !important;
  animation: amtop 0.5s forwards;
  @keyframes amtop {
    from {
      top: -100%;
      left: 0%;
    }
    to {
      top: 0%;
      left: 0%;
    }
  }
}
.bottom {
  top: 100% !important;
  left: 0% !important;
  animation: bottom 0.5s forwards;
  @keyframes bottom {
    from {
      top: 100%;
    }
    to {
      top: 0%;
    }
  }
}
.left {
  top: 0% !important;
  left: -100% !important;
  animation: left 0.5s forwards;
  @keyframes left {
    from {
      left: -100%;
    }
    to {
      left: 0%;
    }
  }
}
.right {
  top: 0% !important;
  left: 100% !important;
  animation: top 0.5s forwards;
  @keyframes top {
    from {
      left: 100%;
    }
    to {
      left: 0%;
    }
  }
}

.reversetop {
  animation: rtop 0.5s forwards;
  @keyframes rtop {
    from {
      top: 0%;
    }
    to {
      top: -100%;
    }
  }
}

.reversebottom {
  animation: rbottom 0.5s forwards;
  @keyframes rbottom {
    from {
      top: 0%;
    }
    to {
      top: 100%;
    }
  }
}

.reverseleft {
  animation: rleft 0.5s forwards;
  @keyframes rleft {
    from {
      left: 0%;
      top: 0%;
    }
    to {
      top: 0%;
      left: -100%;
    }
  }
}

.reverseright {
  animation: rright 0.5s forwards;
  @keyframes rright {
    from {
      top: 0%;
      left: 0%;
    }
    to {
      top: 0;
      left: 100%;
    }
  }
}
</style>
