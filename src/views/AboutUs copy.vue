<template>
    <div>
        <div class="  w-100">
            <TopNav></TopNav>
            <!-- <div class="container mb-5">
                <p class="p-2 text-center mb-0 bill"><span class="fs-2">~ Contact ~</span></p>
                <div class="d-flex justify-content-evenly">
                    <div v-for="(contact, index) in contacts" :key="index" class="py-2">
                        <div class="d-flex justify-content-center">
                            <div style="width: 60px; height: 60px;background: linear-gradient(133deg, rgba(106,106,106,1) 45%, rgba(0,0,0,1) 55%);"
                                class="rounded-circle border border-5 d-flex align-items-center justify-content-center">
                                <a class="text-white" v-if="contact.name === 'Call'" :href="'tel:' + contact.number">
                                    <i :class="contact.icon"></i>
                                </a>
                                <a class="text-white" v-else-if="contact.name === 'Whatsapp'"
                                    :href="'https://wa.me/' + contact.number + '?text=' + encodeURIComponent(contact.message)">
                                    <i :class="contact.icon"></i>
                                </a>
                                <a class="text-white" v-else-if="contact.name === 'Mail'"
                                    :href="'mailto:' + contact.email + '?subject=' + encodeURIComponent(contact.subject) + '&body=' + encodeURIComponent(contact.body)">
                                    <i :class="contact.icon"></i>
                                </a>
                                <a class="text-white" v-else-if="contact.name === 'Location'"
                                    :href="'https://www.google.com/maps?q=' + encodeURIComponent(contact.location)">
                                    <i :class="contact.icon"></i>
                                </a>
                                <a class="text-white" v-else>
                                    <i :class="contact.icon"></i>
                                </a>
                            </div>
                        </div>
                        <p class="text-center mt-2 fw-bold">{{ contact.name }}</p>
                    </div>
                </div>
            </div> -->
            <p class="p-2 text-center mt-3 mb-0 bill"><span class="fs-2">~ Brands ~</span></p>
            <div class="container mb-5">
                <TeamBannes></TeamBannes>
            </div>

            <!-- <div class="container mb-5">
                <p class="p-2 text-center mb-0 bill"><span class="fs-2">~ Our Team ~</span></p>
                <RecognitionBanner></RecognitionBanner>
            </div> -->
            <!-- ---------------------------------- -->
            <!-- <div class="container py-5">
                <p class="p-2 text-center mb-0 bill"><span class="fs-2">~ Bussiness ~</span></p>
                <div class="d-flex justify-content-evenly mt-4 ">
                    <div class="text-center fw-bold">
                        <p class="m-0 d-flex justify-content-center align-items-center fs-2">
                            <AutoCounter :data="10"> </AutoCounter>&nbsp;+
                        </p>
                        <p class="mt-0">Years Of <br> Experience</p>
                    </div>
                    <div class="text-center fw-bold">
                        <p class="m-0 d-flex justify-content-center align-items-center fs-2">
                            <AutoCounter :data="100"> </AutoCounter>&nbsp;+
                        </p>
                        <p class=" mt-0">Products <br> Listed</p>
                    </div>
                    <div class="text-center fw-bold">
                        <p class="m-0 d-flex justify-content-center align-items-center fs-2">
                            <AutoCounter :data="1000"> </AutoCounter>&nbsp;+
                        </p>
                        <p class=" mt-0">Happy <br> Customers</p>
                    </div>

                </div>
            </div> -->
            <!-- ---------------------------------- -->


            <!-- <div class=" container mb-5">
                <p class="p-2 text-center mb-0 bill"><span class="fs-2">~ Follow ~</span></p>
                <div class="d-flex justify-content-evenly">
                    <div v-for="(contact, index) in folows" :key="index" class="py-2">
                        <div class="d-flex justify-content-center">
                            <div class="rounded-circle border border-5 d-flex align-items-center justify-content-center"
                                style="width: 60px; height: 60px;background: linear-gradient(133deg, rgba(106,106,106,1) 45%, rgba(0,0,0,1) 55%);">
                                <a class="text-white" v-if="contact.name === 'Facebook'" :href="contact.url"
                                    target="_blank">
                                    <i :class="contact.icon"></i>
                                </a>
                                <a class="text-white" v-else-if="contact.name === 'Instagram'" :href="contact.url"
                                    target="_blank">
                                    <i :class="contact.icon"></i>
                                </a>
                                <a class="text-white" v-else-if="contact.name === 'YouTube'" :href="contact.url"
                                    target="_blank">
                                    <i :class="contact.icon"></i>
                                </a>
                                <a class="text-white" v-else-if="contact.name === 'LinkedIn'" :href="contact.url"
                                    target="_blank">
                                    <i :class="contact.icon"></i>
                                </a>
                                <a class="text-white" v-else>
                                    <i :class="contact.icon"></i>
                                </a>
                            </div>
                        </div>
                        <p class="text-center mt-2 fw-bold">{{ contact.name }}</p>
                    </div>
                </div>
            </div>

            <div class="container my-5">
                <p class="p-2 text-center mb-0 bill mb-3"><span class="fs-2">~ Message ~</span></p>
                <div class=" bg-light border pb-3">
                    <form class="p-3 pb-0 py">
                        <div class="d-md-flex d-block justify-content-between">
                            <div class="mb-3 w-100 px-1">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1">
                            </div>
                            <div class="mb-3 w-100 px-1">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Purpose</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 mb-3">Submit</button>
                    </form>

                </div>
            </div> -->

            <div class="w-100 position-relative bottom-0">
                <FooterPage></FooterPage>
            </div>
        </div>

    </div>
</template>

<script>
// import FooterPage from '@/components/aboutComp/FooterPage.vue';
import TeamBannes from '@/components/aboutComp/TeamBannes.vue';
// import RecognitionBanner from '@/components/aboutComp/RecognitionBanner.vue';
// import AutoCounter from '@/components/aboutComp/AutoCounter.vue';
// import TopNav from '@/components/aboutComp/TopNav.vue';

export default {
    components: {
        // FooterPage,
        //  TopNav,
        TeamBannes,
        //    AutoCounter,
        //    RecognitionBanner
    },
    data() {
        return {
            contacts: [
                {
                    icon: 'bi bi-telephone fs-3',
                    name: 'Call',
                    number: '+919999437620'
                },
                {
                    icon: 'bi bi-whatsapp fs-3',
                    name: 'Whatsapp',
                    number: '+919999437620',
                    message: 'Hello, I would like to inquire about'
                },
                {
                    icon: 'bi bi-envelope fs-3',
                    name: 'Mail',
                    email: 'support@machiddle.com',
                    subject: 'Inquiry',
                    body: 'Hello, I would like to inquire about...'

                },
                {
                    icon: 'bi bi-geo fs-3',
                    name: 'Location',
                    location: 'B-72/1, Pocket X, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020, India'
                },
            ],
            folows: [
                {
                    icon: 'bi bi-facebook fs-3',
                    name: 'Facebook',
                    url: 'https://www.facebook.com/yourpage'
                },
                {
                    icon: 'bi bi-instagram fs-3',
                    name: 'Instagram',
                    url: 'https://www.instagram.com/yourprofile'
                },
                {
                    icon: 'bi bi-youtube fs-3',
                    name: 'YouTube',
                    url: 'https://www.youtube.com/'
                },
                {
                    icon: 'bi bi-linkedin fs-3',
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/yourprofile'
                }
            ],
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

.fs {
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    /* Change this value to any desired font weight between 100 and 900 */
    font-style: normal;
}
</style>
