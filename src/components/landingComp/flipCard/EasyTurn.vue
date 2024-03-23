<template>
    <div class="main">
        

        <!-- <div class="heading d-flex justify-content-center">
                <h2>Start Online Selling in 4 simple steps</h2>
            </div>
            <div class="imgs d-flex justify-content-between">
                <div style=" display: grid; place-items: center; justify-content: center;align-items: center;"
                    class="img w-100">
                    <img class="d-flex justify-content-center" src="../../assets/account.jpg" width="25%" alt="">
                    <h4 class="w-100 d-flex justify-content-center align-items-center">
                        Creat an account</h4>
                    <p class="text-center">
                        Get Your Free Registration and become our Authorised Online Seller, using your mobile number.
                    </p>
                </div>
                <div style="display: grid; place-items: center; justify-content: center;align-items: center; "
                    class="img w-100">
                    <img src="../../assets/kyc.jpg" width="25%" alt="">
                    <h4 class="w-100 d-flex justify-content-center align-items-center ">
                        Complete Your KYC</h4>
                    <p class="text-center">
                        Complete your verification process by upload your Adhar Card as Identity Proof & Pan Card as Income
                        Proof and Any document for your Current Address verification.
                    </p>
                </div>
                <div style=" display: grid; place-items: center; justify-content: center;align-items: center;"
                    class="img w-100">
                    <img src="../../assets/setup.jpg" width="25%" alt="">
                    <h4 class="w-100 d-flex justify-content-center ">Setup Your E-Shop</h4>
                    <p class="text-center">
                        Set-up your shop, by adding Basic Details, Business Details, Bank Details, Customisation of your
                        shop as per your Branding and Adding the Catalougs you want sale.
                    </p>
                </div>
                <div style=" display: grid; place-items: center; justify-content: center;align-items: center;"
                    class="img w-100">
                    <img src="../../assets/selling.jpg" width="25%" alt="">
                    <h4 class="w-100 d-flex justify-content-center ">Start Selling Online</h4>
                    <p class="text-center">
                        Start Selling on your own e-commerce website, with your Branding, and Customisation. And earn upto
                        25% Commision on every sale on your website.
                    </p>
                </div>
            </div> -->

        <div class="">
            <div>
                <FrontPageData title="Turn to your own E-Retail Shop in 4 simple steps" />
            </div>
        </div>
        <div class="imgss d-flex justify-content-between w100">
            <div class=" d-flex justify-content-center w-100">
            <img style="width: 24%;" src="img/CreateAccount.png"   alt="">
            </div>
            <div class="d-flex justify-content-center w-100">
            <img style="width:30%;" src="img/CompleteKYC.png"   alt="">
            </div>
            <div class="d-flex justify-content-center  w-100">
            <img style="width: 20%;" src="img/SetupE-shop.png"   alt="">
            </div>
            <div class="d-flex justify-content-center w-100">
            <img style="width: 20%;" src="img/satrtSelling.png"   alt="">
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <div class="w-100">
                <FrontPageData titleh4="Create Account"
                    text="Get Your Free Registration and become our Authorised Online Retailer, using your mobile number. " />
            </div>
            <div class="w-100">
                <FrontPageData titleh4="Complete KYC"
                    text="Complete your verification process by upload your Adhar Card as Identity Proof & Pan Card as Income Proof and Any document for your Current Address verification. " />
            </div>
            <div class="w-100">
                <FrontPageData titleh4="Setup E-Shop"
                    text="As far as you learn the updation of your e-shop you are ready to learn promotion, here you need learn how to promote your e-shop with" />
            </div>
            <div class="w-100">
                <FrontPageData titleh4="Start Selling"
                    text="Start Selling on your own e-commerce website, with your Branding, and Customisation. And earn upto 50% Commision on every sale on your website." />
            </div>
        </div>

        <!-- <div class="d-flex justify-content-between w-100">
            <div class="first w-100 shadow pt-3">
                <div class=" d-flex justify-content-center w-100">
                    <img src="../../assets/CreateAccount.png" width="100" alt="">
                </div>
                <div class="w-100 mx-3 px-3">
                    <FrontPageData titleh4="Create Account"
                    text="Get Your Free Registration and become our Authorised Online Retailer, using your mobile number. " />
                </div>
            </div>
            <div class="sec w-100 shadow pt-3">
                <div class="d-flex justify-content-center w-100">
                    <img src="../../assets/CompleteKYC.png" width="100" alt="">
                </div>
                <div class="w-100 mx-3 px-3">
                    <FrontPageData titleh4="Complete KYC"
                    text="Complete your verification process by upload your Adhar Card as Identity Proof & Pan Card as Income Proof and Any document for your Current Address verification. " />
                </div>
            </div>
            <div class="third w-100 shadow pt-3">
                <div class="d-flex justify-content-center w-100">
                    <img src="../../assets/SetupE-shop.png" width="100" alt="">
                </div>
                <div class="w-100 mx-3 px-3">
                    <FrontPageData titleh4="Setup E-Shop"
                    text="As far as you learn the updation of your e-shop you are ready to learn promotion, here you need learn how to promote your e-shop with" />
                </div>
            </div>
            <div class="fourth w-100 shadow pt-3">
                <div class="d-flex justify-content-center w-100">
                    <img src="../../assets/satrtSelling.png" width="100" alt="">
                </div>
                <div class="w-100 mx-3 px-3">
                    <FrontPageData titleh4="Start Selling"
                    text="Start Selling on your own e-commerce website, with your Branding, and Customisation. And earn upto 50% Commision on every sale on your website." />
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import FrontPageData from './FrontPageData.vue';

export default {
    components: { FrontPageData },


}
</script>
<style scoped>
.main{
    background-color: #daefec;
}
</style>