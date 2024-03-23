<template>
    <!-- <div class="container mb-5">
        <div class="text-start">
            <div class=" fs-4 d-flex align-items-center">
                <p class="mb-0">Based on {{ reviews.length }} reviews</p>
                <span class="ms-2" v-for="n in 5" :key="n">
                    <i class="bi bi-star-fill text-warning px-1 fs-5 "></i>
                </span>
            </div>
        </div>
    </div> -->
    <div class="mb-5 pb-3 ">
        <div v-if="!showAllReviews">
            <div class="p-3 d-flex justify-content-between "
                style="color: var(--primary-color); background-color: var(--secondary-color);">
                <i @click="goBack()" class="bi bi-chevron-left"></i>
                <div class="">Reviews</div>
                <div class=""></div>
            </div>
            <div class="container d-flex justify-content-center">


                <div class="" style="width: 500px;">
                    <div class="overall-rating text-center">
                        <h3>Overall Rating</h3>
                        <h1>
                            <AutoCounter :data="5"></AutoCounter>
                        </h1>
                        <span class="ms-2" v-for="n in 5" :key="n">
                            <i class="bi bi-star-fill text-warning px-1 fs-5 "></i>
                        </span>
                    </div>
                    <div class="separate-rating-bars">
                        <!-- <h3>Separate Rating Bars</h3> -->
                        <span>Excellent</span>
                        <div class="progress mb-3">
                            <div class="progress-bar bg-success" role="progressbar"
                                :style="{ width: calculateWidth('Excellent') }">
                                <span class="fw-bold">{{ getRatingPercentage('Excellent') }}%</span>
                            </div>
                        </div>
                        <span>Good</span>
                        <div class="progress mb-3">
                            <div class="progress-bar" style="background-color: #A7D535;" role="progressbar"
                                :style="{ width: calculateWidth('Good') }">
                                <span class="fw-bold">{{ getRatingPercentage('Good') }}%</span>
                            </div>
                        </div>
                        <span>Average</span>
                        <div class="progress mb-3">
                            <div class="progress-bar" style="background-color: #FDE63A;" role="progressbar"
                                :style="{ width: calculateWidth('Average') }">
                                <span class="fw-bold">{{ getRatingPercentage('Average') }}%</span>
                            </div>
                        </div>
                        <span>Below Average</span>
                        <div class="progress mb-3">
                            <div class="progress-bar" style="background-color: #F8A529;" role="progressbar"
                                :style="{ width: calculateWidth('Below Average') }">
                                <span class="fw-bold">{{ getRatingPercentage('Below Average') }}%</span>
                            </div>
                        </div>
                        <span>Poor</span>
                        <div class="progress mb-3">
                            <div class="progress-bar bg-danger" role="progressbar"
                                :style="{ width: calculateWidth('Poor') }">
                                <span class="fw-bold">{{ getRatingPercentage('Poor') }}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="container mt-5">
            <div class="row row-cols-1 row-cols-md-3 g-3">
                <div v-for="(review, index) in displayedReviews" :key="index" class="col my-2 ">
                    <div class="d-flex justify-content-between border p-2 bg-light">
                        <div class="d-flex justify-content-between">
                            <div class="border rounded-circle d-flex justify-content-center align-items-center text-center"
                                style="width: 72px; height: 72px;">
                                <img src="/img/users/1.png" width="64" alt="">
                            </div>
                            <div class="ps-2">
                                <strong class="">{{ review.author }}</strong>
                                <!-- <p class="mb-0"><small>{{ review.author }}</small></p> -->
                                <div class="d-flex">
                                    <img src="/img/golden.png" width="20" alt="">
                                    <img src="/img/silver.png" width="20" alt="">
                                    <img src="/img/black.png" width="20" alt="">
                                    <img src="/img/white.png" width="20" alt="">
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex align-items-end">
                                        <div class="d-flex ">
                                            <small class="text-secondary fw-bold">{{ review.title }}</small>
                                        </div>
                                        <div class="ms-2">
                                            <span v-for="n in 5" :key="n" :class="{ 'filled': n <= review.rating }">
                                                <i v-if="n <= review.rating" class="bi bi-star-fill text-warning  pe-1"
                                                    style="font-size: 13px;"></i>
                                                <i v-else class="bi bi-star text-warning pe-1"
                                                    style="font-size: 13px;"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="d-flex justify-content-end align-items-end mb-0" style="font-size: var(--x-small);">23
                            Mar 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AutoCounter from './landingComp/AutoCounter.vue';
