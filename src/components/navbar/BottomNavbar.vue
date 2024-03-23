<template>
    <nav class="navbar fixed-bottom " style="z-index:1;" :class="{ 'navbar-hidden': navbarHidden }">
        <div class=" position-fixed w-100" style="bottom: 0;">
            <div style="background-color: white;">
                <div class="d-flex justify-content-evenly text-center w-100 border-top borde-light">
                    <BottomNav v-for="(link, index) in links" :key="index" :link="link"></BottomNav>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import BottomNav from './BottomNav.vue';
export default {
    data() {
        return {
            prevScroll: window.pageYOffset,
            navbarHidden: false,
            links: [
                { id: 3, route: "/", name: "home", icon: "bi bi-shop-window fs-5", label: "Market" },
                { id: 1, route: "/post", name: "main", icon: "bi bi-globe fs-5", label: "Post" },
                { id: 4, route: "/aboutUs", name: "aboutUs", icon: "bi bi-patch-plus fs-5", label: "Create" },
                { id: 2, route: "/favourite-catalogs", name: "FavouriteCatalogs", icon: "bi bi-hearts fs-5", label: "Saved" },
                { id: 5, route: "/order", name: "order", icon: "bi bi-archive fs-5", label: "Orders" },
                // { id: 2, route: "/categories", name: "CategoryCatalogPage", icon: "bi bi-grid-1x2 fs-5", label: "Category" },
                // { id: 4, route: "/checkout/cart", name: "CartPage", icon: "bi bi-bag fs-5", label: "Cart" },
            ],
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const currentScroll = window.pageYOffset;
            if (this.prevScroll > currentScroll) {
                this.navbarHidden = false;
            } else {
                this.navbarHidden = true;
            }
            this.prevScroll = currentScroll;
        },
    },
    components: { BottomNav }
}
</script>

<style lang="scss" scoped>
.items {
    display: flex;
    text-align: center;
}

.nav-bottom {
    height: 20%;
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    background: #F6F6F6;
}

.navbar {
    /* background-color: #f1f1f1; */
    height: 60px;
    transition: transform 0.5s;
    transform: translateY(0);
}

.navbar-hidden {
    transform: translateY(100%);
}
</style>