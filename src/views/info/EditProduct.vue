<template>
    <div>
        <!-- <h2>Edit Product</h2> -->
        <CreateProduct :editingProduct="productToEdit" />
    </div>
</template>

<script>
import CreateProduct from '@/views/info/CreateProduct.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        CreateProduct
    },
    data() {
        return {
            productToEdit: null
        };
    },
    methods: {
        ...mapActions('product', ['fetchProductById']), // Mapping the fetchProductById action

        async fetchProduct() {
            try {
                const productId = this.$route.params.productId;
                this.productToEdit = await this.fetchProductById(productId); // Using the fetchProductById action
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }
    },
    created() {
        this.fetchProduct(); // Fetch product data when the component is created
    }
};
</script>
