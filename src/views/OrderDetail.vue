<template>
    <div>
        <RetailpurTopNav class="mb-3"></RetailpurTopNav>
        <div class="d-flex container mb-2 border-bottom py-2 w-100">
            <img :src="order.img" class="border rounded w-100"
                style="max-width: 100px; max-height: 100px; object-fit: cover; object-position: top;">
            <div>
                <div class="ms-2">
                    <p class="mb-0 fw-bold">{{ order.shopName }} </p>
                    <small class="mb-0 truncate"> {{ order.productName }} kjashdj akjshd kjahds akjsdh kajshd akjsdh
                        kajsh dkajsh akjsh dkajsh daskjdh </small>
                    <div class="d-flex align-items-top">
                        <p class="mb-0"><span class="fw-bold">Amt</span>: 2000</p>
                        &nbsp; | &nbsp;
                        <p class="mb-0"><span class="fw-bold">Qty</span>: 15</p>
                    </div>
                    <div class="d-flex align-items-top justify-content-end">
                        <span style="font-size: var(--x-small);">12:15pm | 23 mar 24</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex">
            <buton class="btn mx-2 btn-dark rounded-0 w-100">Shop</buton>
            <buton class="btn mx-2 btn-dark rounded-0 w-100">Re-order</buton>
        </div>
    </div>
</template>

<script>
import RetailpurTopNav from '@/components/navbar/RetailpurTopNav.vue'
export default {
    components: {
        RetailpurTopNav
    },
    computed: {
        order() {
            let orderId = this.$route.params.orderId;
            return this.$store.getters['order/getOrder'](orderId);
        },

    },
}
</script>

<style lang="scss" scoped></style>