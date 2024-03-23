<template>
    <div class="d-flex flex-column align-items-center justify-content-center pt-4">
        <img src="/img/logo/logo.png" style="height:150px;width: 330px; object-fit: contain;filter: brightness(3.5);" class="">
        <!-- <p class="text-center m-0 fs-1 fw-bold brand-text"
            style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
            Deshi girl
        </p> -->
    </div>
</template>

<script>
export default {
    name: 'DeshiGirlLogo',
    data() {
        return {
            // logo: 'img/logo/DeshiGirl.png',
            logo: 'img/logo/deshiDark.png',
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style lang="scss" scoped>
.colorRed {
    filter: hue-rotate(0deg);
}

.colorBlue {
    filter: hue-rotate(200deg) brightness(0.75);
}

.colorGreen {
    filter: hue-rotate(100deg);
}
</style>