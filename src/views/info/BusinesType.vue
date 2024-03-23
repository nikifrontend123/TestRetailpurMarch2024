<template>
    <ProfileNav></ProfileNav>
    <div class="container mt-3">
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                style="width:75%">
                75%
            </div>
        </div>
    </div>
    <div class="mt-3">
        <div class="container">
            <p class="fs-5 text-center">Catagory</p>

            <div class="">
                <div v-for="(type, index) in types" :key="index"
                    class="d-flex justify-content-between px-2 py-2  align-items-center   border-bottom">
                    <div class="d-flex">
                        <div>
                            <img :src="type.img" alt="">
                        </div>
                        <label class="ms-2 form-check-label" :for="'inlineRadio' + index">
                            <span>{{ type.label }}</span>
                            <p class="mb-0">{{ type.heading }}</p>
                        </label>
                    </div>

                    <input class="form-check-input" type="radio" name="inlineRadioOptions" :id="'inlineRadio' + index"
                        :value="type.value">
                </div>
            </div>
            <div class="d-flex justify-content-center my-3 w-100">
                <!-- <RouterLink to=/ContactDetail class="w-100"> -->
                    <button class="btn btn-dark w-100 py-3" type="submit">Save<i
                            class="bi bi-arrow-right  ms-2"></i></button>
                <!-- </RouterLink> -->
            </div>
        </div>
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
            types: [
                {
                    id: 1,
                    label: 'I sell online from my home',
                    heading: 'Reseller',
                    img: '/img/first.png',
                },
                {
                    id: 2,
                    label: 'I have a retail Shop',
                    heading: 'Retailer',
                    img: '/img/sec.png',
                },
                {
                    id: 3,
                    label: 'I have wholsale Store',
                    heading: 'Wholesaler',
                    img: '/img/third.png',
                },
                {
                    id: 4,
                    label: 'i Have a manufacturing unit',
                    heading: 'Manufacturer',
                    img: '/img/fourth.png',
                },
            ]
        }
    }

}
</script>

<style scoped></style>