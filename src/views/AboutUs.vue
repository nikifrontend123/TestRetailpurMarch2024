<template>
    <div>
        <RetailpurTopNav></RetailpurTopNav>

        <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                        type="button" role="tab" aria-controls="home" aria-selected="true">Post</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                        type="button" role="tab" aria-controls="profile" aria-selected="false">Form 2</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                        type="button" role="tab" aria-controls="contact" aria-selected="false">Form 3</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <p class="p-2 text-center mb-0 " style=""><span class="fs-2">Post</span></p>
                    <div class="container">
                        <div class=" bg-light border pb-3">
                            <form class="p-3 pb-0 py">
                                <div class="d-md-flex d-block justify-content-between">
                                    <div class="mb-3 w-100 px-1">
                                        <label for="exampleFormControlInput1" class="form-label">Heading</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1">
                                    </div>
                                    <div class="mb-3 w-100 px-1">
                                        <label for="exampleFormControlInput1" class="form-label">Amount</label>
                                        <input type="number" class="form-control" id="exampleFormControlInput1">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Link</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <TagsComp></TagsComp>
                                <button type="submit" class="btn btn-primary w-100 mb-3">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <p class="p-2 text-center mb-0 bill" style=""><span class="fs-2">~ Form 2 ~</span></p>
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
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <p class="p-2 text-center mb-0 bill" style=""><span class="fs-2">~ Form 3 ~</span></p>
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
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import TagsComp from '@/components/TagsComp.vue'
import RetailpurTopNav from '@/components/navbar/RetailpurTopNav.vue'
export default {
    components: {
        RetailpurTopNav,TagsComp
    }
}
</script>

<style lang="scss" scoped></style>