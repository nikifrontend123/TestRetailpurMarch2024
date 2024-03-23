<template>
    <div class="container py-2 border-bottom">
        <div class="d-flex">
            <div class="input-group">
                <div class="form-outline d-flex" style="border-radius: 0% !important;">
                    <input type="search" id="form1" class="form-control" placeholder="Search"
                        style="border-top-right-radius: 0px !important; border-bottom-right-radius: 0px; " />
                    <button type="button" class="btn btn-primary"
                        style="border-top-left-radius: 0% !important; border-bottom-left-radius: 0%;">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
            <div class="d-flex">
                <div class="mx-1 ms-2 btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample">
                    <i class="bi bi-funnel fs-4"></i>
                </div>
                <div class="mx-1 btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleOne"
                    aria-controls="offcanvasExampleOne">
                    <i class="bi bi-arrow-down-up fs-4"></i>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>