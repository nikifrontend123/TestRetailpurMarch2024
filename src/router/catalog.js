
const routes = [
  // {
  //   path: "/categories",
  //   name: "CategoryCatalogPage",
  //   component: () => import("@/views/categories/CategoryCatalogPage.vue"),
  // },
  // {
  //   path: "/catalogs/:categoryId",
  //   name: "CatalogPage",
  //   component: () => import('@/views/catalog/CatalogPage.vue')
  // },
  {
    path: "/catalog-page/:productId",
    name: "CatalogDetailPage",
    component: () => import('../views/CatalogDetailPage.vue')
  },
  {
    path: "/favourite-catalogs",
    name: "FavouriteCatalogs",
    component: () => import('@/views/FavouriteCatalogs.vue')
  },
  // {
  //   path:'/search',
  //   name:'SearchPage',
  //   component:()=> import('@/views/SearchPage.vue')
  // }

];

export default routes;