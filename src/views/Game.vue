<template>
    <div>
        <div class="head_img">
                <img v-show="language=='zh'"  class="min-img"  src="../assets/img/bg/3.2.png" alt="">
                <img v-show="language=='zh'"  class="max-img"  src="../assets/img/bg/3.png" alt="">

                <img v-show="language=='en'"  class="min-img"  src="../assets/img/en/yingwen3.2.png" alt="">
                <img v-show="language=='en'"  class="max-img"  src="../assets/img/en/yingwen3.png" alt="">

                <img v-show="language=='th'"  class="min-img"  src="../assets/img/bg/taiwen3.2.png" alt="">
                <img v-show="language=='th'"  class="max-img"  src="../assets/img/bg/taiwen3.png" alt="">
        </div>
        <div class="main_content">
             <div class="container">
                 <img class="ganme_img" src="../assets/img/other/game.png" alt="">
                <!-- <div class="down_list">
                    <div>
                        {{$t('down.an')}}
                    <div class="qrwrapper"><div id="qrcode" ref="qrcode"></div></div>
                    </div>
                    <div>
                        {{$t('down.ios')}}
                        <div class="qrwrapper">
                          <div id="qrcode2" ref="qrcode2"></div>
                        </div>
                               
                    </div>
                </div>
                <div class="min_down">
                    <div @click="down('an')">
                        <img src="../assets/img/other/anzhuo.png" alt=""> {{$t('down.an')}}
                    </div>
                    <div @click="down('ios')">
                      <img src="../assets/img/other/ios.png" alt="">{{$t('down.ios')}}
                    </div>
                </div> -->
              </div> 
        </div>
      
    </div>
</template>

<script>
import axios from "axios";
import QRCode from "qrcodejs2";
export default {
  mounted() {
    if (localStorage.getItem("language") == "zh") {
      localStorage.setItem("language", "en");
    }
    document.getElementById("qrcode").innerHTML = "";
    document.getElementById("qrcode2").innerHTML = "";
    // axios
    //   .get("https://www.8g888.com/index/downloadUrlByPh")
    //   .then(res => {
    //     if (res.data.code == 200) {
    //       for (let v of res.data.data) {
    //         if (v.page_type == 1 && v.type == 1) {
    //           this.an = v.download_url;
    //         }
    //         if (v.page_type == 1 && v.type == 2) {
    //           this.ios = v.download_url;
    //         }
    //       }
    //       this.qrCode(this.an);
    //       this.qrCode2(this.ios);
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    this.an =
      "https://play.google.com/store/apps/details?id=com.php.helens&gl=US";
    this.ios = "https://rhzd9.com/sJNLm";
    // this.qrCode(this.an);
    // this.qrCode2(this.ios);
    this.language = this.$i18n.locale =
      localStorage.getItem("language") == null
        ? "en"
        : localStorage.getItem("language");
  },
  data() {
    return {
      language: "en",
      an: "",
      ios: ""
    };
  },
  methods: {
    // down(t) {
    //   if (t == "an") {
    //     location.href = this.an;
    //   } else {
    //     location.href = this.ios;
    //   }
    // },
    qrCode(url) {
      let qrcode = new QRCode("qrcode", {
        width: 300, //图像宽度
        height: 300, //图像高度
        colorDark: "#ffffff", //前景色
        colorLight: "#000", //背景色
        typeNumber: 4,
        correctLevel: QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
      });
      qrcode.makeCode(url); //生成另一个新的二维码
    },
    qrCode2(url) {
      let qrcode2 = new QRCode("qrcode2", {
        width: 300, //图像宽度
        height: 300, //图像高度
        colorDark: "#fff", //前景色
        colorLight: "#000", //背景色
        typeNumber: 4,
        correctLevel: QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
      });
      qrcode2.makeCode(url); //生成另一个新的二维码
    }
  }
};
</script>

<style lang="less" scoped>
.head_img {
  font-size: 0;
  img {
    width: 100%;
  }
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
  padding-top: 62px;
  img {
    max-width: 100%;
  }
  .ganme_img {
    margin-bottom: 62px;
  }
  .down_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div {
      width: 440px;
      height: 454px;
      background-image: url("../assets/img/other/down1.png");
      background-size: 100% 100%;
      font-size: 36px;
      font-family: FZCuYuan-M03S;
      font-weight: 400;
      color: #ffffff;
      text-align: center;
      padding-top: 26px;
    }
  }
}
.min-img {
  display: none;
}
.min_down {
  display: none;
}
@media all and (max-width: 1050px) {
  .main_content {
    background: url("../assets/img/bg/shu.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-bottom: 160px;
  }
  .min-img {
    display: block;
  }
  .max-img {
    display: none;
  }
  .container {
    width: 100%;
  }
  .down_list {
    display: none !important;
  }
  .min_down {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > div {
      width: 378px;
      height: 187px;
      background-image: url("../assets/img/button/anniu.png");
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: " Microsoft JhengHei";
      font-size: 22px;
      color: #ffffff;
      img {
        width: 50px;
        margin-right: 15px;
      }
    }
  }
}
.qrwrapper {
  display: flex;
  justify-content: center;
  padding-top: 58px;
}
#qrcode,
#qrcode2 {
  width: 300px;
  height: 300px;
}
</style>