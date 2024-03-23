<template>
    <div>
        <SectionOne></SectionOne>
        <div class="d-md-none d-flex justify-content-center position-relative" style="top: -40px;">
            <SupportButton></SupportButton>
        </div>
 
        <div class="container mb-5">
            <div class="input-group my-2">
                <span class="input-group-text">Shop Name</span>
                <input type="text" aria-label="Shop Name" class="form-control" value="Hanumant Fashion">
            </div>
            <div class="input-group my-2">
                <span class="input-group-text">Description</span>
                <textarea aria-label="Description" class="form-control"
                    wrap="soft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus.</textarea>
            </div>
        </div>

        <div class="mb-5">
            <p class="p-2 text-center mb-0 bill" style=""><span class="fs-2">~ Bussiness ~</span>
            </p>
            <div class="d-flex justify-content-evenly mt-4 ">
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center fs-4">
                        <AutoCounter :data="10"> </AutoCounter>&nbsp;+
                    </p>
                    <small>Years Of <br> Experience</small>
                </div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center fs-4">
                        <AutoCounter :data="100"> </AutoCounter>&nbsp;+
                    </p>
                    <small>Products <br> Listed</small>
                </div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center fs-4">
                        <AutoCounter :data="1000"> </AutoCounter>&nbsp;+
                    </p>
                    <small>Happy <br> Customers</small>
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

            <div class="container">
                <div class="py-2 container d-flex justify-content-between align-items-center">
                    <p class=" mb-0 "><span class="fs-2">Our Reviews </span></p>
                    <RouterLink to="/review" class="text-decoration-none text-dark">
                        <small>See All <i class="bi bi-arrow-right"></i></small>
                    </RouterLink>
                </div>
            </div>
            <ReviewComp :showAllReviews="true"></ReviewComp>
        </div>

        <NavigatioBar :showNav="showNav" :activeTab="activeTab" :sections="sections"
            @update-active-tab="updateActiveTab"></NavigatioBar>

        <CollectionPage :collections="collections"> </CollectionPage>

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
    data() {
        return {
            showScrollButton: false,
            showNav: false,
            activeTab: 'section1',
            sections: [],
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
                    img: 'img/users/6.png',
                    name: 'Don Toliver',
                    post: 'Business Owner',
                    businessName: 'Fashion Appreals Fashion Appreals',
                    support: 876
                },
            ]
        };
    },
    computed: {
        collections() {
            return this.$store.getters['collection/getCollections']
        },
    },
    methods: {
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            for (let i = 0; i < this.sections.length; i++) {
                const section = this.sections[i];
                const el = document.getElementById(`section${section.id}`);

                if (el) {
                    const rect = el.getBoundingClientRect();
                    const sectionTop = rect.top + scrollTop;
                    const sectionBottom = rect.bottom + scrollTop;

                    console.log('Scroll Top:', scrollTop);
                    console.log('Section Top:', sectionTop);
                    console.log('Section Bottom:', sectionBottom);

                    if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                        // Update activeTab if the current section is found
                        if (this.activeTab !== `section${section.id}`) {
                            this.activeTab = `section${section.id}`;
                            console.log('Active Tab:', this.activeTab);
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
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    },

    mounted() {
        window.addEventListener("scroll", this.handleScrollBtn);
        this.sections = [
            { id: 'section1', name: 'Info' },
        ];

        if (this.collections.length > 0) {
            this.collections.forEach((collection, index) => {
                const sectionId = `section${index + 2}`;
                this.sections.push({ id: sectionId, name: collection.heading });
            });
            const lastCollectionIndex = this.sections.length - 1;
            const lastCollectionId = this.sections[lastCollectionIndex].id;
            const contactSectionId = `section${parseInt(lastCollectionId.replace('section', '')) + 1}`;
            this.sections.push({ id: contactSectionId, name: 'Contact' });
        } else {
            this.sections.push({ id: 'section2', name: 'Contact' });
        }

        window.addEventListener('scroll', this.handleScrollBtn);
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                this.showNav = true;
            } else {
                this.showNav = false;
            }
        });
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>

<style scoped>
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
