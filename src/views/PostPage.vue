<template>
    <div>
        <RetailpurTopNav></RetailpurTopNav>
        <FilterTab></FilterTab>
        <div class="container  mt-3">
            <div class="row row-cols-1 row-cols-md-3 g-3">
                <div v-for="(review, index) in reviews" :key="index" class="col my-2">
                    <div class=" border p-2">
                        <div class="d-flex justify-content-between border-bottom pb-2 align-items-end text-center">
                            <div class="d-flex">
                                <div style="width: 40px; height: 40px">
                                    <img :src="review.img" width="40" alt="">
                                </div>
                                <div class="ms-2">
                                    <strong class="truncate1 pe-2">{{ review.author }}</strong>
                                    <div class="d-flex">
                                        <img src="/img/golden.png" width="20" alt="">
                                        <img src="/img/silver.png" width="20" alt="">
                                        <img src="/img/black.png" width="20" alt="">
                                        <img src="/img/white.png" width="20" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-end my-1 w-100">
                            <span class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
                                excepturi exercitationem in, laboriosam culpa quo dolore explicabo tempore aperiam hic
                                officia. Odio quaerat beatae distinctio ipsum molestias temporibus delectus facere,
                                harum labore, unde eos quos autem ratione mollitia ex nobis pariatur hic sunt eligendi
                            </span>
                        </div>
                        <div class="d-flex mb-1">
                            <div class="bg-light border rounded-2 px-2 me-2">
                                Pant
                            </div>
                            <div class="bg-light border rounded-2 px-2 me-2">
                                Shirt
                            </div>
                            <div class="bg-light border rounded-2 px-2 me-2">
                                T-shirt
                            </div>
                            <div class="bg-light border rounded-2 px-2 me-2">
                                Jeans
                            </div>
                        </div>
                        <p class=" text-end mb-0" style="font-size: var(--x-small);">
                            4:30PM | 23/03/2024 <i class="bi bi-circle-fill text-success px-1"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RetailpurTopNav from '@/components/navbar/RetailpurTopNav.vue';
import FilterTab from '@/components/FilterTab.vue';

export default {
    components: {
        RetailpurTopNav, FilterTab
    },

    data() {
        return {
            reviews: [
                {
                    showFullText:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elits. Blanditiis stotam rep Lorem ipsum dolor sit amet consectetur adipisicing elitss dsd. Blanditiis totam rep Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam rep Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam rep Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam rep Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam rep Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam rep Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam rep asdkjh asdlk hjasd  ',
                    author: 'John Doe',
                    img: '/img/users/1.png',
                    rating: 4,
                    title: 'Good Product',
                    comment: 'Great product, highly recommended!',

                },
                {
                    author: 'Jane Smith',
                    img: '/img/users/2.png',
                    rating: 5,
                    title: 'Good Product',
                    comment: 'Amazing quality, exceeded my expectations.',
                },
                {
                    author: 'Chris Johnson',
                    img: '/img/users/3.png',
                    rating: 3,
                    title: 'Good Product',
                    comment: 'Good product, but could be better.',
                },
                {
                    author: 'John Doe',
                    img: '/img/users/4.png',
                    rating: 4,
                    title: 'Good Product',
                    comment: 'Great product, highly recommended!',
                },
                {
                    author: 'Jane Smith',
                    img: '/img/users/5.png',
                    rating: 5,
                    title: 'Good Product',
                    comment: 'Amazing quality, exceeded my expectations.',
                },
                {
                    author: 'Chris Johnson',
                    img: '/img/users/6.png',
                    rating: 3,
                    title: 'Good Product',
                    comment: 'Good product, but could be better.',
                },
                {
                    author: 'Chris Johnson',
                    img: '/img/users/7.png',
                    rating: 3,
                    title: 'Good Product',
                    comment: 'Good product, but could be better.',
                },
                {
                    author: 'John Doe',
                    img: '/img/users/8.png',
                    rating: 4,
                    title: 'Good Product',
                    comment: 'Great product, highly recommended!',
                },
                {
                    author: 'Jane Smith',
                    img: '/img/users/9.png',
                    rating: 5,
                    title: 'Good Product',
                    comment: 'Amazing quality, exceeded my expectations.',
                },
                {
                    author: 'Chris Johnson',
                    img: '/img/users/10.png',
                    rating: 3,
                    title: 'Good Product',
                    comment: 'Good product, but could be better.',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>