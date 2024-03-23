<template>
    <ProfileNav></ProfileNav>
    <div class="container mt-3 mb-5">
        <p class="fs-5 text-center">{{ editingProduct ? 'Edit Product' : 'Add your Promoter' }}</p >
        <form class="row g-3" @submit.prevent="saveProduct">
            <ImageUploadBox @imageUploaded="handleImageUploaded"></ImageUploadBox>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="name" v-model="newProduct.name">
                <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="name" v-model="newProduct.id">
                <label for="floatingInput">Promoters</label>
            </div>
           

            <button type="submit" class="btn btn-primary">{{ editingProduct ? 'Update' : 'Create' }}</button>
        </form>
    </div>

</template>

<script>
import ProfileNav from '@/components/navbar/ProfileNav.vue';
import ImageUploadBox from '@/components/ImageUploadBox.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        ProfileNav,
        ImageUploadBox
    },
    props: {
        editingProduct: {
            type: Object,
        }
    },
    data() {
        return {
            newProduct: {
                name: '',
                id: '',
                price: '',
                unit: '',
                moq: '',
                imageUrl: ''
            },
        };
    },
    methods: {
        ...mapActions('promoter', ['addProduct', 'updateProduct']),
        saveProduct() {
            if (this.newProduct.name.trim()) {
                if (this.editingProduct) {
                    this.updateProduct({ ...this.newProduct });
                } else {
                    this.addProduct({ ...this.newProduct });
                }
                this.resetMainForm();
            } else {
                alert('Please enter a product name');
            }
        },
        resetMainForm() {
            this.newProduct = { ...this.editingProduct };
        },
        handleImageUploaded(imageUrl) {
            this.newProduct.imageUrl = imageUrl;
        },
        handleFileUpload(event) {
            this.newColor.images = Array.from(event.target.files);
        },
        
    },
    created() {
        if (this.editingProduct) {
            this.newProduct = { ...this.editingProduct };
        }
    },
};
</script>

<style lang="scss" scoped></style>