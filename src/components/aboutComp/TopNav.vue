<template>
    <div class="w-100">
        <div class="d-flex justify-content-between align-items-center py-2 px-2"
            style="background-color: var(--secondary-color);">
            <div class="d-none d-lg-flex align-items-center ">
                <img :src="shop.business.logo"
                    style="width: 75px;object-fit: contain;">
                <!-- <img :src="`${publicPath}${img}`" style="width: 75px;object-fit: contain;"> -->
                <p class=" mb-0 ms-1 fw-bold fs-4 " style=" color: var(--primary-color); letter-spacing: 6px">
                   {{shop.business.shopName}}</p>
                <div class="d-flex ms-3">
                    <img class="ms-2" src="/img/golden.png" width="40" alt="">
                    <img class="ms-2" src="/img/silver.png" width="40" alt="">
                    <img class="ms-2" src="/img/black.png" width="40" alt="">
                    <img class="ms-2" src="/img/white.png" width="40" alt="">
                </div>

            </div>
            <div class="d-flex d-lg-none align-items-center">
                <img :src="shop.business.logo"
                    style="width: 75px;object-fit: contain;">
                <!-- <img :src="`${publicPath}${img}`" style="width: 50px;object-fit: contain;"> -->
                <div class="">
                    <small class=" mb-0 ms-1 fw-bold" style=" color: var(--primary-color); letter-spacing: 2px">{{shop.business.shopName}}</small>
                    <div class="d-flex justify-content-evenly ">
                        <img src="/img/golden.png" width="30" alt="">
                        <img src="/img/silver.png" width="30" alt="">
                        <img src="/img/black.png" width="30" alt="">
                        <img src="/img/white.png" width="30" alt="">
                    </div>
                </div>
            </div>
            <div class="  d -flex">
                <i class="bi bi-search fs-4 mx-2" style="color: var(--primary-color);"></i>
                <i data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                    class="bi bi-list fs-4 mx-2" style="color: var(--primary-color);"></i>
            </div>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header border-bottom">
                <div class="d-flex align-items-center">
                    <img src="/img/logo/logo.png" style="width: 90px;object-fit: contain;">
                </div>

                <button type="button" class="fs-4 btn bi bi-x-lg" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body position-relative w-100">
                <div v-for="(category, index) in categories" :key="index" class=" border-bottom py-3">
                    <router-link :to="category.router" class=" d-flex text-start text-decoration-none text-dark">
                        <i :class="category.icon"></i>
                        <p class="m-0 ms-2">{{ category.name }}</p>
                    </router-link>
                </div>
            </div>
            <div class="position-absolute bottom-0 w-100 py-3">
                <p class="text-center my-3 fs-4 ">Reach Us</p>
                <div class="d-flex justify-content-evenly fs-2">
                    <a href="https://www.instagram.com/" class="text-decoration-none text-dark">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/" class="text-decoration-none text-dark">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="https://in.linkedin.com/" class="text-decoration-none text-dark">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/" class="text-decoration-none text-dark">
                        <i class="bi bi-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo/mac2.png",
            categories: [
                // {
                //     name: 'About Us',
                //     icon: 'bi bi-arrow-right ',
                //     router: '/aboutUs'
                // },
                // {
                //     name: 'Support',
                //     icon: 'bi bi-arrow-right ',
                //     router: '/faqs/customer-service'
                // },
                // {
                //     name: 'Career',
                //     icon: 'bi bi-arrow-right ',
                //     router: '/career'
                // },
                {
                    name: 'Login',
                    icon: 'bi bi-arrow-right ',
                    router: '/login-page'
                },
            ]
        }
    },
    computed: {
        shop() {
            let voteId = this.$route.params.voteId;
            return this.$store.getters['shop/getShopss'](voteId);
        },
    }
}
</script>

<style lang="scss" scoped></style>