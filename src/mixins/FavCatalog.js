 const FavCatalog = {
    methods: {
        saveProduct(product) {
            this.$store.dispatch('catalog/saveProduct', product)
        },
    }
}
export default FavCatalog
