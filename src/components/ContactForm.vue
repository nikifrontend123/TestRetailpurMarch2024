<template>
    <div class="p-3 d-flex justify-content-between"
        style="color: var(--primary-color); background-color: var(--secondary-color);">
        <i @click="goBack()" class="bi bi-chevron-left"></i>
        <div class="">Contact Form</div>
        <div class=""></div>
    </div>
    <div class="container">
        <h1 class="text-center mb-4">• KEEP IN TOUCH •</h1>
        <div class="row">
            <div class="col-lg-6">
                <div class="mb-3">
                    <label for="name" class="form-label">My name is</label>
                    <input type="text" class="form-control" placeholder="Enter your name" v-model="formData.name"
                        required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">My e-mail is</label>
                    <input type="email" class="form-control" placeholder="Enter your email" v-model="formData.email"
                        required>
                </div>
                <div class="mb-3">
                    <label for="telephone" class="form-label">My number is</label>
                    <input type="text" class="form-control" placeholder="Enter your phone number"
                        v-model="formData.telephone" required>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="mb-3">
                    <label for="subject" class="form-label">Subject line</label>
                    <select class="form-select" v-model="formData.subject" required>
                        <option disabled selected>Select a subject</option>
                        <option>I'd like to start a project</option>
                        <option>I'd like to ask a question</option>
                        <option>I'd like to make a proposal</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">I'd like to chat about</label>
                    <textarea class="form-control" rows="5" placeholder="Enter your message" v-model="formData.message"
                        required></textarea>
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary btn-block" @click.prevent="submitForm">Send Message</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                telephone: '',
                subject: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
            console.log('Form data:', this.formData);
        },
        goBack() {
            window.history.back()
        }
    }
};
</script>

<style scoped>
/* Add your custom CSS here */
/* You can remove the existing CSS since Bootstrap provides styling */
</style>