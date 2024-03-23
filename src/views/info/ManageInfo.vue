<template>
    <div>
        <ProfileNav></ProfileNav>
        <router-link :to="link.path" class=" text-decoration-none text-dark" v-for="(link, index) in links"
            :key="index">
            <div class="btn btn-light w-100 d-flex justify-content-between align-items-center my-2">
                <div class="">
                    <i class="bi fs-3" :class="link.icon"></i>
                    <span class="ms-3 fs-5">{{ link.name }} </span>
                </div>
            </div>
        </router-link>

    </div>
</template>

<script>
import ProfileNav from '@/components/navbar/ProfileNav.vue';

export default {
    components: {
        ProfileNav
    },
    data() {
        return {
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aNRVLwfw1U28A7a4uf57VPdpzlHNA4WARw&usqp=CAU',
            links: [
                {
                    icon: 'bi bi-person',
                    name: 'Product',
                    path: '/product'
                },
                {
                    icon: 'bi bi-person',
                    name: 'Collection',
                    path: '/collection'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>