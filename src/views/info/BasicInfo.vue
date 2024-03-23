<template>
    <div>
        <ProfileNav></ProfileNav>
        <div class="container mt-3">
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                    style="width:50%">
                    50%
                </div>
            </div>
        </div>
        <router-link :to="link.path" class=" text-decoration-none text-dark" v-for="(link, index) in links"
            :key="index">
            <div class="btn btn-light d-flex justify-content-between align-items-center m-3 border">
                <div class="p-2">
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
                    icon: 'bi-info-circle-fill',
                    name: 'Basic Info',
                    path: '/ProfileDetail',
                },

                {
                    icon: 'bi bi-telegram',
                    name: 'Contact Details',
                    path: '/ContactDetail'
                },
                {
                    icon: 'bi bi-clock-fill',
                    name: 'Work Timing',
                    path: '/WorkTime'
                },
                {
                    icon: 'bi bi-vinyl-fill',
                    name: 'Catagory',
                    path: '/BusinessType'
                },
                // {
                //     icon: 'bi bi-person',
                //     name: 'Product',
                //     path: '/product'
                // },
                // {
                //     icon: 'bi bi-person',
                //     name: 'Collection',
                //     path: '/collection'
                // },
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>