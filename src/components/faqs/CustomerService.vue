<template>
    <TopNav></TopNav>
    <div class="position-absolute w-100">
        <div class="" style="background-color: var(--primary-color); color: var(--secondary-color);">
            <div class="fw-bold text-center py-5" >
                <p sty class="fs-1  mb-0">Support</p>
                <p class="fs-5">We're Here To Help !</p>
            </div>
        </div>
        <div class="container my-3 py-3"> 
            <div class="row justify-content-around mt-2">
                <div v-for="(f, index) in faq" :key="index" class="col-6 text-center bg-white border rounded">
                    <router-link :to="'/' + f.link" class="text-decoration-none text-dark">
                        <div class="">
                            <i :class="f.icon"></i>
                            <p>{{ f.text }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="w-100 position-relative bottom-0">
            <FooterPage></FooterPage>
        </div>
    </div>
</template>

<script>
import TopNav from '@/components/aboutComp/TopNav.vue';
// import FooterPage from '../FooterPage.vue';
export default {
    components: { TopNav,
        //  FooterPage
         },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            faq: [
                {
                    id: 1,
                    icon: 'bi bi-person fs-1',
                    text: 'Account',
                    link: 'faqs/account'
                },
                {
                    id: 2,
                    icon: 'bi bi-journal-richtext fs-1',
                    text: 'Orders',
                    link: 'faqs/order',
                },
                {
                    id: 3,
                    icon: 'bi bi-wallet fs-1',
                    text: 'Payments',
                    link: 'faqs/payment',
                },
                {
                    id: 4,
                    icon: 'bi bi-truck fs-1',
                    text: 'Delivery',
                    link: 'faqs/delivery',
                },
                {
                    id: 5,
                    icon: 'bi bi-file-lock fs-1',
                    text: 'Privacy Policy',
                    link: 'privacy-policy',
                },
                {
                    id: 6,
                    icon: 'bi bi-journal-check fs-1',
                    text: 'Terms & Conditions',
                    link: 'terms',
                },
                // {
                //     id: 7,
                //     icon: 'bi bi-person fs-1',
                //     text: 'Care Instructions',
                //     link: 'faqs/care-instructions',
                // },
                // {
                //     id: 8,
                //     icon: 'bi bi-ticket fs-1',
                //     text: 'Promotions',
                //     link: 'faqs/promotions',
                // },
                // {
                //     id: 9,
                //     icon: 'bi bi-pentagon fs-1',
                //     text: 'Membership',
                //     link: 'faqs/membership',
                // },

            ]
        }
    },

}
</script>