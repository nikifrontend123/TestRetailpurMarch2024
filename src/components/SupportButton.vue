<template>
  <div>
    <div class="d-flex justify-content-center align-items-center mb-2">
      <button class="btn btn-white border-dark " :class="{ 'btn-dark ': isSupportClicked }" @click="toggleSupport"
        style="width: 140px;">
        <i v-if="isSupportClicked" class="bi-hand-thumbs-up-fill text-warning me-2 fs-5"></i>

        <span v-if="isSupportClicked">Promotion</span>
        <span v-else><i class="bi-hand-thumbs-up text-warning me-2 fs-5"></i>Promote Us</span>
      </button>
      <button class="btn btn-white border-dark  ms-3" :class="{ 'btn-dark': isFavouriteClicked }"
        @click="toggleFavourite"  style="width: 140px;">
        <i v-if="isFavouriteClicked" class="bi bi-bookmark-heart-fill text-warning me-2 fs-5"></i>
        <span v-if="isFavouriteClicked">Saved</span>
        <span v-else> <i class="bi bi-bookmark text-warning fs-5"></i> Save Us</span>
      </button>

      <!-- <button @click="saveShopData">Save Us</button> -->
      <div class="dropdown">
        <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
          class="d-flex justify-content-center align-items-center btn btn-outline-dark rounded-circle mt-1 ms-3"
          style="width: 30px; height: 30px;">
          <i class="bi bi-three-dots"></i>
        </button>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#"> <i class="bi bi-chat me-2"></i> Message</a></li>
          <li><a class="dropdown-item" href="#"> <i class="bi bi-share me-2"></i> Share</a></li>
          <li><a class="dropdown-item" href="#"> <i class="bi bi-download me-2"></i> Download</a></li>
          <li><a class="dropdown-item" href="#"> <i class="bi bi-telephone me-2"></i> Contact</a></li>
        </ul>
      </div>
    </div>
    <!-- <div class="d-flex justify-content-center">
      <div>
        <button v-if="!isDropdown" class="btn btn-primary" @click="toggleDropdown">Support</button>
        <select v-else class="form-select" aria-label="Support options" v-model="selectedOption" @change="selectOption">
          <option value="Solo Support">
            <i class="bi bi-hand-thumbs-up-fill"></i> Solo Support
          </option>
          <option value="Dual Support">
            <img src="/img/dual.png" width="25" /> Dual Support
          </option>
          <option value="None">
            <i class="bi bi-slash-circle-fill"></i> None
          </option>
        </select>
      </div>
      <RouterLink to="contact" class="text-dark">
        <i class="ms-3 bi bi-chat-dots fs-3"></i>
      </RouterLink>
      <i class="ms-3 bi" :class="starIconClass" @click="toggleStar"></i>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSupportClicked: false,
      isFavouriteClicked: false,

      isStarFilled: false,
      selectedOption: null,
      isDropdown: false,
    };
  },
  computed: {
    isSupporter() {
      return this.selectedOption === 'Solo Support' || this.selectedOption === 'Dual Support';
    },
    starIconClass() {
      return this.isStarFilled ? 'bi bi-star-fill fs-3 text-warning' : 'bi bi-star fs-3';
    }
  },
  methods: {
    saveShopData() { 
      let shopData = this.shop();
      this.$emit('save-shop', shopData);
    },
  shop() { 
    let voteId = this.$route.params.voteId;
    return this.$store.getters['shop/getShopss'](voteId);
  },
  toggleSupport() {
    this.isSupportClicked = !this.isSupportClicked;
  },
  toggleFavourite() { 
    this.isFavouriteClicked = !this.isFavouriteClicked;
    if (this.isFavouriteClicked) {
      this.saveShopData();
    }
  },
  toggleStar() {
    this.isStarFilled = !this.isStarFilled;
  },
  toggleDropdown() {
    this.isDropdown = true;
    this.selectedOption = 'Solo Support';
  },
  selectOption() {
    if (this.selectedOption === 'None') {
      this.isDropdown = false;
    }
  },
},

};
</script>

<style lang="scss" scoped></style>