<template>
  <div>
    <!-- ---------------------TOP-NAV----------------------- -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <div class="d-flex align-items-center">
            <img src="img/logo/logo.png" width="100" alt="">
            <!-- <b class="fs-4" style="font-family: 'Caveat', cursive;">holesale Guruji</b>  -->
          </div>
        </a>
        <div class="d-flex justify-content-end">
          <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
            <RouterLink to="/login-page">
              <button class="btn btn-outline-danger">LOGIN</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <!-- ---------------------TOP-NAV----------------------- -->

    <!-- ------------------------Banner------------------ -->
    <div id="banner" class="d-md-flex justify-content-evenly align-items-center w-100 "
      style="background-image: linear-gradient(66deg, rgba(220,53,69,1) 33.33%, rgba(229,104,116,1) 33.33%, rgba(229,104,116,1) 66.66%, rgba(220,53,69,1) 66.66%); background-size: 100% 100%; background-repeat: no-repeat; height: 600px;">
      <div class=" d-flex justify-content-center align-items-center pt-3">
        <img src="img/Mobile.png" style="max-width:50%; ">
      </div>
      <div class=" d-flex flex-column justify-content-center align-items-center pt-3">
        <div id="TextAnimation" class="text-center">
          <h2 class="text-white">Create Your
            <span class="typed-text ">{{ typeValue }}</span>
            <span class="cursor" :class="{ 'typing': typeStatus }">&nbsp;</span>
          </h2>
          <div class="text-white">
            <h2 style=" margin: 0;"> At No Cost Now you can Build <br> and Scale with
              confidence</h2>
          </div>
        </div>
        <RouterLink to="/">
          <div class="btn btn-light text-danger my-4 fs-5" @click="showOfflineAlert">
            Get Started <i class="bi bi-arrow-right"></i>
          </div>
        </RouterLink>

        <div v-if="offline" class="install-popup">
          <div class="install-popup-content">
            <i class="bi bi-wifi-off fs-3"></i>
            <p>You are Offline Try connecting to the internet or try again later</p>
            <button class="btn btn-outline-dark" @click="dismissOffline">Dismiss</button>
          </div>
        </div>

        <a href="#second"><i class="bi bi-chevron-down fs-1 text-white"></i></a>
      </div>
    </div>
    <!-- ------------------------Banner------------------ -->

    <!-- ------------------------Second------------------ -->
    <div id="second" style="background-color: #fbf4f4;  padding-bottom: 50px;">

      <div class="d-md-flex justify-content-center row">
        <div class="d-flex flex-column justify-content-center align-items-center col-md-6 col-12">
          <p class="fw-bold text-secondary mt-4 ">WELCOME TO Retailpur</p>
          <p class=" fs-4 text-center">Buy stocks for your shop/business easily</p>
          <img src="img/graph.jpg" width="40%" alt="">
          <!-- <video class="d-flex justify-content-center" width="40%"
                    src="https://ud-video.azureedge.net/h_1080/u/assets/c1mbeluruj0p7cr2bsyp.mp4" autoplay="" loop=""></video> -->
        </div>
        <div class="col-md-6 col-12 d-flex justify-content-center">
          <div class="px-3">
            <div class="mt-4">
              <h3>Great <span class="text-danger opacity-75">Wholesale</span> Prices</h3>
              <p>Avail best price on 10+ top quality categories</p>
            </div>
            <div class="">
              <h3><span class="text-danger opacity-75"> Trending </span> Products Wide <span
                  class="text-danger opacity-75">
                  Range</span></h3>
              <p>Shop 1,000+ trending products across all categories</p>
            </div>
            <div class=" ">
              <h3>PAN <span class="text-danger opacity-75">India</span> Doorstep <span
                  class="text-danger opacity-75">Delivery</span></h3>
              <p>Delivery services available for 3,000+ cities</p>
            </div>
            <div class=" ">
              <h3><span class="text-danger opacity-75">Quick</span> Doorstep <span
                  class="text-danger opacity-75">Delivery</span></h3>
              <p>Get delivery of your orders within few days</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- ------------------------Second------------------ -->

    <!-- ------------------------SetUp------------------ -->
    <div class="fifth mt-4 w-100 py-5 " style="background-color: #F6F7F9;">
      <div class="txt text-center my-4">
        <p class="fs-5"> Now you can Set-Up</p>

        <p class="fs-3">Your Online Retail Shop Business in just 3 Easy Steps</p>
      </div>
      <DeskTopView class="d-none d-md-block"></DeskTopView>
      <mobileflipcard class="d-md-none"></mobileflipcard>
    </div>
    <!-- ------------------------SetUp------------------ -->

    <!-- ------------------------Third------------------ -->
    <div class="py-5 w-100">
      <div class="container">
        <h1 class="w-100 text-center">A powerful mobile app for quick & easy buying</h1>
        <div class="d-md-flex justify-content-center align-items-center w-100 my-5">
          <div class="mx-1 p-3 d-flex justify-content-center flex-column align-items-center">
            <p class="fw-bold fs-4 text-danger opacity-75 mb-0">Best offers and deals</p>
            <p class="text-center">Enjoy great margins! Exciting discounts on products during sale events.</p>
          </div>
          <div class="mx-1 p-3 d-flex justify-content-center flex-column align-items-center">
            <p class="fw-bold fs-4 text-danger opacity-75 mb-0 text-center">Easy browsing and Ordering</p>
            <p class="text-center">Browse for products across categories and choose from a wide range</p>
          </div>
          <div class="mx-1 p-3 d-flex justify-content-center flex-column align-items-center">
            <p class="fw-bold fs-4 text-danger opacity-75 mb-0">Safe payment options</p>
            <p class="text-center">Multiple payment options including Cash on Delivery, Debit & Credit cards, e-wallets
              and UPI
            </p>
          </div>



        </div>
      </div>
    </div>
    <!-- ------------------------Third------------------ -->

    <!-- ------------------------KYC------------------ -->
    <div class="mb-5" style="background-color: #fbf4f4; padding-bottom: 20px;">
      <h1 class="text-center py-5">Start trading in 3 simple steps</h1>
      <div class="d-flex flex-wrap justify-content-center container">
        <div v-for="(data, index) in datas" :key="index" class="col-lg-4 col-md-6 col-12 mb-4 border p-2 row g-1">
          <div class="d-flex justify-content-center align-items-center">
            <img :src="data.img" width="120" class="">
          </div>
          <h3 class="text-center">{{ data.head }}</h3>
          <p class="text-center w-100">{{ data.text }}</p>
        </div>
      </div>
      <div class="d-flex justify-content-center my-3">
        <div class="btn btn-danger fs-4">
          Register
        </div>
      </div>
    </div>
    <!-- ------------------------KYC------------------ -->

    <!-- ------------------------fourth------------------ -->
    <div class="fourth w-100 mt-4 py-5 px-5">
      <div class="text-center pb-5 " style="place-content: center;">
        <span class=" fs-5 d-flex justify-content-center text-align-center text-darker">We Provide you</span>
        <span class="text-darker fw-bold fs-3">Opportunity to Set-Up Your Online Retail Shop</span>
      </div>
      <div class="boxes d-md-flex fs-5 d-block justify-content-between mx-2">
        <div class="box my-3 me-4 w-100 p-2 text-danger  d-flex fw-bold justify-content-center align-items-center"
          style=" box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <p class="m-0">Zero Start-up Cost</p>
        </div>
        <div class="box my-3 w-100 p-2  text-danger  d-flex fw-bold justify-content-center align-items-center  "
          style=" box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <p class="m-0">Zero Maintenence Cost</p>
        </div>
      </div>
      <div class="boxes fs-5 d-md-flex  justify-content-between  px-2  ">
        <div
          class="box my-3 me-4 p-2  w-100  text-danger px-4 d-flex fw-bold justify-content-center align-items-center "
          style=" box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <p class="m-0">Own Business</p>
        </div>
        <div
          class="box my-3 me-4 p-2  w-100  text-danger px-4 d-flex fw-bold justify-content-center align-items-center   "
          style=" box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <p class="m-0">Zero Risk</p>
        </div>
        <div class="box my-3  p-2  w-100  text-danger px-4 d-flex fw-bold justify-content-center align-items-center   "
          style=" box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <p class="m-0">Quality Support</p>
        </div>
      </div>
      <div class="boxes fs-5 d-md-flex justify-content-between  px-2 ">
        <div
          class="box my-3 me-4 w-100 p-2  text-danger px-4 d-flex fw-bold justify-content-center align-items-center   "
          style=" box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <p class="m-0">Learn to Grow Online</p>
        </div>
        <div class="box my-3 w-100 p-2  text-danger px-4 d-flex fw-bold justify-content-center align-items-center   "
          style=" box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
          <p class="m-0">Seamless Income</p>
        </div>
      </div>
    </div>
    <!-- ------------------------fourth------------------ -->

    <!-- ------------------------Collection Slider------------------ -->
    <div id="slider1">
      <div class="heading d-flex justify-content-center text-center">
        <h1 class="my-5">Our Top Collections</h1>
      </div>
      <div class="slider1 ">
        <div class="slide-track1 pb-4" style="margin: -12px 0;">
          <div v-for="(catagory, index) in catagories" :key="index"
            class="slide1 d-flex flex-column justify-content-center align-items-center">
            <img :src="catagory.image" width="100">
            <b class="fs-4" style="font-family: 'Times New Roman', Times, serif;">{{ catagory.label }}</b>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------Collection Slider------------------ -->

    <!-- ------------------------user Banner------------------ -->
    <div class="tenth" style="background-color: #fbf4f4">
      <div class="heading d-flex justify-content-center text-center pt-4">
        <p class="fs-1" style="font-weight: 600;">Success Stories of Our Wholesellers</p>
      </div>
      <div class="banner w-100 d-block ">
        <UserBanner></UserBanner>
      </div>

    </div>
    <!-- ------------------------user Banner------------------ -->

    <!-- ------------------------counter------------------ -->
    <div class="bg ">
      <div class="d-flex justify-content-center">
        <h1 class="text-white">Join India's largest B2B platform</h1>
      </div>
      <div class="text-white d-md-flex justify-content-between mt-4 ">
        <div class="text-center fw-bold">
          <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
            <AutoCounter :data="30"> </AutoCounter>&nbsp;L+
          </p>
          <p class="fs-5 mt-0">Authorised Sellers</p>
        </div>
        <div class="text-center fw-bold">
          <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
            <AutoCounter :data="25"> </AutoCounter>&nbsp;k+
          </p>
          <p class="fs-5 mt-0">Fashion Categories</p>
        </div>
        <div class="text-center fw-bold">
          <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
            <AutoCounter :data="10"> </AutoCounter>&nbsp;k+
          </p>
          <p class="fs-5 mt-0">Product Already Listed</p>
        </div>
        <div class="text-center fw-bold">
          <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
            <AutoCounter :data="60"> </AutoCounter>&nbsp;L+
          </p>
          <p class="fs-5 mt-0">Happy Customer</p>
        </div>
        <div class="text-center fw-bold">
          <p class=" m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
            <AutoCounter :data="900"> </AutoCounter>&nbsp;+
          </p>
          <p class="fs-5 mt-0 d-flex justify-content-center">Daily Cities</p>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-light  fs-4 text-danger">Register</button>
      </div>
    </div>
    <!-- ------------------------counter------------------ -->

    <!-- ------------------------Brand Slider------------------ -->
    <div id="slider" class="pt-5">
      <div class="heading d-flex justify-content-center text-center">
        <div class="fs-3 fw-bold">Top brands available for a seller to resell across all categories</div>
      </div>
      <div class="slider">
        <div class="slide-track" style="padding:50px 0;">
          <div v-for="(brand, index) in brands" :key="index"
            class="slide d-flex justify-content-center align-items-center">
            <img :src="brand.image" :width="brand.width" :style="{ margin: '0px 60px', width: brand.width }">
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------Brand Slider------------------ -->

    <!-- ------------------------skill passion------------------ -->
    <div class="mt-3 py-5 px-2" id="btnn">
      <div class="container d-md-flex justify-content-center align-items-center">
        <div class="left w-100">
          <div class="fs-3">if you have a</div>
          <h1 style=" font-size: 50px; letter-spacing: 10px;">Skill, Passion & Purpose</h1>
        </div>
        <div class="right w-100">
          <img style="width: 100%;" src="img/bulb.jpg" width="100" alt="">
        </div>
      </div>
      <div class="txt text-center mt-4">
        <span class="fs-3 ">Then Choose Us as your Growth Partner</span>
      </div>
      <div class="btnn d-flex justify-content-center mt-4">
        <button data-bs-toggle="modal" href="#exampleModalToggle"
          class="px-3 bg-white button text-danger fw-bold fs-3 border border-1 border-primary rounded-3">Click
          here to Choose</button>
      </div>
    </div>
    <div class="w-100">
      <img src="img/retailpur.png" width="100%">
    </div>
    <!-- ------------------------skill passion------------------ -->

    <!-- ------------------------Social Media Banner------------------ -->
    <div class="text-light fw-bold "
      style="background-image: linear-gradient(66deg, rgba(220,53,69,1) 33.33%, rgba(229,104,116,1) 33.33%, rgba(229,104,116,1) 66.66%, rgba(220,53,69,1) 66.66%); background-size: 100% 100%; background-repeat: no-repeat; padding: 68px 70px;">
      <div class="w-100 d-md-flex justify-content-between align-items-center ">
        <h1 class="text-center">Follow Us On Social Media</h1>

        <div class="d-flex justify-content-center ">
          <i class="bi bi-linkedin fs-1 "></i>
          <i class="bi bi-instagram fs-1 ms-3"></i>
          <i class="bi bi-facebook fs-1 ms-3"></i>
        </div>
      </div>
      <!-- <div class="d-flex justify-content-center align-items-center">
            <button class="btn btn-light px-5 py-3 fs-4 fw-bold text-danger"> Register <i
                class="bi bi-arrow-right"></i></button>
          </div> -->
    </div>
    <!-- ------------------------Social Media Banner------------------ -->

    <!-- ------------------------bottom------------------ -->
    <div class="">
      <BottomComp></BottomComp>
    </div>
    <!-- ------------------------bottom------------------ -->
  </div>
