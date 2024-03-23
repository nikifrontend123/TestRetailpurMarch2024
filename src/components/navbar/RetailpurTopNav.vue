<template>
    <div class="w-100">
        <div class="d-flex justify-content-between align-items-center py-2 px-2 bg-light border-bottom">
            <div class="ms-2 d-none d-lg-flex align-items-center ">
                <RouterLink to="/">
                    <img :src="`${publicPath}${img}`" style="width: 120px;object-fit: contain;">
                </RouterLink>
            </div>
            <div class="ms-2 d-flex d-lg-none align-items-center">
                <RouterLink to="/">
                    <img :src="`${publicPath}${img}`" style="width: 100px;object-fit: contain;">
                </RouterLink>
                <!-- <img :src="`${publicPath}${img}`" style="width: 50px;object-fit: contain;"> -->

            </div>
            <div class="  d -flex">
                <i class="bi bi-search fs-4 mx-2" style="color: var(--secondary-color);"></i>
                <RouterLink to=/profile>
                    <i class="bi bi-person fs-4 mx-2" style="color: var(--secondary-color);"></i>
                </RouterLink>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo/logo.png",
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
                {
                    name: 'My Profile',
                    icon: 'bi bi-person ',
                    router: '/profile'
                },
                // {
                //     name: 'Login',
                //     icon: 'bi bi-arrow-right ',
                //     router: '/login-page'
                // },
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>