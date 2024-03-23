<template>
    <RetailpurTopNav></RetailpurTopNav>
    <div class="" style="padding-bottom:80px">
        <div v-if="savedShops.length === 0"
            class="bg-light w-100 d-flex flex-column justify-content-center align-items-center"
            style="height: 50%; padding: 90px 0px;">
            <i class="bi bi-search fs-1"></i>
            <h3>Hmm, There is no shops in saved.</h3>
        </div>
 
        <div class="d-flex py-4">
            <div v-for="(savedShop, index) in savedShops" :key="index" class="mx-2 position-relative px-2">
                <router-link :to="'/shop/' + savedShop.id" class="text-decoration-none text-dark">
                    <div class="bg-dark border-0 rounded-0 d-flex flex-column justify-content-center align-items-center pt-3 text-white px-3"
                        style="width: 140px;">
                        <img :src="savedShop.img" alt="" style="width: 60%;">
                        <p class="fw-bold mt-2 mb-1">{{ savedShop.name }}</p>
                        <div class="d-flex justify-content-evenly mb-2">
                            <img src="/img/golden.png" width="15" alt="">
                            <img src="/img/silver.png" width="15" alt="">
                            <img src="/img/black.png" width="15" alt="">
                            <img src="/img/white.png" width="15" alt="">
                        </div>

                        <div class="d-flex">
                            <p class="mb-0" style="font-size: var(--x-small)">{{ savedShop.support }}+</p>&nbsp;
                            <p style="font-size: var(--x-small)">Promoters </p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

    </div>
</template>
<script>
import RetailpurTopNav from '@/components/navbar/RetailpurTopNav.vue'

import router from '../router';
export default {
    name: "SavedProudct",
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        savedShops() {
            return this.$store.getters['shop/getSavedShop']
        },
        shops() {
            const shopName = this.$route.params.name;
            if (shopName) {
                return this.$store.getters['shop/getShopss'](shopName);
            } else {
                return this.$store.getters['shop/getShops'];
            }
        }
    },
    components: {
        RetailpurTopNav,
    },
    methods: {
        showProduct(product) {
            return this.$store.dispatch('catalog/selectProduct', product).then(
                () => {
                    router.push('/catalog-page/' + product.id)
                }
            )
        },
        unSaveProduct(productIndex) {
            this.$store.dispatch('catalog/unSaveProduct', productIndex)
        }
    }

}
</script>