</template>

<script>
import AutoCounter from '@/components/landingComp/AutoCounter.vue';
import BottomComp from '@/components/landingComp/BottomComp.vue';
import UserBanner from '@/components/landingComp/UserBanner.vue';
import DeskTopView from '@/components/landingComp/flipCard/DeskTopView.vue';


export default {
  name: "HomeView",
  data() {
    return {
      datas: [
        {
          id: 1,
          img: 'https://ud-img.azureedge.net/w_720,q_90/u/assets/ppuy1q441skzq5rkviqh.png',
          head: 'Create Account',
          text: 'Register using your mobile number. Enter your Name, Shop name and Pincode.'
        },
        {
          id: 2,
          img: 'https://ud-img.azureedge.net/w_720,q_90/u/assets/complete_kyc_pic.png',
          head: 'Complete KYC',
          text: 'Upload any one of shops KYC documents like GSTIN, Shop & Establishment Licence'
        },
        {
          id: 3,
          img: '	https://ud-img.azureedge.net/w_720,q_90/u/assets/start_buying_pic.png',
          head: 'Start Ordering',
          text: 'Browse and order products for your shop from top sellers & brands'
        },
      ],
      offline: false,
      data: null,
      typeValue: '',
      typeStatus: false,
      typeArray: ['Online Retail Shop'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    }
  },
  components: {
    AutoCounter, BottomComp, UserBanner,DeskTopView
  },
  computed: {
    catagories() {
      return this.$store.getters.getCatagories
    },
    brands() {
      return this.$store.getters.getBrands
    },
    datasP() {
      return this.$store.getters.getTest
    }
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus)
          this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      }
      else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus)
          this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      }
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
    showOfflineAlert() {
      if (!navigator.onLine) {
        this.offline = true
      }
    },
    dismissOffline() {
      this.offline = false
    },

  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
};
</script>

