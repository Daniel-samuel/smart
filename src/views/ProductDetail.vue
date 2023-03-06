<template>
  <div class="bg-black text-white">
    <Navbar />
  </div>
  <div class="container mx-auto flex frex-row items-center md:space-x-6 my-16">
    <div
      class="w-full md:w-5/12 flex flex-col space-x-3 border-[0.1px] border-[#000] p-4"
    >
      <img :src="product.image" class="w-full h-64" alt="" />
    </div>
    <div class="w-full md:w-7/12 flex flex-col space-y-5">
      <p class="text-yellow-400 text-3xl">Official store</p>
      <p class="text-5xl">{{ product.name }}</p>

      <p class="text-xl">Price : {{ product.price }}</p>
      <p class="text-md">Category : {{ product.category }}</p>
    </div>
  </div>
  <div class="container mx-auto my-10">
    <p class="text-2xl">Product details</p>
    <p class="max-w-md">{{ product.details }}</p>
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Productdetail",
  components: {
    Navbar,
    Footer,
  },
  props: ["productLists"],
  data() {
    return {
      product: {},
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
  async created() {
    await this.queryProduct();
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product._id == this.id);
    console.log(this.product);
    console.log(this.products);
  },
};
</script>
