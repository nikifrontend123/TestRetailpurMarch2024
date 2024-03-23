export default {
    namespaced: true,
    state: {
        shops: [
            {
                id: 1,
                img: 'img/users/1.png',
                name: 'Travis',
                post: 'Business Owner',
                businessName: 'Fashion Apparels Fashion Apparels',
                support: 200,
                business: {
                    shopName: 'Hanumant Fashion',
                    img: 'https://wallpapercave.com/wp/wp10271263.jpg',
                    logo: 'https://5.imimg.com/data5/SELLER/Logo/2022/9/UM/BC/OE/72344956/hfnx-120x120.png',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus.'
                }
            },
            {
                id: 2,
                img: 'img/users/2.png',
                name: 'Kanye',
                post: 'Business Owner',
                businessName: 'Fashion Apparels Fashion Apparels',
                support: 100,
                business: {
                    shopName: 'Being human',
                    logo: 'https://i.pinimg.com/736x/51/31/29/51312900af793b8e1be37529a13f43f6.jpg',
                    img: 'https://i.pinimg.com/736x/e4/86/c5/e486c500d7fd46609045aba1dea45efd.jpg',
                    description: 'Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. '
                }
            },
            {
                id: 3,
                img: 'img/users/1.png',
                name: 'Travis',
                post: 'Business Owner',
                businessName: 'Fashion Apparels Fashion Apparels',
                support: 200,
                business: {
                    shopName: 'Hanumant Fashion',
                    img: 'https://wallpapercave.com/wp/wp10271263.jpg',
                    logo: 'https://5.imimg.com/data5/SELLER/Logo/2022/9/UM/BC/OE/72344956/hfnx-120x120.png',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus.'
                }
            },
            {
                id: 4,
                img: 'img/users/2.png',
                name: 'Kanye',
                post: 'Business Owner',
                businessName: 'Fashion Apparels Fashion Apparels',
                support: 100,
                business: {
                    shopName: 'Being human',
                    logo: 'https://i.pinimg.com/736x/51/31/29/51312900af793b8e1be37529a13f43f6.jpg',
                    img: 'https://i.pinimg.com/736x/e4/86/c5/e486c500d7fd46609045aba1dea45efd.jpg',
                    description: 'Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. '
                }
            },
            // Add more shop objects as needed
        ],
        savedShop: []
    },
    getters: {
        getShops(state) {
            return state.shops;
        },
        getSavedShop(state) {
            return state.savedShop;
        },
        getShopss: (state) => (voteId) => {
            let index = state.shops.findIndex(vote => vote.id == voteId);
            return state.shops[index];
        },
    },
    mutations: {
        SAVE_SHOP(state, shopData) {
            state.savedShop.push(shopData);
        }
    },
    actions: {
        saveShop({ commit }, shopData) {
            commit('SAVE_SHOP', shopData);
        }
    }
}
