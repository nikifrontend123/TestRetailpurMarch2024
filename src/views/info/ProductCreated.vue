<template>
    <div>
        <ProfileNav></ProfileNav>
        <FilterTab>
            <RouterLink to="/createProduct">
                <div class="mx-1 btn btn-outline-primary">
                    <i class="bi bi-plus-lg fs-4"></i>
                </div>
            </RouterLink>
        </FilterTab>
        <div v-if="products.length === 0">No products available</div>
        <div class="d-flex justify-content-between border-bottom" v-for="(product, index ) in products" :key="index"
            @click="editProduct(product)">
            <div class="d-flex justify-content-between p-2">
                <div>
                    <img :src="product.img" class="border rounded"
                        style="object-position: top; object-fit: cover; height: 60px; width: 60px;">
                </div>
                <p class="mb-0 truncate ms-2"> {{ product.name }}fsdf jkhsd jahsdjh saldkj laksjd lkajds
                    kalsdj aslkdj</p>
                <p class="mb-0">₹{{ product.price }}</p>
            </div>
        </div>

    </div>
</template>

<script>
import ProfileNav from '@/components/navbar/ProfileNav.vue';
import FilterTab from '@/components/FilterTab.vue';
export default {
    components: {
        ProfileNav, FilterTab
    },

    computed: {
        products() {
            return this.$store.getters['product/getProducts']
        },
    },
    methods: {
        editProduct(product) {
            this.$router.push({ name: 'EditProduct', params: { id: product.id } });

        }
    }

}
</script>

<style lang="scss" scoped></style>