<style scoped lang="scss">
.bg {
  background-image: linear-gradient(66deg, rgba(220, 53, 69, 1) 33.33%, rgba(229, 104, 116, 1) 33.33%, rgba(229, 104, 116, 1) 66.66%, rgba(220, 53, 69, 1) 66.66%);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  align-items: stretch;
  box-sizing: content-box;
  padding: 34px 68px;
}

#slider {
  @mixin white-gradient {
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  }

  $animationSpeed: 15s;

  // Animation
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(calc(-250px * 5))
    }
  }

  .slider {
    background-color: white;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    height: 180px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;


    &::before,
    &::after {
      @include white-gradient;
      content: "";
      height: 150px;
      position: absolute;
      width: 50px;
      z-index: 2;
    }

    &::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }

    &::before {
      left: 0;
      top: 0;
    }

    .slide-track {
      animation: scroll $animationSpeed linear infinite;
      display: flex;
      width: calc(250px * 6);

    }

    .slide {
      height: auto;
      width: 100%;
    }
  }

  .slide img:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  .slide img {
    transition: 1s;
  }

}

#slider1 {
  @mixin white-gradient {
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  }

  $animationSpeed: 15s;

  // Animation
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(calc(-250px * 5))
    }
  }


  // Styling
  .slider1 {
    background: white;
    // box-shadow: 0 10px 10px 0px rgba(0, 0, 0, .125);
    height: 200px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;


    &::before,
    &::after {
      @include white-gradient;
      content: "";
      height: 150px;
      position: absolute;
      width: 50px;
      z-index: 2;
    }

    &::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }

    &::before {
      left: 0;
      top: 0;
    }

    .slide-track1 {
      animation: scroll $animationSpeed linear infinite;
      display: flex;
      width: calc(250px * 6);

    }

    .slide1 {
      height: auto;
      width: 100%;
    }
  }

  .slide1 img:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  .slide1 img {
    transition: 1s;
  }
}

.install-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #e1a64e !important;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.5s ease-in-out;
  z-index: 999 !important;

  .install-popup-content {
    text-align: center;
  }

  @keyframes slideIn {
    from {
      transform: translate(-50%, -70%);
      opacity: 0;
    }

    to {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
}

#TextAnimation {
  h2 {
    // font-size: 2rem;
    font-weight: 500;

    span.typed-text {
      color: #25C5FF;
    }

    span.cursor {
      display: inline-block;
      margin-left: 3px;
      width: 4px;
      background-color: #25C5FF;
      animation: cursorBlink 1s infinite;
    }

    span.cursor.typing {
      animation: none;
    }
  }

  @keyframes cursorBlink {
    49% {
      background-color: #fff;
    }

    50% {
      background-color: transparent;
    }

    99% {
      background-color: transparent;
    }
  }
}
</style>