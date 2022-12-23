<template>
    <div>
       <div class="header_wrapper">
           <!-- <img  src="../assets/img/other/logo.png" alt=""> -->
           <div class="center_flex">

           </div>
           <div class="nav">
               <div @click="changeRouter('/index')" >{{$t('head.a')}}</div>
               <div @click="changeRouter('/game')" >{{$t('head.b')}}</div>
               <!-- <div @click="changeRouter('/promote')" >{{$t('head.c')}}</div> -->
               <div class='languageNav' @click.stop="changeLanguage()" >{{$t('head.d')}}
                   <div v-if="openLan" class='language_drop'>
                       <!-- <div @click="changeCioceLan('zh')" >中文(简体）</div> -->
                       <div @click="changeCioceLan('en')" >English</div>
                       <!-- <div @click="changeCioceLan('th')" >ภาษาไทย</div> -->
                   </div>
               </div>
               <div :class="['active_nav',{'left_0':left==0},{'left_223':left==180},{'left_446':left==360},{'left_669':left==540}]"></div>
               <div :class="['active_img',{'left_0':left==0},{'left_223':left==180},{'left_446':left==360},{'left_669':left==540}]">
<img src="../assets/img/other/arrow.png" alt="">
               </div>
                  <div :class="['active_nav','left_669']"></div>
               <div :class="['active_img','left_669']">
<img src="../assets/img/other/arrow.png" alt="">
               </div>
           </div>
           <div @click="changeNavShow()" :class="[{open:minNav}]" id="nav-icon2">
 <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
<div :class="['right_nav',{'right_fixed':minNav}]">
  <div @click="changeRouterMin('/index')" :class="['min_nav',{'active_min_color':nowPath=='/index'}]">
    <img src="../assets/img/other/home.png" alt="">
   {{$t('head.a')}}
  </div>
   <div @click="changeRouterMin('/game')" :class="['min_nav',{'active_min_color':nowPath=='/game'}]">
    <img src="../assets/img/other/game_nav.png" alt="">
   {{$t('head.b')}}
  </div>
   <!-- <div @click="changeRouterMin('/promote')" :class="['min_nav',{'active_min_color':nowPath=='/promote'}]">
    <img src="../assets/img/other/people.png" alt="">
    {{$t('head.c')}}
  </div> -->
   <div class="min_nav">
    <img src="../assets/img/other/lan.png" alt="">
   {{$t('head.d')}}
  </div>
  <!-- <div @click="changeCioceLanmin('zh')"  class="language_min_change">中文(简体）</div> -->
  <div @click="changeCioceLanmin('en')"  class="language_min_change">English</div>
  <!-- <div @click="changeCioceLanmin('th')"  class="language_min_change">ภาษาไทย</div> -->
</div>
       </div>
       <!-- <img @click="openkefu()" class="kefu" src="../assets/img/button/kefuyingwen.png" alt=""> -->
       <router-view></router-view>
       <div id="bottom_link">
          <span  @click="changeRouterMin('/privacy')">{{$t('privacy')}}</span>
       </div>
        <div id="bottom_link">
         <a href="mailto:HelKrawi571@gmx.com">HelKrawi571@gmx.com</a>
       </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      left: 0,
      openLan: false,
      minNav: false,
      nowPath: "/index",
      language: "en",
      kefu: require("../assets/img/button/kefu.png"),
      kefuen: require("../assets/img/button/kefuyingwen.png"),
      kefuth: require("../assets/img/button/kefutaiwen.png"),
      plink: require("../assets/img/button/kefu.png")
    };
  },
  mounted() {
    if (localStorage.getItem("language") == "zh") {
      localStorage.setItem("language", "en");
    }
    this.nowPath = this.$route.path;
    this.language = this.$i18n.locale =
      localStorage.getItem("language") == null
        ? "en"
        : localStorage.getItem("language");
    this.$i18n.locale = this.language;
    this.plink =
      this.$i18n.locale == "en"
        ? this.kefu
        : this.$i18n.locale == "en" ? this.kefuen : this.kefuth;
    if (this.$route.path == "/index") {
      this.left = 0;
    } else if (this.$route.path == "/game") {
      this.left = 180;
    } else {
      this.left = 360;
    }
  },
  updated() {
    this.nowPath = this.$route.path;
    if (this.$route.path == "/index") {
      this.left = 0;
    } else if (this.$route.path == "/game") {
      this.left = 180;
    } else {
      this.left = 360;
    }
  },
  methods: {
    changeRouter(p) {
      if (this.$route.path == p) {
        return false;
      }
      this.openLan = false;
      if (p == "/index") {
        this.left = 0;
        this.$router.push("/index");
      } else if (p == "/game") {
        this.left = 180;
        this.$router.push("/game");
      } else {
        this.$router.push("/promote");
        this.left = 360;
      }
    },
    changeRouterMin(p) {
      this.minNav = !this.minNav;
      if (this.$route.path == p) {
        return false;
      } else {
        this.$router.push(p);
      }
    },
    changeLanguage() {
      this.openLan = this.openLan ? false : true;
    },
    changeCioceLan(l) {
      this.openLan = true;
      this.$i18n.locale = l;
      localStorage.setItem("language", l);
      // location.reload();
    },
    changeCioceLanmin(l) {
      this.minNav = !this.minNav;
      this.$i18n.locale = l;
      localStorage.setItem("language", l);
      // location.reload();
    },
    changeNavShow() {
      this.minNav = !this.minNav;
    },
    openkefu() {
      window.open("https://vm.daneviolda.com/m1nuug0kg32ekia0oau0xzko6k");
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../assets/reset.css");
.header_wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  padding-right: 3vw;
  z-index: 9999999;
  img {
    width: 180px;
    margin-left: 20px;
  }
  .center_flex {
    flex: 1;
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    & > div {
      cursor: pointer;
      width: 180px;
      height: 80px;
      font-size: 18px;
      font-family: Microsoft YaHei UI;
      font-weight: 400;
      color: #fefefe;
      text-align: center;
      line-height: 80px;
    }
    .languageNav {
      position: relative;
      user-select: none;
      z-index: 9999999;
      & > .language_drop {
        position: absolute;
        overflow: hidden;
        transition: all 0.6s;
        & > div {
          width: 180px;
          height: 37px;
          background-image: url("../assets/img/button/nva_bg.png");
          background-size: 100% 100%;
          line-height: 37px;
          text-align: center;
          font-size: 18px;
          font-family: Microsoft YaHei UI;
          font-weight: 400;
        }
      }
    }
  }
}
.active_nav {
  border: 1px solid;
  border-image: linear-gradient(180deg, #e591fa, #3f2772) 10 10;
  background: linear-gradient(180deg, #9665c0 0%, #4f28a7 100%);
  opacity: 0.6;
  position: absolute;
  left: 0;
  width: 178px !important;
  height: 78px !important;
  z-index: -1;
  transition: all 0.6s;
}
.active_img {
  position: absolute;
  left: 0;
  width: 180px;
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 99999;
  transition: all 0.6s;
  padding-bottom: 20px;
  img {
    width: 26px;
  }
}
.left_0 {
  left: 0;
}
.left_223 {
  left: 180px;
}
.left_446 {
  left: 360px;
}
.left_669 {
  left: 540px;
}
.height0 {
  opacity: 0 !important;
}
.right_nav {
  display: none;
}
@media all and (max-width: 1050px) {
  #bottom_link {
    height: 40px !important;
    line-height: 40px !important;
    span {
      font-size: 14px !important;
    }
  }
  .nav {
    display: none !important;
  }

  #nav-icon2 {
    width: 60px;
    height: 45px;
    position: relative;
    margin: 50px auto;

    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    transform: scale(0.5, 0.5);
  }

  #nav-icon2 span {
    display: block;
    position: absolute;
    height: 9px;
    width: 51%;
    background: #f2a83b;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon2 span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  #nav-icon2 span:nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }

  #nav-icon2 span:nth-child(1),
  #nav-icon2 span:nth-child(2) {
    top: 0px;
  }

  #nav-icon2 span:nth-child(3),
  #nav-icon2 span:nth-child(4) {
    top: 18px;
  }

  #nav-icon2 span:nth-child(5),
  #nav-icon2 span:nth-child(6) {
    top: 36px;
  }

  #nav-icon2.open span:nth-child(1),
  #nav-icon2.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon2.open span:nth-child(2),
  #nav-icon2.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon2.open span:nth-child(1) {
    left: 5px;
    top: 7px;
  }

  #nav-icon2.open span:nth-child(2) {
    left: calc(50% - 5px);
    top: 7px;
  }

  #nav-icon2.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  #nav-icon2.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  #nav-icon2.open span:nth-child(5) {
    left: 5px;
    top: 29px;
  }

  #nav-icon2.open span:nth-child(6) {
    left: calc(50% - 5px);
    top: 29px;
  }
  .header_wrapper {
    height: 40px;
    padding: 0 30px;
    img {
      width: 110px;
    }
  }

  .right_nav {
    display: block;
    position: fixed;
    top: 40px;
    right: -200px;
    bottom: 0;
    width: 150px;
    background: rgba(0, 0, 0, 0.7);
    transition: all 0.6s;
    .min_nav {
      display: flex;
      width: calc(100% - 20px);
      height: 65px;
      padding: 0 10px;
      align-items: center;
      font-size: 15px;
      font-family: Microsoft YaHei UI;
      font-weight: 400;
      color: #fefefe;
      img {
        width: 24px;
        margin-right: 10px;
      }
    }
  }
  .active_min_color {
    width: calc(100% - 24px) !important;
    height: 61px !important;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: linear-gradient(77deg, #9665c0 0%, #320e57 100%);
    opacity: 0.8;
  }
  .language_min_change {
    height: 45px;
    width: 100%;
    background: linear-gradient(
      180deg,
      #000000 56.00000000000001%,
      #533e82 100%
    );
    line-height: 45px;
    font-size: 14px;
    font-family: Microsoft YaHei UI;
    font-weight: 400;
    color: #fefefe;
  }
  .right_fixed {
    right: 0 !important;
  }
  .kefu {
    width: 50px !important;
  }
}
.kefu {
  position: fixed;
  right: 6px;
  top: 50%;
  width: 80px;
  z-index: 999999999999;
  cursor: pointer;
}
#bottom_link {
  height: 60px;
  background: #110f25;
  line-height: 60px;
  text-align: center;
  color: #ddd;
  span {
    text-decoration: underline;
    cursor: pointer;
    font-size: 18px;
  }
}
</style>