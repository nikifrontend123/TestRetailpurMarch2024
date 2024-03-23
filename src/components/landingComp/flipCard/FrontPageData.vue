 <template>
    <div>
        <div  class="heading d-flex justify-content-center">

            <h2 class="title mt-4"> {{ title }} </h2>
        </div>
        <div class="imgs d-flex justify-content-center">
            <div style=" display: grid; place-items: center; justify-content: center;align-items: center;"
                class="img w-100">
                <!-- <img class="d-flex justify-content-center" src="imgurls" width="25%" alt=""> -->
                <img v-bind:src=imageSource />
                <h4 class="w-100 d-flex justify-content-center align-items-center fs-2">
                    {{ titleh4 }}</h4>
                <p class="text-center" style="margin: 15px 10px;">
                   {{ text }}
                </p>
            </div>
           
        </div>
    </div>
</template>

<script>

export default {
    // data(){
    //     return {
    //         title:[],
    //         titleh4:[],
    //         text:[],
    //     }
    // },
    props: {
        title: String ,
        titleh4: String ,
        text: String,
        // img : img1
    },

    computed: {
        imgurls() {
            return new URL(this.frontPageData.img1, import.meta.url).href
        },
    }
}
</script>

<style lang="scss" scoped></style> 