export default {
    components: {
        AutoCounter
    },
    props: {
        showAllReviews: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            reviews: [
                { author: 'John Doe', rating: 4, title: 'Good Product', comment: 'Great product, highly recommended!' },
                { author: 'Jane Smith', rating: 5, title: 'Good Product', comment: 'Amazing quality, exceeded my expectations.' },
                { author: 'Chris Johnson', rating: 3, title: 'Good Product', comment: 'Good product, but could be better.' },
                { author: 'John Doe', rating: 4, title: 'Good Product', comment: 'Great product, highly recommended!' },
                { author: 'Jane Smith', rating: 5, title: 'Good Product', comment: 'Amazing quality, exceeded my expectations.' },
                { author: 'Chris Johnson', rating: 3, title: 'Good Product', comment: 'Good product, but could be better.' },
                { author: 'Chris Johnson', rating: 3, title: 'Good Product', comment: 'Good product, but could be better.' },
                { author: 'John Doe', rating: 4, title: 'Good Product', comment: 'Great product, highly recommended!' },
                { author: 'Jane Smith', rating: 5, title: 'Good Product', comment: 'Amazing quality, exceeded my expectations.' },
                { author: 'Chris Johnson', rating: 3, title: 'Good Product', comment: 'Good product, but could be better.' },
            ],
            ratings: [
                { label: 'Excellent', count: 7 },
                { label: 'Good', count: 6 },
                { label: 'Average', count: 3 },
                { label: 'Below Average', count: 4 },
                { label: 'Poor', count: 3 }
            ],
            totalReviews: 0
        };
    },
    computed: {
        displayedReviews() {
            return this.showAllReviews ? this.reviews.slice(0, 6) : this.reviews;
        },
    },
    methods: {
        calculateWidth(ratingLabel) {
            const rating = this.ratings.find(r => r.label === ratingLabel);
            if (!rating) return '0%';
            const percentage = (rating.count / this.totalReviews) * 100;
            return percentage + '%';
        },
        getRatingCount(ratingLabel) {
            const rating = this.ratings.find(r => r.label === ratingLabel);
            return rating ? rating.count : 0;
        },
        getStarIcons(ratingLabel) {
            const rating = this.ratings.find(r => r.label === ratingLabel);
            if (!rating) return '';
            const starCount = rating.count;
            const starIcons = Array.from({ length: starCount }, () => '<i class="bi bi-star-fill text-warning"></i>');
            return starIcons.join('');
        },
        getRatingPercentage(ratingLabel) {
            const rating = this.ratings.find(r => r.label === ratingLabel);
            if (!rating) return '0';
            const percentage = (rating.count / this.totalReviews) * 100;
            return percentage % 1 === 0 ? percentage.toFixed(0) : percentage.toFixed(2);
        },
        goBack() {
            window.history.back()
        }
    },
    mounted() {
        this.reviews.forEach(review => {
            if (review.rating === 5) {
                this.ratings[0].count++; // Excellent
            } else if (review.rating === 4) {
                this.ratings[1].count++; // Good
            } else if (review.rating === 3) {
                this.ratings[2].count++; // Average
            } else if (review.rating === 2) {
                this.ratings[3].count++; // Below Average
            } else if (review.rating === 1) {
                this.ratings[4].count++; // Poor
            }
        });
        this.totalReviews = this.reviews.length;
        console.log('Ratings:', this.ratings);
        console.log('Total Reviews:', this.totalReviews);
    }
};
</script>

<style scoped>
.overall-rating {
    margin-bottom: 20px;
}
</style>