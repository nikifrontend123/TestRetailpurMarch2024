export default {
    namespaced: true,
    state: {
        products: [
            {
                id: 1,
                name: 'Sheer Pullover T-shirt',
                img: 'https://img101.urbanic.com/v1/goods-pic/4f8bd334d26b4144bca22a09f38bc28fUR_w750_q90.webp',
                price: 2300,
                unit: 12,
                moq: 10,
                option: [],
                range: [],
            },
            {
                id: 2,
                name: 'Black Top',
                img: 'https://img101.urbanic.com/v1/goods-pic/286e3f3c7b2541d681460f61ea4bb4aaUR_w360_q85.webp',
                price: 799,
                unit: 12,
                moq: 10,
                option: [],
                range: [],
            },
        ],
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
        // getProduct: (state) => (productId) => {
        //     let index = state.products.findIndex(product => product.id == productId);
        //     return state.products[index];
        // },
        getProduct: (state) => (productId) => {
            return state.products.find(product => product.id === productId);
        }
    },
    mutations: {
        addProduct(state, newProduct) {
            console.log('Adding product:', newProduct);
            state.products.push(newProduct);
            console.log('Products after adding:', state.products);
        },
    },
    actions: {
        // Action to add product (if any async operations are needed)
        addProduct({ commit }, newProduct) {
            commit('addProduct', newProduct); // Commit mutation to add product
        },
        async fetchProductById({ getters }, productId) {
            try {
                const product = getters.getProduct(productId);
                return product; // Return the fetched product
            } catch (error) {
                console.error('Error fetching product:', error);
                throw error; // Throw the error for handling in the component
            }
        }
    }
}