<template>
    <div>
        <SectionOne></SectionOne>
        <div class="d-md-none d-flex justify-content-center position-relative" style="top: -40px;">
            <SupportButton @save-shop="handleSaveShop"></SupportButton>
        </div>

        <div class="mb-5 container">
            <!-- <p class="p-2 text-center mb-0 " style=""><span class="fs-2">~ Bussiness ~</span>
            </p> -->
            <div class="d-flex justify-content-evenly">
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center fs-4">
                        <AutoCounter :data="10"> </AutoCounter>
                    </p>
                    <small style="font-size: var(--x-small);">Years Of <br> Experience</small>
                </div>
                <div class="separator"></div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center fs-4">
                        <AutoCounter :data="100"> </AutoCounter>
                    </p>
                    <small style="font-size: var(--x-small);">Products <br> Listed</small>
                </div>
                <div class="separator"></div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center fs-4">
                        <AutoCounter :data="1000"> </AutoCounter>
                    </p>
                    <small style="font-size: var(--x-small);">Happy <br> Customers</small>
                </div>
            </div>

        </div>

        <div class="container mb-5">
            <div class="d-flex justify-content-between align-items-center w-100 mb-4">
                <div class="d-block d-md-flex  w-100">
                    <div class="border px-1 fw-bold w-100 bg-light border-bottom-0">
                        <p class="p-2 mb-0 w-100"> Shop Name</p>
                    </div>
                    <div class="w-100 border px-1">
                        <p class="p-2 mb-0 w-100"> {{ shop.business.shopName }}</p>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center w-100 mb-4">
                <div class="d-block d-md-flex  w-100">
                    <div class="border px-1 fw-bold w-100 bg-light border-bottom-0">
                        <p class="p-2 mb-0 w-100"> Description</p>
                    </div>
                    <div class="w-100 border px-1">
                        <p class="p-2 mb-0 w-100"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta
                            quis
                            nihil
                            adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus.</p>
                    </div>
                </div>
            </div>
        </div>



        <div class="bg-light py-3">
            <div class="py-2 container d-flex justify-content-between align-items-center">
                <p class=" mb-0 "><span class="fs-2">Our Promoters </span></p>
                <RouterLink to="/allsupporters" class="text-decoration-none text-dark">
                    <small>See All <i class="bi bi-arrow-right"></i></small>
                </RouterLink>
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
                                <p style="font-size: var(--x-small)">Promoters </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <p class="p-2 text-center mb-0  "><span class="fs-2">~ Brands ~</span></p>
        <div class="container mb-5">
            <RecognitionBanner></RecognitionBanner>
        </div>

        <div id="section1" class="section mb-5">
            <p class="p-2 text-center mt-3 mb-0 bill"><span class="fs-2">~ Brands ~</span></p>
            <div class="container mb-5">
                <TeamBannes></TeamBannes>
            </div>


        </div>

        <NavigatioBar :showNav="showNav" :activeTab="activeTab" :sections="sections"
            @update-active-tab="updateActiveTab"></NavigatioBar>

        <CollectionPage :collections="collections"> </CollectionPage>


        <div class="container">
            <div class="py-2 container d-flex justify-content-between align-items-center">
                <p class=" mb-0 "><span class="fs-2">Our Reviews </span></p>
                <RouterLink to="/review" class="text-decoration-none text-dark">
                    <small>See All <i class="bi bi-arrow-right"></i></small>
                </RouterLink>
            </div>
        </div>
        <ReviewComp :showAllReviews="true"></ReviewComp>

        <BottomSec id="section7" class="section"></BottomSec>

        <div v-if="showScrollButton" @click="scrollToTop" class="scroll-button  border rounded-circle"
            style="opacity: 60%; background-color: #000000; color: #ffffff">
            <i class="d-flex justify-content-center align-items-center  bi bi-arrow-up-short"></i>
        </div>
        <FooterPage></FooterPage>
    </div>
</template>

