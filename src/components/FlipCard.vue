<template>
    <div class="main-containerrr mb-2">
        <div class="thecard m-2 position-absolute " style="width: 250px; height: 320px;">
            <div class="thefront w-100 h-100 position-absolute " style="color: #333;">
                <div class="img" style="position: relative">
                    <img @click="toggle" style="width: 100%; height: 320px"
                        src="https://img101.urbanic.com/v1/goods-pic/5d96021f8db84ad5a04666caccf3895aUR_w750_q90.webp"
                        alt="" />

                    <div v-if="!isActive" class="left">
                        <p
                            style="position: absolute; top: 0; left: 10px; color: #333;font-size: 19px; font-weight: 600;">
                            F
                        </p>
                    </div>
                    <div v-if="!isActive" class="right ">
                        <i style="opacity: 60%; background-color: #000000; color: #ffffff;  position: absolute; top: 5px; right: 8px; font-size: 20px;"
                            class="rounded-circle p-1 d-flex justify-content-center align-items-center fs-4 button button-info bi bi-phone-flip"></i>
                    </div>

                </div>
                <div class="fw-bold d-flex justify-content-between">
                    <p class="mb-0">##00000</p>
                    <p class="mb-0">54pcs</p>
                </div>
            </div>
            <div v-if="isActive" class="theback  w-100 h-100 position-relative "
                style="background: #00000099; color: #fffdfd;">
                <!-- <div style="background: rgba(255, 34, 0, 0.64)" class="text-center">Order Detail <i
                    class="bi bi-arrow-right"></i></div> -->
                <div class=" top-100">
                    <div class="right ">
                        <i style="color: #ffffff;  position: absolute; top: 5px; right: 8px; font-size: 20px;"
                            class="rounded-circle p-1 d-flex justify-content-center align-items-center fs-4 button button-info bi bi-phone-flip"></i>
                    </div>
                    <div class="right">
                        <div @click="isActive = !isActive" style="cursor:pointer"
                            class="position-absolute top-0 start-0 end-0 bottom-0"></div>
                    </div>
                    <div style="position: absolute;bottom: 0;width: 100%;" class="fw-bold">
                        <p class="text-center mb-0 fs-5">Sardar Ledger</p>
                        <p style="font-size: var(--x-small);" class="text-center mb-2">Balance Quantity</p>
                        <div class="d-flex justify-content-between text-align-center mb-2 ">
                            <p class="mb-0 w-100 text-center">
                                <span class="fs-4">500</span><br>
                                <span style="font-size: var(--x-small);">Incoming</span>
                            </p>
                            <p class="mb-0 w-100"></p>
                            <p class="mb-0 w-100 text-center">
                                <span class="fs-4">300</span><br>
                                <span style="font-size: var(--x-small);">Ready</span>
                            </p>
                        </div>
                        <div class=" d-flex justify-content-center text-align-center">
                            <div class="d-flex align-items-center flex-column bg-dark border w-100 fw-bold p-0">
                                <i class="bi bi-plus-lg"></i>
                                <p class="m-0" style="font-size:12px;">Order</p>
                            </div>
                            <div class="d-flex align-items-center flex-column bg-dark border w-100 fw-bold p-0">
                                <i class="bi bi-eye"></i>
                                <p class="m-0" style="font-size:12px;">View</p>
                            </div>
                            <div class="d-flex align-items-center flex-column bg-dark border w-100 fw-bold p-0">
                                <i class="bi bi-plus-lg"></i>
                                <p class="m-0" style="font-size:12px;">Demand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: "FlipCard",
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggle() {
            this.isActive = !this.isActive;
        },
    },
};
</script>

<style scoped></style>
