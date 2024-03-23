<template>
    <div style="min-height: 100vh;" class="bg-secondary">
        <DeshiGirlLogo></DeshiGirlLogo>
        <div class="px-4 pb-5 card rounded-5" style="padding-top: 20px;">
            <div class="d-flex flex-column align-items-center text-center">
                <h4>OTP has been sent to your email</h4>
                <p>We've sent an email to user@gmail.com to verify your email address, please update OTP in a email
                    verification
                    section and activate your account.
                </p>
                <RouterLink to="/registration-page" class="text-decoration-none" style="cursor: pointer;">Click here
                </RouterLink>
                <p> If you would like to change the email address you signed up with.</p>
                <div class="w-100 p-2 form-floating container">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Enter OTP">
                    <label for="floatingInput">Enter Otp</label>
                </div>
            </div>
            <div class="d-flex justify-content-between container">
                <div class="">
                    <p v-if="displayText">{{ displayText }}</p>
                </div>
                <RouterLink to="" class="text-decoration-none" @click="showText">Resend OTP</RouterLink>
            </div>

            <div class="mt-4 p-2">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn w-100 btn btn-dark fs-5">
                    Submit
                </button>
            </div>
            <!-- -------------Modal----------------- -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Congratulations</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            <p class="m-0 mb-4">Your Email verification has been done successfully, Now you can use this
                                app
                                uninterruptedly</p>
                            <router-link to="/login-page">
                                <button class="btn btn-dark w-100" data-bs-dismiss="modal">Ok</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import DeshiGirlLogo from './DeshiGirlLogo.vue';
export default {
    data() {
        return {
            displayText: ""
        };
    },
    methods: {
        showText() {
            this.displayText = "OTP Resent";
        }
    },
    components: { DeshiGirlLogo }
}
</script>

<style scoped>
.icon {
    background: -webkit-linear-gradient(#492C2E, #ECA1A6);
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>