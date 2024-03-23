<template>
    <h1 class="text-center mt-4">Products</h1>
    <div class="container" style="padding-top:20px;padding-bottom:80px">
        <div class="position-absolute  row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3" style="width: 380px; height: 420px;">
            <div class="col " v-for="(product, index) in products" :key="index">
                <div class="card show-on-hover rounded-0  ">
                    <div :id="'productImages' + index" class="carousel slide">
                        <div class="carousel-inner">
                            <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                :class="{ active: imgIndex === 0 }" v-for="(image, imgIndex) in product.images"
                                :key="imgIndex">
                                <img @click="toggle(index)" :src="image" class="card-img-top rounded-0" alt=""
                                    style="min-height:100px;">
                            </div>
                        </div>
                        <div v-if="!isActive[index]" class="d-flex mt-1" id="scroll" style="overflow-x: scroll;">
                            <button type="button" class="rounded-circle p-0 border me-1"
                                :data-bs-target="'#productImages' + index" :data-bs-slide-to="imgIndex"
                                :class="{ active: imgIndex === 0 }" :aria-current="imgIndex === 0 ? true : false"
                                v-for="(image, imgIndex) in product.images" :key="imgIndex">
                                <img :src="image" class="rounded-circle" alt=""
                                    style="width: 35px; height: 35px; object-fit: fill;">
                            </button>
                        </div>
                    </div>

                    <div class="card-body" style="padding:3px">
                        <div class="d-flex justify-content-between mt-1 ms-1 pb-1">
                            <p class="m-0 fw-bold" style="font-size:13px;">₹{{ product.price }} / pc</p>
                            <p class="m-0 fw-bold" style="font-size:13px;">{{ product.info }}</p>

                        </div>

                    </div>
                </div>

                <div v-if="isActive[index]" class="theback position-relative "
                    style="background: #00000099; color: #fffdfd;">
                    <div style="background: #00000099; color: #fffdfd;" class=" top-100">
                        <div class="right ">
                            <i style="color: #ffffff;  position: absolute; top: 5px; right: 8px; font-size: 20px;"
                                class="rounded-circle p-1 d-flex justify-content-center align-items-center fs-4 button button-info bi bi-phone-flip"></i>
                        </div>
                        <div class="right">
                            <div @click="isActive = !isActive" style="cursor:pointer"
                                class="position-absolute top-0 start-0 end-0 bottom-0"></div>
                        </div>
                        <div style="position: absolute;bottom: 0;width: 100%;" class="fw-bold">
                            <p class="text-center mb-0 fs-5">Sardar Ledger</p>
                            <p style="font-size: var(--x-small);" class="text-center mb-2">Balance Quantity</p>
                            <div class="d-flex justify-content-between text-align-center mb-2 ">
                                <p class="mb-0 w-100 text-center">
                                    <span class="fs-4">500</span><br>
                                    <span style="font-size: var(--x-small);">Incoming</span>
                                </p>
                                <p class="mb-0 w-100"></p>
                                <p class="mb-0 w-100 text-center">
                                    <span class="fs-4">300</span><br>
                                    <span style="font-size: var(--x-small);">Ready</span>
                                </p>
                            </div>
                            <div class=" d-flex justify-content-center text-align-center">
                                <div class="d-flex align-items-center flex-column bg-dark border w-100 fw-bold p-0">
                                    <i class="bi bi-plus-lg"></i>
                                    <p class="m-0" style="font-size:12px;">Order</p>
                                </div>
                                <div class="d-flex align-items-center flex-column bg-dark border w-100 fw-bold p-0">
                                    <i class="bi bi-eye"></i>
                                    <p class="m-0" style="font-size:12px;">View</p>
                                </div>
                                <div class="d-flex align-items-center flex-column bg-dark border w-100 fw-bold p-0">
                                    <i class="bi bi-plus-lg"></i>
                                    <p class="m-0" style="font-size:12px;">Demand</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CardCatelog",
    data() {
        return {
            publicPath: process.env.BASE_URL,
            isActive: [],
        }
    },
    computed: {
        products() {
            return this.$store.getters['catalog/getProducts']
        },
    },
    methods: {
        toggle(index) {
            if (index >= 0 && index < this.products.length) {
                if (!Array.isArray(this.isActive)) {
                    this.isActive = [];
                }
                this.isActive[index] = !this.isActive[index];
            }
        },
    },
}
</script>
<style>
.show-on-hover .soh-div {
    opacity: .75;
}

.show-on-hover:hover .soh-div {
    opacity: 1;
}

.test {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #505050;
}

#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}
</style>
