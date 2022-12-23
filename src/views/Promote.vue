<template>
    <div>
        <div class="head_img">
                <img v-show="language=='zh'" class="max-img" src="../assets/img/bg/2.png" alt="">
                <img v-show="language=='zh'" class="min-img" src="../assets/img/bg/2.2.png" alt="">

                <img v-show="language=='en'" class="max-img" src="../assets/img/en/yingwen2ba.png" alt="">
                <img v-show="language=='en'" class="min-img" src="../assets/img/en/yingwen2.2.png" alt="">

                <img v-show="language=='th'" class="max-img" src="../assets/img/bg/taiwen2.2.png" alt="">
                <img v-show="language=='th'" class="min-img" src="../assets/img/bg/taiwen2.png" alt="">
        </div>
        <div class="main_content">
             <div class="container">
                 <img v-show="language=='zh'" src="../assets/img/other/shuzi.png" alt="">
                 <img v-show="language=='en'" src="../assets/img/en/yingwen1.png" alt="">
                 <img v-show="language=='zh'" src="../assets/img/other/guizhe.png" alt="">
                 <img v-show="language=='en'" src="../assets/img/en/yingwen2.png" alt="">
                 <img v-show="language=='th'" src="../assets/img/th/taiwen1.png" alt="">
                 <img v-show="language=='th'" src="../assets/img/th/taiwen2.png" alt="">
              </div> 
        </div>
      
    </div>
</template>

<script>
export default {
  mounted() {
    if (localStorage.getItem("language") == "zh") {
      localStorage.setItem("language", "en");
    }
    this.language = this.$i18n.locale =
      localStorage.getItem("language") == null
        ? "en"
        : localStorage.getItem("language");
  },
  data() {
    return {
      language: "en"
    };
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
.min-img {
  display: none;
}
.container {
  width: 1000px;
  margin: 0 auto;
  padding-top: 62px;
  display: flex;
  align-items: center;
  & > img {
    width: 50%;
  }
}
@media all and (max-width: 1050px) {
  .main_content {
    background: url("../assets/img/bg/shu.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img {
      width: 80%;
      margin-bottom: 40px;
    }
  }
}
</style>