<script>
import TeamBannes from '@/components/aboutComp/TeamBannes.vue';
import AutoCounter from '@/components/aboutComp/AutoCounter.vue';
import SupportButton from '@/components/SupportButton.vue'
import RecognitionBanner from '@/components/aboutComp/RecognitionBanner.vue';
import BottomSec from '@/components/main/BottomSec.vue'
import SectionOne from '@/components/main/SectionOne.vue'
import NavigatioBar from '@/components/main/NavigatioBar.vue'
import CollectionPage from '@/components/Collection/CollectionPage.vue'
import FooterPage from '@/components/aboutComp/FooterPage.vue';
import ReviewComp from '@/components/ReviewComp.vue';
export default {
    components: {
        AutoCounter, ReviewComp, SupportButton, SectionOne, NavigatioBar, TeamBannes,
        BottomSec, FooterPage, CollectionPage, RecognitionBanner
    },
    props: {
        shopName: String
    },
    data() {
        return {
            showScrollButton: false,
            showNav: false,
            activeTab: null,
            sections: [],
            votes: [
                {
                    img: '/img/users/1.png',
                    name: 'Travis Scott',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 200
                },
                {
                    img: '/img/users/2.png',
                    name: 'Kanye West',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 100
                },
                {
                    img: '/img/users/3.png',
                    name: 'J.Cole',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 234
                },
                {
                    img: '/img/users/4.png',
                    name: 'Post Malone',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 700
                },
                {
                    img: '/img/users/5.png',
                    name: 'Drake',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 642
                },
                {
                    img: '/img/users/6.png',
                    name: 'Don Toliver',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 876
                },
            ]
        };
    },
    computed: {
        shop() {
            let voteId = this.$route.params.voteId;
            return this.$store.getters['shop/getShopss'](voteId);
        },
        collections() {
            return this.$store.getters['collection/getCollections']
        },
    },
    methods: {
        handleSaveShop(shopData) {
            // Dispatch the saveShop action with the shop data
            this.$store.dispatch('shop/saveShop', shopData);
        },
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            for (let i = 0; i < this.sections.length; i++) {
                const section = this.sections[i];
                const el = document.getElementById(`section${section.id}`);

                if (el) {
                    const rect = el.getBoundingClientRect();
                    const sectionTop = rect.top + scrollTop;
                    const sectionBottom = rect.bottom + scrollTop;

                    if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                        const newActiveTab = `section${section.id}`;

                        if (this.activeTab !== newActiveTab) {
                            this.activeTab = newActiveTab;
                            this.$emit('update-active-tab', this.activeTab);
                        }
                        break;
                    }
                }
            }
        },
        updateActiveTab(newTab) {
            this.activeTab = newTab;
        },
        handleScrollBtn() {
            this.showScrollButton = window.pageYOffset > 100;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScrollBtn);
        // this.sections = [
        //     { id: 'section1', name: 'Info' },
        // ];
        if (this.sections.length > 0) {
            console.log('Sections length:', this.sections.length);
            this.activeTab = this.sections[0].id;
        }
        if (this.collections.length > 0) {
            this.collections.forEach((collection, index) => {
                const sectionId = `section${index + 2}`;
                this.sections.push({ id: sectionId, name: collection.heading });
            });
        }
        console.log('Sections:', this.sections);
        // else {
        //     this.sections.push({ id: 'section2', name: 'Contact' });
        // }
        this.activeTab = this.sections.length > 0 ? this.sections[0].id : null;
        window.addEventListener('scroll', this.handleScrollBtn);
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                this.showNav = true;
            } else {
                this.showNav = false;
            }
        });
        console.log('Active Tab:', this.activeTab);
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScrollBtn);
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>

<style scoped>
.separator {
    border-left: 1px solid #000;
    /* Adjust the color and style as needed */
    height: 80px;
    /* Adjust the height as needed */
    margin: 0 20px;
    /* Adjust the margin as needed */
}

.scroll-button {
    z-index: 9;
    position: fixed;
    bottom: 60px;
    right: 10px;
    padding: 10px 10px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
}
</style>
