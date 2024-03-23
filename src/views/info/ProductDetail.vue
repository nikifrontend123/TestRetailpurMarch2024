<template>
    <div>
        <ProfileNav></ProfileNav>
        <div class="d-flex container mb-2 border-bottom py-2 w-100">
            <img :src="product.img" class="border rounded w-100"
                style="max-width: 100px; max-height: 100px; object-fit: cover; object-position: top;">
            <div>
                <div class="ms-2">
                    <p class="mb-0 fw-bold">{{ product.name }} </p>
                    <div class="d-flex align-items-top">
                        <p class="mb-0"><span class="fw-bold">Amt</span>: 2000</p>
                        &nbsp; | &nbsp;
                        <p class="mb-0"><span class="fw-bold">Qty</span>: 15</p>
                    </div>
                    <div class="d-flex align-items-top">
                        <p class="mb-0"><span class="fw-bold">Unit</span>: {{ product.unit }}</p>
                        &nbsp; | &nbsp;
                        <p class="mb-0"><span class="fw-bold">MOQ</span>: {{ product.moq }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileNav from '@/components/navbar/ProfileNav.vue';
export default {
    components: {
        ProfileNav
    },
    computed: {
        product() {
            let productId = this.$route.params.productId;
            return this.$store.getters['product/getProduct'](productId);
        },

    }
}
</script>

<style lang="scss" scoped></style>