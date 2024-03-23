<template>
  <RetailpurTopNav></RetailpurTopNav>
  <div>
    <div id="carouselExampleInterval" class="carousel slide row-cols-xl" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src="img/banners/b1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="img/banners/b2.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="img/banners/b3.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="img/banners/b4.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <p class="p-2 text-center mt-3 mb-0 bill madimi-one-regular"><span class="fs-5">~ CATAGORIES ~</span></p>
    <div class="d-flex " style="overflow-x: scroll;">
      <div v-for="(cat, index) in catagory" :key="index" class="me-2">
        <div class="p-3 border">
          <p class="fw-bold text-center w-100">{{ cat.text }}</p>
          <img :src="cat.img" width="70" alt="">
        </div>
      </div>
    </div>

    <div class="py-2 bg-light"  >
      <div class="d-flex justify-content-between align-items-end mt-3 pt-2">
        <div class="">
          <p class="ps-2 text-start fw-bold mb-0"><span class="fs-4"> <i class="bi bi-star-fill"></i> Delhi's</span></p>
          <p class="ps-2 text-start   mb-0"><span style="">Top Retailers</span></p>
        </div>
        <RouterLink to="/AllMarket" class="text-dark text-decoration-none">
          <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
        </RouterLink>
      </div>

      <div class="d-flex py-4" style="overflow-x: scroll; overflow-y: hidden;">
        <div v-for="(vote, index) in shops" :key="index" class="mx-2 position-relative px-2">
          <router-link :to="'/shop/' + vote.id" class="text-decoration-none text-dark">
            <div
              class="bg-light border rounded-2 d-flex flex-column justify-content-center align-items-center pt-3 text-dark px-3"
              style="width: 140px;">
              <img :src="vote.img" alt="" style="width: 60%;">
              <p class="fw-bold mt-2 mb-1">{{ vote.name }}</p>
              <div class="d-flex justify-content-evenly mb-2">
                <img src="/img/golden.png" width="15" alt="">
                <img src="/img/silver.png" width="15" alt="">
                <img src="/img/black.png" width="15" alt="">
                <img src="/img/white.png" width="15" alt="">
              </div>
              <!-- <p class="text-center" style=" font-size: var(--x-small)">
              <span>{{ vote.post }}</span> at <span>{{ vote.businessName }}</span>
            </p> -->
              <div class="d-flex">
                <p class="mb-0" style="font-size: var(--x-small)">{{ vote.support }}+</p>&nbsp;
                <p style="font-size: var(--x-small)">Promoters </p>
              </div>
            </div>
          </router-link>
          <span class="gg madimi-one-regular position-absolute" style="top: 115px; left:-3px ; font-size: 50px;">{{
        vote.id }}</span>
        </div>
      </div>


    </div>

    <div class="pb-2" style=" color: #000;">
      <div class="d-flex justify-content-between align-items-end py-5" style="background-color: #EFEFED;">
        <div class="">
          <p class="ps-2 text-start fw-bold mb-0"><span class="fs-4"> <i class="bi bi-star-fill"></i> Jaipur's</span>
          </p>
          <p class="ps-2 text-start   mb-0"><span style="">Top Retailers</span></p>
        </div>
        <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
      </div>

      <div class="mt-1 row row-cols-3 row-cols-md-6 g-2 mx-1">
        <div v-for="(vote, index) in votes" :key="index" class="col">
          <div class="card rounded-0 d-flex justify-content-start align-items-center pt-3">
            <img :src="vote.img" alt="" style="width: 60%;">
            <p class="fw-bold mt-2 mb-1">{{ vote.name }}</p>
            <div class="d-flex justify-content-evenly mb-2">
              <img src="/img/golden.png" width="15" alt="">
              <img src="/img/silver.png" width="15" alt="">
              <img src="/img/black.png" width="15" alt="">
              <img src="/img/white.png" width="15" alt="">
            </div>
            <!-- <p class="text-center" style=" font-size: var(--x-small)">
                            <span>{{ vote.post }}</span> at <span>{{ vote.businessName }}</span>
                        </p> -->
            <div class="d-flex">
              <p class="mb-0" style="font-size: var(--x-small)">{{ vote.support }}+</p>&nbsp;
              <p style="font-size: var(--x-small)">Promoters </p>
            </div>
          </div>
        </div>
      </div>


    </div>

    <div class="py-2" style="color: #FCDC2A; background-color: #000;">
      <div class="d-flex justify-content-between align-items-end mt-3 pt-2">
        <div class="">
          <p class="ps-2 text-start fw-bold mb-0"><span class="fs-4"> <i class="bi bi-star-fill"></i> Manipur's</span>
          </p>
          <p class="ps-2 text-start   mb-0"><span style="">Top Retailers</span></p>
        </div>
        <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
      </div>

      <div class="d-flex py-4" style="overflow-x: scroll; overflow-y: hidden;">
        <div v-for="(vote, index) in votes" :key="index" class="mx-2 position-relative px-2">
          <div
            class="bg-dark border-0 rounded-0 d-flex flex-column justify-content-center align-items-center pt-3 text-white px-3"
            style="width: 140px;">
            <img :src="vote.img" alt="" style="width: 60%;">
            <p class="fw-bold mt-2 mb-1">{{ vote.name }}</p>
            <div class="d-flex justify-content-evenly mb-2">
              <img src="/img/golden.png" width="15" alt="">
              <img src="/img/silver.png" width="15" alt="">
              <img src="/img/black.png" width="15" alt="">
              <img src="/img/white.png" width="15" alt="">
            </div>
            <!-- <p class="text-center" style=" font-size: var(--x-small)">
                            <span>{{ vote.post }}</span> at <span>{{ vote.businessName }}</span>
                        </p> -->
            <div class="d-flex">
              <p class="mb-0" style="font-size: var(--x-small)">{{ vote.support }}+</p>&nbsp;
              <p style="font-size: var(--x-small)">Promoters </p>
            </div>
          </div>
          <span class="gg madimi-one-regular position-absolute" style="top: 115px; left:-3px ; font-size: 50px;">{{
        vote.id
      }}</span>
        </div>
      </div>


    </div>

    <WebCollection></WebCollection>
    <HomePageCard></HomePageCard>
  </div>
