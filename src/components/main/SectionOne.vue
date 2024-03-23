<template>
    <div>
        <div class="pb-5 d-flex justify-content-center w-100" style="height: 400px; color: var(--secondary-color);">
            <img :src="shop.business.img" width="100%" style="object-fit: cover;" alt="">
        </div>
        <div class=" d-flex justify-content-between align-items-center position-relative " style=" top:-90px;">
            <div class=" d-flex justify-content-start align-items-center position-relative ps-3 ">
                <img :src="shop.business.logo"
                    class="border border-secondary rounded-4 d-lg-block d-none"
                    style="width: 236px; height: 233px; background-color: #fff;">
                <img :src="shop.business.logo"
                    class="border border-secondary rounded-4 d-lg-none d-block"
                    style="width: 136px; height: 133px; background-color: #fff; object-fit: contain;">
                <div class="d-lg-none d-block mt-5">
                    <p class="w-100 mb-0 ms-1 fs-4"
                        style=" color: var(--secondary-color); letter-spacing: 1px; text-transform: uppercase;">
                        {{shop.business.shopName}}</p>
                    <div class="d-flex justify-content-evenly ">
                        <img src="/img/golden.png" width="40" alt="">
                        <img src="/img/silver.png" width="40" alt="">
                        <img src="/img/black.png" width="40" alt="">
                        <img src="/img/white.png" width="40" alt="">
                    </div>
                </div>
                <div class="d-lg-block d-none ms-3 mt-5">
                    <p class="mb-0 ms-1 fs fs-1 mb-0"
                        style="text-transform: uppercase; color: var(--secondary-color); letter-spacing: 1px">
                        {{shop.business.shopName}}</p>
                    <div class="d-flex justify-content-evenly ">
                        <img src="/img/golden.png" width="40" alt="">
                        <img src="/img/silver.png" width="40" alt="">
                        <img src="/img/black.png" width="40" alt="">
                        <img src="/img/white.png" width="40" alt="">
                    </div>
                </div>
            </div>
            <div class="d-md-flex d-none justify-content-end align-items-center me-5 pe-5 mt-5">
                <SupportButton></SupportButton>
            </div>
        </div>
    </div>
</template>

<script>
import SupportButton from '../SupportButton.vue';

export default {
    components: {
        SupportButton
    },
    computed: {
        shop() {
            let voteId = this.$route.params.voteId;
            return this.$store.getters['shop/getShopss'](voteId);
        },
    }


}
</script>

<style lang="scss" scoped></style>