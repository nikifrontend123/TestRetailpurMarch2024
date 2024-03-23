<template>
    <div style="  min-height: 100vh;">
        <DeshiGirlLogo></DeshiGirlLogo>
        <div class="px-4 pb-5">
            <div class="">
                <div class="mt-4">
                    <p class="fs-5">Account Login</p>
                    <div class="form-floating mb-2 ">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Email" v-model="Email">
                        <label for="floatingInput" class="text-muted">Enter your Email</label>
                    </div>
                    <div class="form-floating mb-2 ">
                        <input type="password" class="form-control" id="floatingInput" placeholder="Password"
                            v-model="Password">
                        <label for="floatingInput" class="text-muted">Password</label>
                        <RouterLink class="float-end my-2 text-decoration-none text-dark" to="/forgot-password-page">Forgot Password?</RouterLink>
                    </div>
                    <div class="mt-4 text-center">
                        <button class="w-75 btn btn-dark rounded-pill">Submit</button>
                    </div>
                </div>


                <div class="text-center container my-3">
                    <!-- <p>By proceeding, you agree to <RouterLink :to="{ name: 'TOSPage' }">Terms & Conditions</RouterLink> &
                        <RouterLink :to="{ name: 'PrivacyPolicy' }">Privacy policy</RouterLink>
                    </p> -->
                </div>

                <router-link to="/registration-page" class="text-decoration-none text-dark">
                    <p class="text-center">Don't have an account ? Register</p>
                </router-link>

                <div class="text-center mt-2">
                    <p class="login">Or login with</p>
                    <div class="d-flex justify-content-center gap-5">
                        <div class="d-flex flex-column">
                            <i class="bi bi-envelope-fill fs-1"></i>
                            <p>Gmail</p>
                        </div>
                        <div class="d-flex flex-column">
                            <i class="bi bi-facebook fs-1"></i>
                            <p>Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DeshiGirlLogo from './DeshiGirlLogo.vue';
import { RouterLink } from 'vue-router';
export default {
    components: { RouterLink, DeshiGirlLogo },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            phoneNumber: "",
            Email: "",
            Password: "",
            disableButton: true,
            design: 1,
        };
    },
    methods: {
        goBack() {
            window.history.back();
        },
    },
}
</script>

<style scoped>
 

.btn-brand {
    font-weight: 700;
    background-color: #ECA1A6;
    color: rgb(73, 44, 46);
}

.login {
    font-family: sans-serif;
    text-align: center;
    position: relative;
}

.login:before {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #000000;
    left: 0;
    top: 50%;
    position: absolute;
}

.login:after {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #000000;
    right: 0;
    top: 50%;
    position: absolute;
}
</style>