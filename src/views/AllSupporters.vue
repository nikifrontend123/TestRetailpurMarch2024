<template>
    <div>
        <div class="p-3 d-flex justify-content-between"
            style="color: var(--primary-color); background-color: var(--secondary-color);">
            <i @click="goBack()" class="bi bi-chevron-left"></i>
            <div class="">All Supporters</div>
            <div class=""></div>
        </div>
        <div class="container mb-5 mt-3">
            <div class="row row-cols-3 row-cols-md-6 g-2">
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
                            <p style="font-size: var(--x-small)">Supporters</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            votes: [
                {
                    img: 'img/users/1.png',
                    name: 'Travis Scott',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 200
                },
                {
                    img: 'img/users/2.png',
                    name: 'Kanye West',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 100
                },
                {
                    img: 'img/users/3.png',
                    name: 'J.Cole',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 234
                },
                {
                    img: 'img/users/4.png',
                    name: 'Post Malone',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 700
                },
                {
                    img: 'img/users/5.png',
                    name: 'Drake',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 642
                },
                {
                    img: 'img/users/3.png',
                    name: 'J.Cole',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 234
                },
                {
                    img: 'img/users/4.png',
                    name: 'Post Malone',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 700
                },
                {
                    img: 'img/users/6.png',
                    name: 'Don Toliver',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 876
                },
                {
                    img: 'img/users/4.png',
                    name: 'Post Malone',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 700
                },
                {
                    img: 'img/users/6.png',
                    name: 'Don Toliver',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 876
                },
            ]
        }
    },
    methods: {
        goBack() {
            window.history.back()
        }
    }
}
</script>

<style lang="scss" scoped></style>