</template>

<script>
import WebCollection from "@/views/WebCollection.vue";
// import TopNav from "@/components/aboutComp/TopNav.vue";
import RetailpurTopNav from "@/components/navbar/RetailpurTopNav.vue";
import HomePageCard from "@/components/Collection/HomePageCard.vue";
export default {
  name: "HomeView",
  components: {
    // TopNav,
    WebCollection,
    RetailpurTopNav,
    HomePageCard
  },
  data() {
    return {
      catagory: [
        {
          id: 1,
          img: 'img/catalog/Bottoms.png',
          text: 'Bottom'
        },
        {
          id: 2,
          img: 'img/catalog/Co-ords.png',
          text: 'Co-ords'
        },
        {
          id: 3,
          img: 'img/catalog/Dresses.png',
          text: 'Dresses'
        },
        {
          id: 4,
          img: 'img/catalog/Jumpsuits.png',
          text: 'Jumpsuits'
        },
        {
          id: 5,
          img: 'img/catalog/Shirts.png',
          text: 'Shirts'
        },
        {
          id: 6,
          img: 'img/catalog/Tops.png',
          text: 'Tops'
        },
        {
          id: 7,
          img: 'img/catalog/Tshirt.png',
          text: 'Tshirt'
        },
      ],
      votes: [
        {
          id: 1,
          img: 'img/users/1.png',
          name: 'Travis ',
          post: 'Business Owner',
          businessName: 'Fashion Appreals Fashion Appreals',
          support: 200
        },
        {
          id: 2,
          img: 'img/users/2.png',
          name: 'Kanye ',
          post: 'Business Owner',
          businessName: 'Fashion Appreals Fashion Appreals',
          support: 100
        },
        {
          id: 3,
          img: 'img/users/3.png',
          name: 'J.Cole',
          post: 'Business Owner',
          businessName: 'Fashion Appreals Fashion Appreals',
          support: 234
        },
        {
          id: 4,
          img: 'img/users/4.png',
          name: 'Post ',
          post: 'Business Owner',
          businessName: 'Fashion Appreals Fashion Appreals',
          support: 700
        },
        {
          id: 5,
          img: 'img/users/5.png',
          name: 'Drake',
          post: 'Business Owner',
          businessName: 'Fashion Appreals Fashion Appreals',
          support: 642
        },
        {
          id: 6,
          img: 'img/users/6.png',
          name: 'Don ',
          post: 'Business Owner',
          businessName: 'Fashion Appreals Fashion Appreals',
          support: 876
        },
        {
          id: 7,
          img: 'img/users/1.png',
          name: 'Travis ',
          post: 'Business Owner',
          businessName: 'Fashion Appreals Fashion Appreals',
          support: 200
        },
        {
          id: 8,
          img: 'img/users/2.png',
          name: 'Kanye ',
          post: 'Business Owner',
          businessName: 'Fashion Appreals Fashion Appreals',
          support: 100
        },
        {
          id: 9,
          img: 'img/users/3.png',
          name: 'J.Cole',
          post: 'Business Owner',
          businessName: 'Fashion Appreals Fashion Appreals',
          support: 234
        },
      ]
    }
  },
  computed: {
    shops() {
      const shopName = this.$route.params.name;
      if (shopName) {
        return this.$store.getters['shop/getShopss'](shopName);
      } else {
        return this.$store.getters['shop/getShops'];
      }
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');

.madimi-one-regular {
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}

span.gg {
  font-size: 72px;
  background: -webkit-linear-gradient(#000000, #a2a1a1);
  /* background: -webkit-linear-gradient(#FFB000, #F8DE22); */
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
