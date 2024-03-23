<template>
    <div class="ss d-flex justify-content-between align-items-center" ref="topnav"
        :style="`background: rgb(227,93,106, ${backgroundOpacity});`">
        <div class="d-flex align-items-center gap-3">
            <i class="bi bi-arrow-left fs-2 brand-text" @click="goBack"></i>
            <router-link to="/search" class="text-dark">
                <i class="bi bi-search fs-2 brand-text"></i>
            </router-link>
        </div>
        <router-link to="/" :class="{ 'hide-on-scroll': hideOnScroll }"
            class="text-decoration-none text-dark d-flex align-items-center">
            <!-- <img :src="logo" style="height: 40px;"> -->
            <p class="text-center m-0 fs-2 fw-bold"
                style="color:white;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
                Deshi girl
            </p>
        </router-link>
        <!-- <p class="text-center m-0 fs-4" :class="{ 'hide-on-scroll': hideOnScroll }">DeshiGirl</p> -->
        <div class="d-flex align-items-center gap-3">

            <router-link to="/favourite-catalogs" :class="{ 'text-danger': currentRoute === 'SavedProduct' }"
                style="text-decoration:none;color:black">
                <i class="bi bi-hearts mt-1 fs-1 brand-text"></i>
            </router-link>

            <router-link to="/checkout/cart" :class="{ 'text-danger': currentRoute === 'simplestepper' }"
                style="text-decoration:none;color:black">
                <i class="bi bi-bag-fill fs-1 pe-1 brand-text"></i>
            </router-link>

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ProductTopnav',
    data() {
        return {
            prevScrollPos: 0,
            backgroundOpacity: 0,
            hideOnScroll: true,
        };
    },
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

            if (scrollPercentage >= 10 && scrollPercentage <= 15) {
                this.backgroundOpacity = 0.5;
                this.hideOnScroll = true;
            } else if (scrollPercentage > 10) {
                this.backgroundOpacity = 1;
                this.hideOnScroll = false;
            } else {
                this.backgroundOpacity = 0;
                this.hideOnScroll = true;
            }
        },
        goBack() {
            window.history.back();
        }

    }
};
</script>
  
<style scoped>
.hide-on-scroll {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.ss {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    z-index: 10;
}
</style>
  