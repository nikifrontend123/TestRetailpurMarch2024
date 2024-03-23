<template>
    <RetailpurTopNav></RetailpurTopNav>
    <div>
        <div class=" d-flex justify-content-center py-4 row g-2">
            <div v-for="(shop, index) in shops" :key="index" class="col-6 col-md-2 d-flex justify-content-center">
                <!-- <router-link :to="'/shop/' + shop.id" class="text-decoration-none text-dark"> -->
                <div class="bg-dark border-0 rounded-0 d-flex   flex-column justify-content-center align-items-center pt-3 text-white px-3"
                    style="width: 170px;">
                    <img :src="shop.img" alt="" style="width: 60%;">
                    <p class="fw-bold mt-2 mb-1">{{ shop.name }}</p>
                    <div class="d-flex justify-content-evenly mb-2">
                        <img src="/img/golden.png" width="15" alt="">
                        <img src="/img/silver.png" width="15" alt="">
                        <img src="/img/black.png" width="15" alt="">
                        <img src="/img/white.png" width="15" alt="">
                    </div>
                    <div class="d-flex">
                        <p class="mb-0" style="font-size: var(--x-small)">{{ shop.support }}+</p>&nbsp;
                        <p style="font-size: var(--x-small)">Promoters </p>
                    </div>
                </div>
                <!-- </router-link> -->

            </div>
        </div>

    </div>
</template>

<script>
import RetailpurTopNav from '@/components/navbar/RetailpurTopNav.vue';

export default {
    components: {
        RetailpurTopNav
    },
    computed: {
        shops() {
            return this.$store.getters['shop/getShops']
        },
    }
}
</script>

<style lang="scss" scoped></style>