<template>
    <div class="main">
        <div>
            <FrontPageData title="Earn from your E-Shop in 2 simple steps" />
        </div>
        

        <div class="d-flex justify-content-between w-100">
            <div class="first w-100  pt-3">
                <div class=" d-flex justify-content-center w-100">
                    <img src="img/SocialMedia.jpg" width="100" alt="">
                </div>
                <div class="w-100 ">
                    <FrontPageData titleh4="Social Media Sharing" text="You just need to update your e-shop, with trend" />
                </div>
            </div>
            <div class="sec w-100  pt-3">
                <div class="d-flex justify-content-center w-100">
                    <img src="img/Commission.png" width="100" alt="">
                </div>
                <div class="w-100 ">
                <FrontPageData titleh4="Commission upto 50%"
                    text="Set-up your shop, by adding Basic Details, Business Details, Bank Details, Customisation of your shop as per your Branding and Adding the Catalougs you want sale." />
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import FrontPageData from './FrontPageData.vue';

export default {
    components: { FrontPageData },
    // computed: {
    //     imgurls() {
    //         return new URL(this.EasyEarn.img1, import.meta.url).href
    //     }
    // }

}
</script>
<style scoped>
.main {
    background-color: #e8fcd6;
}
</style>