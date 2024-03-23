import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import authRoutes from './auth';
import catalogRoutes from './catalog';
import faqRoutes from './faq';
import profileSteps from './profileSteps'

const routes = [

  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/Landing-Page",
    name: "LandingPage",
    component: () => import('@/views/LandingPage.vue')
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: "/career",
    name: "career",
    component: () => import("@/views/CareerPage.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/MainPage.vue"),
  },
  {
    path: "/contact",
    name: "ContactForm",
    component: () => import("@/components/ContactForm.vue"),
  },
  {
    path: "/allsupporters",
    name: "AllSupporters",
    component: () => import("@/views/AllSupporters.vue")
  },
  {
    path: "/review",
    name: "review",
    component: () => import("@/components/ReviewComp.vue")
  },
  {
    path: "/flip",
    name: "flipCard",
    component: () => import("@/components/FlipCard.vue")
  },
  {
    path: "/flip2",
    name: "flipCard2",
    component: () => import("@/components/FlipCard2.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfilePage.vue")
  },
  {
    path: "/shop/:voteId",
    name: "shop",
    component: () => import("@/views/ShopPage.vue")

  },
  {
    path: "/post",
    name: "post",
    component: () => import("@/views/PostPage.vue")

  },
  {
    path: "/order",
    name: "order",
    component: () => import("@/views/OrderPage.vue")

  },
  {
    path: "/orderDetail/:orderId",
    name: "orderDetail",
    component: () => import("@/views/OrderDetail.vue")
  },
  {
    path: "/AllMArket",
    name: "market",
    component: () => import("@/views/AllMarket.vue")

  },
  {
    path: "/basicInfo",
    name: "basicInfo",
    component: () => import("@/views/info/BasicInfo.vue")

  },
  {
    path: "/promoters",
    name: "promoters",
    component: () => import("@/views/promoters/PromoterPage.vue")

  },
  {
    path: "/createPromoters",
    name: "CreatePromoter",
    component: () => import("@/views/promoters/CreatePromoter.vue")

  },
  ...authRoutes,
  ...catalogRoutes,
  ...faqRoutes,
  ...profileSteps,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
