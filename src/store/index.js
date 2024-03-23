import { createStore } from "vuex";
import catalog from "./catalog";
import collection from "./collection";
import shop from "./shop";
import order from "./order";
import product from "./product";
import promoter from "./promoter";
export default createStore({
  state: {
    reviews: [
      {
        id: 1,
        show: false,
        brand: 'clobug',
        imgr: '/img/brand/clobug.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 2,
        show: false,
        brand: 'cylqa',
        imgr: '/img/brand/cylqa.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 3,
        show: false,
        brand: 'dnb Clothing',
        imgr: '/img/brand/dnbClothing.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 4,
        show: false,
        brand: 'dry fitt',
        imgr: '/img/brand/dryfitt.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 5,
        show: false,
        brand: 'fineLegs',
        imgr: '/img/brand/fineLegs.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 6,
        show: false,
        brand: 'fleekIin',
        imgr: '/img/brand/fleekIin.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 7,
        show: false,
        brand: 'greenCherry',
        imgr: '/img/brand/greenCherry.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 8,
        show: false,
        brand: 'legsUp',
        imgr: '/img/brand/legsUp.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 9,
        show: false,
        brand: 'underGears',
        imgr: '/img/brand/underGears.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 10,
        show: false,
        brand: 'cylqa',
        imgr: '/img/brand/cylqa.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 11,
        show: false,
        brand: 'greenCherry',
        imgr: '/img/brand/greenCherry.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 12,
        show: false,
        brand: 'fleekIin',
        imgr: '/img/brand/fleekIin.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 13,
        show: false,
        brand: 'dryfitt',
        imgr: '/img/brand/dryfitt.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 14,
        show: false,
        brand: 'legsUp',
        imgr: '/img/brand/legsUp.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
    ],
    brandsTwo: [
      {
        id: 1,
        show: false,
        imgr: '/img/brand2/1.jpg',
        text: ' "Using Retailpur.com has given me the opportunity to sell more products, and my customers have increased greatly over the period I joined as a Retailer."'
      },
      {
        id: 2,
        show: false,
        imgr: '/img/brand2/2.jpg',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
      {
        id: 3,
        show: false,
        imgr: '/img/brand2/3.jpg',
        text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
      },
      {
        id: 4,
        show: false,
        imgr: '/img/brand2/4.jpg',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 5,
        show: false,
        imgr: '/img/brand2/5.webp',
        text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
      },
      {
        id: 6,
        show: false,
        imgr: '/img/brand2/6.jpg',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
      {
        id: 7,
        show: false,
        imgr: '/img/brand2/7.webp',
        text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
      },
      {
        id: 8,
        show: false,
        imgr: '/img/brand2/1.jpg',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 9,
        show: false,
        imgr: '/img/brand2/3.jpg',
        text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
      },
      {
        id: 10,
        show: false,
        imgr: '/img/brand2/6.jpg',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
      {
        id: 11,
        show: false,
        imgr: '/img/brand2/1.jpg',
        text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
      },
      {
        id: 12,
        show: false,
        imgr: '/img/brand2/5.webp',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 13,
        show: false,
        imgr: '/img/brand2/7.webp',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 14,
        show: false,
        imgr: '/img/brand2/1.jpg',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
    ],
    catagories: [
      { image: 'img/catalog/Tops.png', label: 'Under ₹ 199' },
      { image: 'img/catalog/Tshirt.png', label: 'Under ₹ 299' },
      { image: 'img/catalog/Co-ords.png', label: 'Under ₹ 399' },
      { image: 'img/catalog/Jumpsuits.png', label: 'Under ₹ 499' },
      { image: 'img/catalog/Bottoms.png', label: 'Under ₹ 599' },
      { image: 'img/catalog/Dresses.png', label: 'Under ₹ 699' },
      { image: 'img/catalog/Shirts.png', label: 'Under ₹ 799' },
    ],
    brands: [
      { image: '/img/brand/clobug.png', width: '0%' },
      { image: '/img/brand/cylqa.png', width: '80%' },
      { image: '/img/brand/dnbClothing.png', width: '60%' },
      { image: '/img/brand/dryfitt.png', width: '60%' },
      { image: '/img/brand/fineLegs.png', width: '60%' },
      { image: '/img/brand/fleekIin.png', width: '60%' },
      { image: '/img/brand/greenCherry.png', width: '80%' },
      { image: '/img/brand/legsUp.png', width: '60%' },
      { image: '/img/brand/underGears.png', width: '60%' },
    ],
    collections: [
      {
        id: 1,
        img: 'img/catalog/bottoms.png',
        name: 'Bottoms',
        
      },
      {
        id: 2,
        img: 'img/catalog/Tops.png',
        name: 'Tops',
      },
      {
        id: 3,
        img: 'img/catalog/Tshirt.png',
        name: 'T-shirts',
      },
    ],

  },
  getters: {
    getCollection(state) {
      return state.collections
    },
    getReviews(state) {
      return state.reviews;
    },
    getBrandsTwo(state) {
      return state.brandsTwo;
    },
    getCatagories(state) {
      return state.catagories;
    },
    getBrands(state) {
      return state.brands;
    },
  },
  mutations: {
    addToCollection(state, data) {
      state.collections.push(data)
    },
    toggleReview(state, review) {
      let index = state.reviews.indexOf(review);
      state.reviews.forEach(user_review => {
        user_review.show = false
      });
      state.reviews[index].show = true
    },
    toggleBrand(state, brand) {
      let index = state.brandsTwo.indexOf(brand);
      state.brandsTwo.forEach(brand_review => {
        brand_review.show = false
      });
      state.reviews[index].show = true
    },
  },
  actions: {
    addToCollection({ commit }, data) {
      commit('addToCollection', data)
    },
    toggleReview({ commit }, review) {
      commit("toggleReview", review);
    },
    toggleBrand({ commit }, brand) {
      commit("toggleBrand", brand);
    },
  },
  modules: {
    collection: collection,
    catalog: catalog,
    shop: shop,
    order: order,
    product: product,
    promoter: promoter,
  },
});
