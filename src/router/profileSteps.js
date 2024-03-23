
const routes = [

  {
    path: "/ProfileDetail",
    name: "ProfileDetail",
    component: () => import('../views/info/ProfileDetail.vue')
  },

  {
    path: "/ContactDetail",
    name: "ContactDetail",
    component: () => import('../views/info/ContactDetail.vue')
  },

  {
    path: "/BusinessType",
    name: "BusinessType",
    component: () => import('../views/info/BusinesType.vue')
  },
  {
    path: "/WorkTime",
    name: "WorkTime",
    component: () => import('../views/info/WorkTime.vue')
  },
  {
    path: "/product",
    name: "product",
    component: () => import('../views/info/ProductCreated.vue')
  },
  {
    path: "/editProduct/:id",
    name: "EditProduct",
    component: () => import("@/views/info/CreateProduct.vue")
  },
  {
    path: "/createProduct",
    name: "createProduct",
    component: () => import('../views/info/CreateProduct.vue')
  },
  {
    path: "/collection",
    name: "createCollection",
    component: () => import('../views/info/CollectionList.vue')
  },
  {
    path: '/editProduct/:id',
    name: 'EditProduct',
    component: () => import('../views/info/EditProduct.vue'),
  },
  {
    path: "/manage",
    name: "manage",
    component: () => import('../views/info/ManageInfo.vue')
  },



];

export default routes;