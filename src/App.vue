<template>
  <div>
    <router-view />
    <!-- <BottomNavbar></BottomNavbar> -->
    <BottomNavbar v-if="!hide"></BottomNavbar>
  </div>
</template>
<script>
import BottomNavbar from "./components/navbar/BottomNavbar.vue";
export default {
  components: {
    BottomNavbar
  },
  computed: {
    //   hide() {
    //     const hiddenPages = ['ProfilePage', 'CatalogDetailPage', 'EmailVerificationPage', 'ForgotPasswordPage', 'LoginPage', 'OTPPage', 'RegistrationPage', 'ResetPasswordPage','DeliveryAndPaymentMode'];
    //     return hiddenPages.includes(this.$route.name)
    //   }
    hide() {
      const hiddenPages = ['promoters', 'EditProduct', 'productDetail', 'product', 'createProduct', 'createCollection', 'profile', 'ProfileDetail', 'ContactDetail', 'BusinessType', 'WorkTime', 'basicInfo', 'ContactForm', 'LandingPage', 'EmailVerificationPage', 'ForgotPasswordPage', 'LoginPage', 'OTPPage', 'RegistrationPage', 'ResetPasswordPage',];
      return hiddenPages.includes(this.$route.name)
    }
  }
}
</script>
<style>
:root {
  --primary-color: #EDC3AB;
  --secondary-color: #231F20;
  --x-small: .700em;
}

.top-brand {
  background: #E35D6A !important;
  border-color: #6d6c6c !important;
  color: white;
}

.top-brand-secondary {
  background: #D5F591 !important;
  font-weight: 600;
}

.brand-text {
  color: white;
}

.bill {
  overflow: hidden;
  text-align: center;
}

.bill>span {
  position: relative;
  display: inline-block;
  /* color: var(--primary-color); */
}


.bill>span:before,
.bill>span:after {
  content: '';
  position: absolute;
  top: 50%;
  border-bottom: 2px solid black;
  /* border-bottom: 2px solid var(--primary-color); */
  width: 900px;
  /* width: 591px; */
  margin: 0 20px;
}

.bill>span:before {
  right: 100%;
}

.bill>span:after {
  left: 100%;
}

.truncate {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 3em;
  overflow: hidden;
}

.truncate1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-height: 3em;
  overflow: hidden;
}
</style>
