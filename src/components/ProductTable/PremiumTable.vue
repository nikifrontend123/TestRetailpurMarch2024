<template>
    <div>
        <p class="m-0 fw-bold text-decoration-underline" style="font-size:16px;">Enter Desired quantity Of Available
            Varients</p>
        <div class="table-responsive mt-4" id="scroll">
            <table class="table border border-1">
                <thead>
                    <tr>
                        <th scope="col">
                            <div class="d-flex flex-column align-items-center">
                                <p class="m-0">SKU</p>
                                <p class="m-0">{{ skuCount }}</p>
                            </div>
                        </th>
                        <th scope="col" v-for="(size, index) in product.sizes" :key="index" style="background-color: #e6e6e6;">
                            <div class="fw-bold d-flex flex-column align-items-center" style="">
                                <p class="m-0">{{ size.name }}</p>
                                <p class="m-0">₹{{ size.price }}</p>
                            </div>
                        </th>
                    </tr>

                </thead>
                <tbody>
                    <tr v-for="(color, colorindex) in product.colors" :key="colorindex">
                        <td class="">
                            <div class="rounded-circle align-items-center justify-content-center d-flex">
                                <img class="rounded-circle" :src="color.img"
                                    style="width: 38px; height: 38px;object-fit: fill;">
                            </div>
                        </td>
                        <td  v-for="(size, sizeindex) in product.sizes" :key="sizeindex">
                            <div>
                                <input type="number" class="form-control text-center" placeholder="0"
                                    v-model="quantities[colorindex][sizeindex]" >
                            </div>
                        </td>
                    </tr>
                    <tr scope="row" style="background-color: #e6e6e6;">
                        <th>Qty</th>
                        <td class="text-center" v-for="(size, sizeindex) in product.sizes" :key="sizeindex">
                            {{ calculateQty(sizeindex) }}
                        </td>
                    </tr>
                    <tr scope="row" style="background-color: #e6e6e6;">
                        <th>Amt.</th>
                        <td class="text-center" v-for="(size, sizeindex) in product.sizes" :key="sizeindex">
                            ₹{{ calculateTotal(sizeindex) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="d-flex justify-content-between p-2" style="background-color:#e6e6e6;font-size:12px">
           <div class="d-flex flex-column">
            <div class="d-flex gap-2">
                <p class="mb-0">Total Sku</p>
                <p class="mb-0 fw-bold" style="">{{ skuCounter }}</p>
            </div>
            <div class="d-flex gap-2">
                <p class="mb-0">Total Qty</p>
                <p class="mb-0 fw-bold">{{ calculateTotalQty }}</p>
            </div>
           </div>
            <div class="">
                <p class="mb-0">Grand Total</p>
                <p class="mb-0 fw-bold">₹{{ calculateGrandTotal }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import ProductTable from '@/mixins/ProductTable.js'
export default {
    name: 'PremiumTable',
    mixins:[ProductTable],
    data() {
        return {
            quantities: [],
        }
    },
    computed: {
        product() {
            let productId = this.$route.params.productId;
            return this.$store.getters['catalog/getProduct'](productId);
        },
    },

    methods: {
    },
    

}
</script>

<style scoped>
#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}

table th:first-child,
.table td:first-child {
    position: sticky;
    left: 0;
    background-color: #e8e8e8;
    color: #373737;
}
</style> 