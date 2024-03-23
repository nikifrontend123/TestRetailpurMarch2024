<template>
    <ProfileNav></ProfileNav>
    <div class="container mt-3 mb-5">
        <p class="fs-5 text-center">{{ editingProduct ? 'Edit Product' : 'Add your Product' }}</p >
        <form class="row g-3" @submit.prevent="saveProduct">
            <!-- <ImageUploadBox @imageUploaded="handleImageUploaded"></ImageUploadBox> -->
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="name" v-model="newProduct.name">
                <label for="floatingInput">Product Name</label>
            </div>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="name" v-model="newProduct.id">
                <label for="floatingInput">Product Id</label>
            </div>
            <div class="form-floating mb-2">
                <input type="number" class="form-control" id="floatingInput" placeholder="name"
                    v-model="newProduct.price">
                <label for="floatingInput">Price</label>
            </div>
            <div class="form-floating mb-2">
                <input type="number" class="form-control" id="floatingInput" placeholder="name"
                    v-model="newProduct.unit">
                <label for="floatingInput">Unit</label>
            </div>
            <div class="form-floating mb-2">
                <input type="number" class="form-control" id="floatingInput" placeholder="name"
                    v-model="newProduct.moq">
                <label for="floatingInput">MOQ</label>
            </div>
            <!-- ----------------------- -->
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Product Options
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="mb-4">
                                <div class="card-body">
                                    <form @submit.prevent="saveColor">
                                        <div class="mb-3">
                                            <label for="colorName" class="form-label">Fabric Color Name</label>
                                            <input type="text" class="form-control" id="colorName"
                                                v-model="newColor.colorName" required>
                                        </div>
                                        <div class="mb-3">
                                            <label for="colorCode" class="form-label">Fabric Color Code</label>
                                            <input type="text" class="form-control" id="colorCode"
                                                v-model="newColor.colorCode"
                                                placeholder="Use hex color code, e.g., #a0b0c0" required>
                                        </div>
                                        <div class="mb-3">
                                            <label for="colorImage" class="form-label">Choose Files</label>
                                            <input type="file" class="form-control" id="colorImage"
                                                @change="handleFileUpload" multiple>
                                            <div class="form-text">Upload the Fabric images for this color only
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <button type="button" class="btn btn-secondary"
                                                @click="resetForm">Reset</button>
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-4" v-for="(color, index) in colors" :key="index">
                                    <div class="card mb-2">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center mb-3">
                                                <!-- <img :src="color.images"> -->
                                                <div :style="{ backgroundColor: color.colorCode }"
                                                    class="color-box me-2" style="width: 30px; height: 30px;"></div>
                                                <h5 class="card-title mb-0">{{ color.colorName }}</h5>
                                                <h5 class="card-title mb-0">{{ color.colorCode }}</h5>
                                            </div>
                                            <div class="d-flex justify-content-end">
                                                <button class="btn btn-sm btn-outline-secondary me-2"><i
                                                        class="bi bi-pencil"></i></button>
                                                <button class="btn btn-sm btn-outline-danger"
                                                    @click="deleteColor(index)"><i class="bi bi-trash"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ----------------------- -->

            <!-- ----------------------- -->
            <div class="accordion" id="accordionSizes">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseSizes" aria-expanded="true" aria-controls="collapseSizes">
                            Product Sizes
                        </button>
                    </h2>
                    <div id="collapseSizes" class="accordion-collapse collapse show" data-bs-parent="#accordionSizes">
                        <div class="accordion-body">
                            <div class="mb-4">
                                <div class="card-body">
                                    <form @submit.prevent="saveSize">
                                        <div class="mb-3">
                                            <label for="size" class="form-label">Size</label>
                                            <input type="text" class="form-control" id="size" v-model="newSize.size"
                                                required>
                                        </div>
                                        <div class="mb-3">
                                            <label for="sizePrice" class="form-label">Price</label>
                                            <input type="number" class="form-control" id="sizePrice"
                                                v-model="newSize.price" required>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <button type="button" class="btn btn-secondary"
                                                @click="resetSizeForm">Reset</button>
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4" v-for="(size, index) in sizes" :key="index">
                                    <div class="card mb-2">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-start">
                                                <div class="">
                                                    <p class="mb-0">
                                                        <span class="fw-bold">Size : </span>
                                                        {{ size.size }}
                                                    </p>
                                                    <p class="mb-0">
                                                        <span class="fw-bold">Price : </span>
                                                        {{ size.price }}
                                                    </p>
                                                </div>
                                                <div class="d-flex justify-content-end">
                                                    <button class="btn btn-sm btn-outline-secondary me-2"><i
                                                            class="bi bi-pencil"></i></button>
                                                    <button class="btn btn-sm btn-outline-danger"
                                                        @click="deleteSize(index)"><i class="bi bi-trash"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ----------------------- -->
            <div class="accordion" id="accordionSizes">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseSizes" aria-expanded="true" aria-controls="collapseSizes">
                            Product Sizes
                        </button>
                    </h2>
                    <div id="collapseSizes" class="accordion-collapse collapse show" data-bs-parent="#accordionSizes">
                        <div class="accordion-body">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Select Collection</option>
                                <option value="1">Collection One</option>
                                <option value="2">Collection Two</option>
                                <option value="3">Collection Three</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ----------------------- -->

            <button type="submit" class="btn btn-primary">{{ editingProduct ? 'Update' : 'Create' }}</button>
        </form>
    </div>

</template>

<script>
import ProfileNav from '@/components/navbar/ProfileNav.vue';
// import ImageUploadBox from '@/components/ImageUploadBox.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        ProfileNav,
        // ImageUploadBox
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
            newColor: {
                colorName: '',
                colorCode: '',
                images: []
            },
            newSize: {
                size: '',
                price: ''
            },
            colors: [],
            sizes: []
        };
    },
    methods: {
        ...mapActions('product', ['addProduct', 'updateProduct']),
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
        deleteColor(index) {
            this.colors.splice(index, 1);
        },
        deleteSize(index) {
            this.sizes.splice(index, 1);
        },
        saveColor(event) {
            event.preventDefault();
            if (this.newColor.colorName && this.newColor.colorCode) {
                this.colors.push({ ...this.newColor });
                this.resetForm();
            } else {
                alert('Please enter a color name and color code');
            }
        },
        resetForm() {
            this.newColor = {
                colorName: '',
                colorCode: '',
                images: []
            };
        },
        saveSize(event) {
            event.preventDefault();
            if (this.newSize.size && this.newSize.price) {
                this.sizes.push({ ...this.newSize });
                this.resetSizeForm();
            } else {
                alert('Please enter a size and price');
            }
        },
        resetSizeForm() {
            this.newSize = {
                size: '',
                price: ''
            };
        }
    },
    created() {
        if (this.editingProduct) {
            this.newProduct = { ...this.editingProduct };
        }
    },
};
</script>

<style lang="scss" scoped></style>