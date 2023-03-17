import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TakeATour from "../components/TakeATour.vue";
import Products from "../views/Products";
import ProductDetail from "../views/ProductDetail";
import HomeCinemaView from "../views/HomeCinemaView";
import MusicSystemsView from "../views/MusicSystemsView";
import TvAndGamingView from "../views/TvAndGamingView";
import HomeTechnonolyView from "../views/HomeTechnonolyView";
import PortfolioView from "../views/PortfolioView";
import AboutUsView from "../views/AboutUsView";
import PartnerShipView from "../views/PartnerShipView";
import ContactUsView from "../views/ContactUsView";
import Signin from "../views/Admin/Signin";
import uploadItems from "../views/Admin/uploadItems";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
  },
  {
    path: "/upload-item",
    name: "upload-item",
    component: uploadItems,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUsView,
  },
  {
    path: "/about-us",
    name: "about-us",
    component: AboutUsView,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/take-a-tour",
    name: "take-a-tour",
    component: TakeATour,
  },
  {
    path: "/product-detail:id",
    name: "product-detail",
    component: ProductDetail,
  },
  {
    path: "/residential",
    name: "residential",
    component: HomeCinemaView,
  },
  {
    path: "/commercial-and-corporate",
    name: "commercial-and-corporate",
    component: MusicSystemsView,
  },
  {
    path: "/hospitality",
    name: "tv-and-gaming",
    component: TvAndGamingView,
  },
  {
    path: "/partnerships",
    name: "partnerships",
    component: PartnerShipView,
  },
  {
    path: "/consulting",
    name: "consulting",
    component: HomeTechnonolyView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
