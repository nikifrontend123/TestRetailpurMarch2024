<template>
    <SavedProductTopnav></SavedProductTopnav>
    <div class="" style="padding-top:60px;padding-bottom:80px">

        <div v-if="savedProducts.length === 0"
            class="bg-light w-100 d-flex flex-column justify-content-center align-items-center"
            style="height: 50%; padding: 90px 0px;">
            <i class="bi bi-search fs-1"></i>
            <h3>Hmm, can't find any items.</h3>
        </div>

        <div class="container">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
                <div class="col" v-for="(product, index) in savedProducts" :key="index">
                    <div class="card show-on-hover rounded-0">
                        <router-link :to="'/ProductPage/' + product.id" class="text-decoration-none text-dark">
                            <div :id="'productImages' + index" class="carousel slide">
                                <div class="carousel-inner">
                                    <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                        :class="{ active: imgIndex === 0 }" v-for="(image, imgIndex) in product.images"
                                        :key="imgIndex">
                                        <img :src="image" class="card-img-top rounded-0" alt="" style="min-height:100px;">
                                    </div>
                                </div>
                                <div class="d-flex mt-1" id="scroll" style="overflow-x: scroll;">
                                    <button type="button" class="rounded-circle p-0 border me-1"
                                        :data-bs-target="'#productImages' + index" :data-bs-slide-to="imgIndex"
                                        :class="{ active: imgIndex === 0 }" :aria-current="imgIndex === 0 ? true : false"
                                        v-for="(image, imgIndex) in product.images" :key="imgIndex">
                                        <img :src="image" class="rounded-circle" alt=""
                                            style="width: 35px; height: 35px; object-fit: fill;">
                                    </button>
                                </div>
                            </div>
                        </router-link>
                        <div @click="showProduct(product)" class=" position-absolute w-100 soh-div">
                            <div class="d-flex flex-column align-items-start"
                                style="max-height:200px; overflow-y:scroll;margin-top: 3px !important;">
                                <div class=" m-0 p-1 fw-bold bg-light rounded-circle d-flex flex-column align-items-center"
                                    style="font-size:9px;width: 35px; height: 35px;margin-left:2.5px !important">
                                    <p class="m-0">{{ product.moq }}</p>
                                    <p class="m-0">MOQ</p>
                                </div>
                                <CardSize :sizes="product.sizes" class="ms-2" style="margin-top: 0.08rem !important;">
                                </CardSize>
                            </div>
                        </div>

                        <div class="card-body" style="padding:3px">
                            <div class="d-flex justify-content-between mt-1 ms-1 pb-1">
                                <p class="m-0 fw-bold" style="font-size:13px;">₹{{ product.price }} / pc</p>
                                <p class="m-0 fw-bold" style="font-size:13px;">{{ product.info }}</p>

                            </div>
                        </div>
                        <div class="card-footer rounded-0 p-0" style="">
                            <div class="btn-group w-100 overflow-hidden"
                                style="opacity: .85;border-radius: 0px !important;">
                                <div class="w-50 border-end">
                                    <button type="button" class="btn btn-danger rounded-0 w-100 h-100"
                                        @click="unSaveProduct(productIndex)">
                                        <i class="bi bi-heart-fill fs-4"></i>
                                    </button>
                                </div>
                                <div class="w-50 ">
                                    <input type="checkbox" class="btn-check" name="cart" :id="'cart' + product.id"
                                        autocomplete="off">
                                    <label class="btn btn-outline-primary rounded-0 border-0 w-100"
                                        :for="'cart' + product.id" style="padding:0px  !important">
                                        <i class="bi bi-cart-plus fs-3"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <HomePageCard></HomePageCard>

    </div>
</template>
<script>
import SavedProductTopnav from '../NavBar/SavedProductTopnav.vue';
import CardSize from '../Catelog/CardSize.vue';
import HomePageCard from '../Collection/HomePageCard.vue';
export default {
    name: "SavedProudct",
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        savedProducts() {
            return this.$store.getters.getSavedProducts
        }
    },
    components: {
        CardSize,
        SavedProductTopnav,
        HomePageCard
    },
    methods: {
        unSaveProduct(productIndex) {
            this.$store.dispatch('unSaveProduct', productIndex)
        }
    }

}
</script>
