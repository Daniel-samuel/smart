<template>
  <div>
    <div class="our-product-bg">
      <Navbar />
      <p
        class="font-poppins-semibold text-white text-5xl md:text-7xl text-center mt-44"
      >
        Our Products
      </p>
    </div>
    <div class="container mx-auto my-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        <router-link
          :to="{ name: 'product-detail', params: { id: product._id } }"
          :key="product._id"
          v-for="product in products"
        >
          <div class="h-min overflow-hidden rounded-md">
            <img
              class="w-full h-44 object-cover hover:scale-125 transition-all duration-1000 cursor-pointer"
              :src="product.image"
              alt=""
            />
          </div>
          <div
            class="flex flex-row items-center justify-between p-4 shadow-2xl rounded-b-lg"
          >
            <h6>{{ product.name }}</h6>

            <div>&#8358; {{ product.price }}</div>
          </div>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Products",
  components: {
    Navbar,
    Footer,
  },
  props: ["productLists"],
  setup() {
    const activeGallery = () => {
      return $route.path === "/products";
    };
    return {
      activeGallery,
    };
  },
  data() {
    return {
      products: [],

      id: null,
    };
  },

  methods: {
    async queryProduct() {
      await this.$store.dispatch("query", {
        endpoint: "listProduct",
        storeKey: "productList",
      });
      this.products = this.$store.state.data.productList;
    },
  },
  created() {
    this.queryProduct();
  },
};
</script>
