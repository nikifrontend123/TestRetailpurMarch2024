<template>
    <div>
        <div id="section8" class="section mb-5">
            <!-- <div class="  ">
                <p class="p-2 text-center mb-0 bill" style=""><span class="fs-2">~ Contact ~</span></p>
                <div class="container">
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
                </div>
            </div> -->

            <!-- 
            <div class="mb-5">
                <p class="p-2 text-center mb-0 bill" style=""><span class="fs-2">~ Bussiness ~</span>
                </p>
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

            <p class="p-2 text-center mb-0 bill" style=""><span class="fs-2">~ Connect ~</span> </p>
            <div class="container mb-5">
                <div class="row d-flex justify-content-center ">
                    <div v-for="(contact, index) in folows" :key="index" class="col-3 col-md-1 py-2">
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="rounded-circle border border-5 d-flex align-items-center justify-content-center"
                                style="width: 60px; height: 60px;background: linear-gradient(133deg, rgba(106,106,106,1) 45%, rgba(0,0,0,1) 55%);">
                                <a class="text-white" :href="contact.url" target="_blank">
                                    <i :class="contact.icon"></i>
                                </a>
                            </div>
                        </div>
                        <p class="text-center mt-2 fw-bold">{{ contact.name }}</p>
                    </div>
                </div>
            </div>

            <p class="p-2 text-center mb-0 bill" style=""><span class="fs-2">~ Schedule ~</span> </p>
            <div class="d-flex justify-content-center">
                <div class="container row ">
                    <div class="col-md-3 m-1 col-1 card card-body bg-light text-secondary">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-clock-fill fs-1 me-3"></i>
                            <div class="">
                                <span class="fw-bold">09:00 AM </span> —
                                <span class="fw-bold"> 09:00 PM</span>
                                <div class="d-flex">
                                    <div v-for="(week, index) in weeks" :key="index">
                                        <div class="d-flex">
                                            <small style="font-size: var(--x-small)" class="week-label truncate3">
                                                <span class="fw-bold">{{ week.day }}</span>
                                                <span v-if="index !== weeks.length - 1"> &nbsp;|&nbsp; </span>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 m-1 card card-body bg-light text-secondary">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-clock-fill fs-1 me-3"></i>
                            <div class="">
                                <span class="fw-bold">09:00 AM </span> —
                                <span class="fw-bold"> 09:00 PM</span>
                                <div class="d-flex">
                                    <div v-for="(week, index) in weeks" :key="index">
                                        <div class="d-flex">
                                            <small style="font-size: var(--x-small)" class="week-label truncate3">
                                                <span class="fw-bold">{{ week.day }}</span>
                                                <span v-if="index !== weeks.length - 1"> &nbsp;|&nbsp; </span>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 m-1 col-1 card card-body bg-light text-secondary">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-clock-fill fs-1 me-3"></i>
                            <div class="">
                                <span class="fw-bold">09:00 AM </span> —
                                <span class="fw-bold"> 09:00 PM</span>
                                <div class="d-flex">
                                    <div v-for="(week, index) in weeks" :key="index">
                                        <div class="d-flex">
                                            <small style="font-size: var(--x-small)" class="week-label truncate3">
                                                <span class="fw-bold">{{ week.day }}</span>
                                                <span v-if="index !== weeks.length - 1"> &nbsp;|&nbsp; </span>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import AutoCounter from '@/components/aboutComp/AutoCounter.vue';
export default {
    components: {
        // AutoCounter
    },
    data() {
        return {
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
                },
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
            weeks: [
                { day: 'Mon' },
                { day: 'Tue' },
                { day: 'Wed' },
                { day: 'Thu' },
                { day: 'Fri' },
                { day: 'Sat' },
                { day: 'Sun' },
            ]
        }
    }

}
</script>

<style lang="scss" scoped></style>