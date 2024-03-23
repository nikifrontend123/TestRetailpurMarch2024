<template>
    <h1 class="text-center mt-4">You May Also Like</h1>
    <div class="container" style="padding-top:20px;padding-bottom:80px">
        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
            <div class="col" v-for="(product, index) in products" :key="index">
                <div class="card show-on-hover rounded-0">
                    <router-link :to="'/catalog-page/' + product.id" class="text-decoration-none text-dark">
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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CardSize from '../Catelog/CardSize.vue';
import router from '../../router';

export default {
    name: "CardCatelog",
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        products() {
            return this.$store.getters['catalog/getProducts']
        },
    },
    methods: {
        showProduct(product) {
            return this.$store.dispatch('catalog/selectProduct', product).then(
                () => {
                    router.push('/catalog-page/' + product.id)
                }
            )
        },
    },
    components: {
        CardSize,
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
