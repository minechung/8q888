<template>
    <div class="wrapper">
        <div class="banner">
               <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide max-swiper">
      <img v-if="language=='zh'" src="../assets/img/bg/1.png" alt="">
      <img v-if="language=='en'" src="../assets/img/en/yingwen1ba.png" alt="">
      <img v-if="language=='th'" src="../assets/img/bg/taiwen1.png" alt="">
      
      </div>
      <!-- <div class="swiper-slide max-swiper">
        <img v-if="language=='zh'" src="../assets/img/bg/2.png" alt="">
      <img v-if="language=='en'" src="../assets/img/en/yingwen2ba.png" alt="">
      <img v-if="language=='th'" src="../assets/img/bg/taiwen2.2.png" alt="">
      </div> -->
      <div class="swiper-slide max-swiper">
         <img v-if="language=='zh'" src="../assets/img/bg/3.png" alt="">
      <img v-if="language=='en'" src="../assets/img/en/yingwen3.png" alt="">
      <img v-if="language=='th'" src="../assets/img/bg/taiwen3.png" alt="">
      </div>
    </div>
  </div>
<div class="min-swiper">
    <div class="swiper-container-min">
    <div class="swiper-wrapper">
  
      <div class="swiper-slide ">
        <img v-show="language=='zh'" src="../assets/img/bg/1.2.png" alt="">
        <img v-show="language=='en'" src="../assets/img/en/yingwen1.2.png" alt="">
        <img v-show="language=='th'" src="../assets/img/bg/taiwen1.2.png" alt="">
      </div>
      <div class="swiper-slide ">
          <img v-show="language=='zh'" src="../assets/img/bg/2.2.png" alt="">
        <img v-show="language=='en'" src="../assets/img/en/yingwen2.2.png" alt="">
        <img v-show="language=='th'" src="../assets/img/bg/taiwen2.png" alt="">
      </div>
      <div class="swiper-slide ">
          <img v-show="language=='zh'" src="../assets/img/bg/3.2.png" alt="">
        <img v-show="language=='en'" src="../assets/img/en/yingwen3.2.png" alt="">
        <img v-show="language=='th'" src="../assets/img/bg/taiwen3.2.png" alt="">
      </div>
    </div>
  </div>
</div>
        </div>
        <div class="main_content">
            <div style="padding-top:62px;">

                    <div class="download">
              <!-- <div @click="toDown" class="downBtn">

              </div> -->
              </div>
            </div>
            <div class="container">
      
                <div class="promote">
   {{$t('tedian')}}
                </div>
                <div class="info_list">
                   <div>
                      <img src="../assets/img/other/1.png" alt="">
                      <div> {{$t('iconl.a')}}</div>
                      <div>
                        Official direct sales
                      </div>
                   </div>
                    <div>
                      <img src="../assets/img/other/2.png" alt="">
                      <div>{{$t('iconl.b')}}
</div>
                      <div>
                        International Certification
                      </div>
                   </div>
                    <div>
                      <img src="../assets/img/other/3.png" alt="">
                      <div>{{$t('iconl.c')}}
</div>
                      <div>
                        Financial security
                      </div>
                   </div>
                    <div>
                      <img src="../assets/img/other/4.png" alt="">
                      <div>{{$t('iconl.d')}}
</div>
                      <div>
                       Great odds
                      </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    if (localStorage.getItem("language") == "zh") {
      localStorage.setItem("language", "en");
    }
    this.language = this.$i18n.locale =
      localStorage.getItem("language") == null
        ? "en"
        : localStorage.getItem("language");

    new Swiper(".swiper-container", {
      autoplay: true,
      effect: "fade"
    });
    new Swiper(".swiper-container-min", {
      autoplay: true,
      effect: "fade"
    });
  },
  data() {
    return {
      language: "zh"
    };
  },
  methods: {
    toDown() {
      this.$router.push("/game");
    }
  }
};
</script>

<style lang="less" scoped>
.swiper-slide {
  font-size: 0;
}
.swiper-slide > img {
  width: 100%;
}

.main_content {
  background: url("../assets/img/bg/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding-bottom: 160px;
}
.container {
  width: 1000px;
  margin: 0 auto;
  .promote {
    border: 3px solid #251d50;
    background: rgba(0, 0, 0, 0.32);
    padding: 78px 64px 92px 64px;
    font-size: 24px;
    font-family: FZLanTingYuan-R-GBK;
    font-weight: 400;
    color: #ffffff;
    line-height: 33px;
    text-align: center;
    margin-bottom: 124px;
  }
  .info_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    & > div {
      width: 433px;
      height: 154px;
      background: rgba(0, 0, 0, 0.28);
      border: 3px solid rgba(255, 255, 255, 0.28);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font-size: 24px;
      font-family: Microsoft YaHei UI;
      font-weight: bold;
      color: #eec844;
      line-height: 30px;
      margin-bottom: 52px;
      padding: 20px 0;
    }
  }
}
.min-swiper {
  display: none;
}
.swiper-container-min {
  overflow: hidden;
}
.download {
  background: url("../assets/img/bg/youxitu.png");
  width: 1200px;
  margin: 0 auto;
  height: 464px;
  background-size: 100% 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.downBtn {
  width: 300px;
  height: 150px;
  background-image: url("../assets/img/button/xiazai.png");
  background-size: 100% 100%;
  cursor: pointer;
}
@media all and (max-width: 1050px) {
  .main_content {
    background: url("../assets/img/bg/shu.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-bottom: 160px;
  }
  .container {
    width: 100%;
    .promote {
      font-size: 16px;
      padding: 10px;
      margin: 10px;
      margin-bottom: 80px;
    }
    .info_list {
      display: flex;
      justify-content: center;
      & > div {
        width: 80%;
      }
    }
  }
  .max-swiper {
    display: none;
  }
  .min-swiper {
    display: block;
  }
  .download {
    background: url("../assets/img/bg/youxitu2.png");
    width: 90%;
    margin: 0 auto;
    height: 344px;
    background-size: 100% 100%;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .downBtn {
    width: 200px;
    height: 96px;
    background-image: url("../assets/img/button/xiazai.png");
    background-size: 100% 100%;
    cursor: pointer;
  }
}
</style>