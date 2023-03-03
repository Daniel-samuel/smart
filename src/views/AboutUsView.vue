<template>
  <div>
    <div class="bg-black">
      <Navbar />
      <div class="portfolio-bg">
        <p class="text-center text-5xl md:text-8xl text-white">About Us ...</p>
      </div>
    </div>
    <div>
      <div
        class="container mx-auto flex flex-col space-y-3 md:space-y-0 md:flex-row items-center md:space-x-12"
      >
        <div class="w-full md:w-1/2 space-y-4">
          <div class="space-y-2 md:max-w-sm">
            <p>--</p>
            <p>
              We are a full-service company characterized by our uncompromising
              quality and innovative Control4 systems. We deliver perfection
              consistently. From our classic products we have managed to build a
              stellar reputation for excellence, quality, reliability and
              integrity.
            </p>
          </div>
          <div class="space-y-2 md:max-w-sm">
            <p>--</p>
            <p>
              We pride ourselves in our ability to interpret the essence of our
              clients through our products. By working closely with each client
              we are able to create spaces that embody their being, because
              regardless of whether they are individuals, brands or
              establishments to us each project is personal.
            </p>
          </div>
          <router-link to="/contact-us" class="custom_btn_small_device md:custom_btn">Book A Demo</router-link>
        </div>
        <div class="w-full md:w-1/2">
          <img
            src="../assets/images/images/Control4-system-1.jpeg"
            class="w-full rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "AboutUsView",
  components: {
    Navbar,
    Footer,
  },
};
</script>
