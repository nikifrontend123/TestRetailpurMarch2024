<template>
  <div class="">
    <div class="container" style="padding-bottom:80px">
      <div class="row">

        <div class="position-absolute d-md-none" style="top: 20px; z-index: 999;">
          <div class="d-flex justify-content-between">
            <i @click="goBack()"
              class="bg-light opacity-75 rounded-circle border bi bi-chevron-left p-2 d-flex justify-content-center align-items-center"
              style="width: 40px; height: 40px;"></i>

            <router-link to="/main" class="text-decoration-none text-dark">
              <i class="bg-light opacity-75 rounded-circle border bi bi-house-door p-2 d-flex justify-content-center align-items-center"
                style="width: 40px; height: 40px;"></i>
            </router-link>

          </div>
        </div>


        <div class="col-lg-5 d-flex prod-img px-0">
          <div class="d-flex flex-column prod-thumb" id="scroll">
            <img class="" :src="image" style="width: 60px" v-for="(image, index) in product.images" :key="index"
              v-on:click="selectImage(image)" />
          </div>
          <div class="main-img">
            <img :src="selectedImage" class="flex-fill" style="width: 100%;" />
          </div>
        </div>
        <div class="container col-lg-7 px-3">
          <h1 class=" text-start mb-2 fs-5 py-1 text-dark text-muted">
            {{ product.name }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, blanditiis
          </h1>
          <h1 class=" text-start mb-2 fs-5 py-1 text-muted fw-bold">
            {{ product.info }}
          </h1>

          <div class="">
            <div class=" w-100 d-flex  me-0">
              <div class="col-12 text-start d-flex align-items-center justify-content-between">
                <div>
                  <span class="me-2 text-dark fw-bold fs-1">₹ {{ product.price }} / pc</span>
                </div>
                <div>
                  <p class="fw-bold m-0">Wholesale Price</p>
                  <p class="fw-bold m-0">with {{ product.moq }}pcs MOQ</p>
                </div>
              </div>
            </div>
            <p class="fw-light mb-0">(inclusive of all taxes)</p>
            <div class="my-3">
              <h6 class="">Available Sizes</h6>
              <div class="d-flex gap-2">
                <div v-for="(size, index) in product.sizes" :key="index" class="rounded-0 w-25"
                  @click="makeActiveSize(size)">
                  <input type="radio" class="btn-check" name="option" :id="'option' + index" autocomplete="off">
                  <label class="btn btn-outline-danger m-2 rounded-0" style="opacity: 80%;" :for="'option' + index">{{
              size.name }}</label>
                </div>
              </div>
              <div class="row g-0 mt-2 w-100 " style="box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.075);">
                <div class="col-6 " v-for="(size, index) in activeSize.mesurements" :key="index">
                  <div class="border-start p-3">
                    <h6>{{ size.name }}:</h6>
                    <div class="text-muted"> {{ size.value }}</div>
                  </div>
                </div>
              </div>
            </div>
            <PremiumTable></PremiumTable>

            <OrdinaryTable></OrdinaryTable>
            <div class="mb-3 mt-3">
              <h5 class="">MOQ - {{ product.moq }} pcs</h5>
              <p class="m-0 fw-light">(You will get all trending Colors & Sizes)</p>
            </div>

            <p class="mb-3"><a href="#" class="text-start text-dark fs-4">Services & Policies</a></p>
            <div class="">
              <button v-for="(service, index) in services" :key="index"
                class="py-1 text-dark bg-white border border-1 mt-2 mb-2 w-100 text-start" disabled>{{ service.name
                }}</button>
            </div>

            <div class=" mt-4 d-flex justify-content-center ">
              <p class="mb-1 fs-6">Couldn't find your size?</p>
            </div>

            <!-- Button trigger modal -->
            <div class="d-flex justify-content-center">
              <a href="" class=" text-center text-dark fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Request your size here
              </a>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Size Guide</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0240/6641/files/Main_Sizing_Chart-_Women_s_d624cf9c-29ed-4068-b9a0-85a45332df2d_1024x1024.png?v=1672094464"
                      alt="" style="width: 100%;">

                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-light" style="z-index: 20 !important;">
      <div class="w-100 d-flex justify-content-between align-items-center position-fixed px-2"
        style="height: 63px; bottom: 0; background: #f6f6f6;">
        <div>
          <div class="bg-white d-flex align-items-center p-2">
            <p class="fw-bold pe-2 mb-0">Qty:</p>
            <button class="btn btn-dark rounded-0" @click="decrement">-</button>
            <input class="text-center form-control rounded-0 w-25" type="number" v-model="quantity" />
            <button class="btn btn-dark rounded-0" @click="increment">+</button>
          </div>
        </div>
        <div class="w-100">
          <button @click="addToCart" class="top-brand btn w-100 d-flex justify-content-center align-items-center">
            <i class="bi bi-bag-check fs-2"></i>
            <p class="text-center m-0 ms-2">Add to cart</p>
          </button>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
// import OrdinaryTable from '@/components/ProductTable/OrdinaryTable.vue';
// import PremiumTable from '@/components/ProductTable/PremiumTable.vue';
// import ProductTopnav from '@/components/navbar/ProductTopnav.vue';
import FavCatalog from '@/mixins/FavCatalog.js'

export default {
  name: "CatalogDetailPage",
  mixins: [FavCatalog],
  data() {
    return {
      selectedImage: {},
      quantity: 1,
      activeSize: {},
      services: [
        { id: 1, name: 'Payment Mode:- Cash Payment Only' },
        { id: 2, name: 'Delivery Mode:- Pickup Services Only' },
        { id: 3, name: 'Exchange Policy:-Unavailable Services' },
        { id: 4, name: 'Return Policy:-Unavailable Services' },
      ]
    }

  },

  components: {
    // PremiumTable,
    // OrdinaryTable,
    // ProductTopnav,
  },
  mounted() {
    this.selectedImage = this.product.images[0];

  },
  computed: {

    product() {
      let productId = this.$route.params.productId;
      return this.$store.getters['catalog/getProduct'](productId);
    }
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
    selectImage(image) {
      this.selectedImage = image;
    },
    makeActiveSize(size) {
      this.activeSize = size;
    },
    goBack() {
      window.history.back();
    }
  }
};
</script>


<style scoped>
@media (max-width:999px) {
  .prod-img {
    display: flex;
    flex-direction: column-reverse;
  }

  .prod-thumb {
    flex-direction: row !important;
    gap: 1rem;
    margin: 1rem 2rem 1rem 2rem;
    overflow: scroll;
  }

  .main-img {
    width: 100%;
    /* padding-right: 12px !important; */
    margin-right: 0.5rem !important;
  }
}

#scroll::-webkit-scrollbar {
  background-color: none;
  display: none;
}
</style>