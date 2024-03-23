export default {
    namespaced: true,
    state: {
        orders: [
            {
                id: 1,
                img: '/img/collection/five.webp',
                shopName: 'Hanumant Fashion',
                productName: 'Green Top',
                date: 23,
                month: 'mar',
                invoiceno: 764653
            },
            {
                id: 2,
                img: '/img/collection/four.webp',
                shopName: 'Clobug Fashion',
                productName: 'Green Top',
                date: 23,
                month: 'mar',
                invoiceno: 764653
            },
            {
                id: 3,
                img: '/img/collection/three.webp',
                shopName: 'H&M Fashion',
                productName: 'Green Top',
                date: 23,
                month: 'mar',
                invoiceno: 764653
            },
            {
                id: 4,
                img: '/img/collection/two.webp',
                shopName: 'Zara Fashion',
                productName: 'Green Top',
                date: 23,
                month: 'mar',
                invoiceno: 764653
            },
        ],
    },
    getters: {
        getOrders(state) {
            return state.orders;
        },
        getOrder: (state) => (orderId) => {
            let index = state.orders.findIndex(order => order.id == orderId);
            return state.orders[index];
        },
    },
    mutations: {},
    actions: {}
}