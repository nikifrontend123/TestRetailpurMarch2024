<template>
    <RetailpurTopNav></RetailpurTopNav>
    <div class=" ">
        <div class="  my-2">
            <div class="d-flex flex-column justify-content-center align-items-center mb-4 border-bottom">
                <img :src="profile" class="rounded-circle border" style="width:80px ; height: 80px;" alt="">
                <div class="ps-2 text-center">
                    <strong class="">Nikhil</strong>
                    <p class="mb-1">nkhil777@gmail.com</p>
                    <p class="mb-1">8952635214</p>
                </div>
                <button class="btn btn-danger rounded-pill my-2" @click="logOut()">Log Out</button>
            </div>


            <div>
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
        </div>
    </div>
</template>

<script>
import RetailpurTopNav from '@/components/navbar/RetailpurTopNav.vue'
export default {
    components: {
        RetailpurTopNav
    },
    name: 'MyAccount',
    data() {
        return {
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aNRVLwfw1U28A7a4uf57VPdpzlHNA4WARw&usqp=CAU',
            links: [
                {
                    icon: 'bi-person',
                    name: 'Profile Setup',
                    path: '/basicInfo',
                },
                {
                    icon: 'bi-person',
                    name: 'Manage',
                    path: '/manage',
                },
                {
                    icon: 'bi-person',
                    name: 'promoters',
                    path: '/promoters',
                },

                {
                    icon: 'bi bi-person ',
                    name: 'Login',
                    path: '/login-page'
                },
            ]
        }
    },
    mounted() {
        this.$store.dispatch('LoggedInUserStore/fetchUserDetail')
    },
    computed: {
        user() {
            return this.$store.getters['LoggedInUserStore/getUserDetail']
        }
    },
    methods: {
        logOut() {
            this.$store.dispatch('LoggedInUserStore/logout')
        }
    }
}
</script>

<style lang="scss" scoped></style>