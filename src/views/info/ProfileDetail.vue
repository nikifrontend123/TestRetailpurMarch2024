<template>
    <ProfileNav></ProfileNav>
    <div class="container mt-3">
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                style="width:25%">
                25%
            </div>
        </div>
    </div>

    <div class="container mt-3">
        <p class="fs-5 text-center">Basic Information</p>

        <form class="row g-3">
            <ImageUploadBox @imageUploaded="handleImageUploaded"></ImageUploadBox>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="name" v-model="form.Name">
                <label for="floatingInput">Profile Name</label>
            </div>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Discreption</label>
            </div>

            <div class="form-floating mb-2">
                <input type="date" class="form-control" id="floatingInput" v-model="form.country" required>
                <label for="floatingInput">Date of Establishing</label>
            </div>


            <div class="accordion" id="accordionSizes">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseSizes" aria-expanded="true" aria-controls="collapseSizes">
                            Profile Details
                        </button>
                    </h2>
                    <div id="collapseSizes" class="accordion-collapse collapse show" data-bs-parent="#accordionSizes">
                        <div class="accordion-body">
                            <div class="mb-4">
                                <div class="card-body">
                                    <form @submit.prevent="saveSize">
                                        <div class="mb-3">
                                            <label for="size" class="form-label">Name</label>
                                            <input type="text" class="form-control" id="size" v-model="profile.size"
                                                required>
                                        </div>
                                        <div class="mb-3">
                                            <label for="sizePrice" class="form-label">Value</label>
                                            <input type="text" class="form-control" id="sizePrice"
                                                v-model="profile.price" required>
                                        </div>
                                        <div class="mb-3">
                                            <label for="position" class="form-label">position</label>
                                            <input type="number" class="form-control" id="position"
                                                v-model="profile.position">
                                            <small><small class="text-secondary">Optional</small></small>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <button type="button" class="btn btn-secondary"
                                                @click="resetSizeForm">Reset</button>
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div v-for="(size, index) in sizes" :key="index">
                                <div class="d-flex mb-2 w-100">
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div class="d-block d-md-flex  w-100">
                                            <div class="border px-1  w-100  bg-light border-bottom-0">
                                                <p class="mb-0 w-100"> {{ size.size }}</p>
                                            </div>
                                            <div class="w-100 border px-1">
                                                <p class="mb-0 w-100"> {{ size.price }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-end ms-2">
                                        <button class="  btn btn-sm btn-outline-danger" @click="deleteSize(index)"><i
                                                class="bi bi-trash"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <RouterLink to=/ContactDetail class="d-flex justify-content-center my-3 mb-5 w-100 text-decoration-none">
                <button class="btn btn-dark w-100 py-3" type="submit">Save & Continue <i
                        class="bi bi-arrow-right ms-2"></i></button>
            </RouterLink>
        </form>


        <!-- ----------------------------------------------------------------- -->
    </div>
</template>

<script>
import ProfileNav from '@/components/navbar/ProfileNav.vue';
import ImageUploadBox from '@/components/ImageUploadBox.vue';

export default {
    components: {
        ProfileNav, ImageUploadBox
    },
    name: "StepThree",

    data() {
        return {
            imageUrl: '',
            mydate: null,
            profile: {
                size: '',
                price: '',
                position: ''
            },
            sizes: [],
            form: {
                Name: "",
                discreption: "",
                Pincode: "",
                Year: "",
            },
        }
    },
    methods: {
        handleFileUpload(event) {
            this.images = Array.from(event.target.files);
        },
        getData() {
            console.warn("values :  ", this.form.Name, this.form.BName, this.form.Pincode, this.form.Year);
            alert("Data has been submitted to Console");
        },
        saveSize(event) {
            event.preventDefault();
            if (this.profile.size && this.profile.price) {
                const newSize = { ...this.profile };

                // If position is provided, add the new size at the specified position
                if (newSize.position !== null && newSize.position !== undefined && newSize.position !== '') {
                    const position = parseInt(newSize.position) - 1; // Subtract 1 from the position to start from 1
                    if (position >= 0 && position < this.sizes.length) { // Check if position is between 0 and sizes.length - 1
                        this.sizes.splice(position, 0, newSize);
                    } else {
                        // If position is out of bounds, add the new size at the end
                        this.sizes.push(newSize);
                    }
                } else {
                    // If position is not provided, add the new size at the end
                    this.sizes.push(newSize);
                }

                this.resetSizeForm();
            } else {
                alert('Please enter a size and price');
            }
        },
        resetSizeForm() {
            this.profile = {
                size: '',
                price: ''
            };
        },
        deleteSize(index) {
            this.sizes.splice(index, 1);
        },
    }
}
</script>

<style scoped></style>