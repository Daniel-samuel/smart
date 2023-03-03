<template>
  <div>
    <div class="bg-black">
      <Navbar />
      <div class="portfolio-bg">
       
        <p
          class="font-poppins-semibold font-black text-xl md:text-7xl uppercase text-white transition-all duration-500 ease-in-out"
        >
          Smart Present ...
        </p>
      </div>
    </div>
    <div
      class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 my-20"
    >
      <div
        class="px-8 md:px-0 w-full relative hover:shadow-2xl hover:scale-110 hover:transition-all hover:duration-1000"
      >
        <img
          src="../assets/images/smart-5.jpeg"
          class="cursor-pointer rounded-xl object-cover w-full h-full border border-yellow-400"
          alt=""
        />
        <p
          class="absolute bottom-12 text-lg md:text-2xl font-poppins-semibold text-white pl-6"
        >
          The Cinema Lounge
        </p>
      </div>
      <div
        class="px-8 md:px-0 w-full relative hover:shadow-2xl hover:scale-110 hover:transition-all hover:duration-1000"
      >
        <img
          src="../assets/images/smart-12.jpeg"
          class="cursor-pointer rounded-xl object-cover w-full h-full border border-yellow-400"
          alt=""
        />
        <p
          class="absolute bottom-12 text-lg md:text-2xl font-poppins-semibold text-white pl-6"
        >
          The Steinway Lodge Entertainment Room
        </p>
      </div>
      <div
        class="px-8 md:px-0 w-full relative hover:shadow-2xl hover:scale-110 hover:transition-all hover:duration-1000"
      >
        <img
          src="../assets/images/smart-13.jpeg"
          class="cursor-pointer rounded-xl object-cover w-full h-full border border-yellow-400"
          alt=""
        />
        <p
          class="absolute bottom-12 text-lg md:text-2xl font-poppins-semibold text-white pl-6"
        >
          Lounge Bar Home Cinema
        </p>
      </div>
      <div
        class="px-8 md:px-0 w-full relative hover:shadow-2xl hover:scale-110 hover:transition-all hover:duration-1000"
      >
        <img
          src="../assets/images/smart-15.jpeg"
          class="cursor-pointer rounded-xl object-cover w-full h-full border border-yellow-400"
          alt=""
        />
        <p
          class="absolute bottom-12 text-lg md:text-2xl font-poppins-semibold text-white pl-6"
        >
          Garage Home Cinema Conversion
        </p>
      </div>
      <div
        class="px-8 md:px-0 w-full relative hover:shadow-2xl hover:scale-110 hover:transition-all hover:duration-1000"
      >
        <img
          src="../assets/images/smart-16.jpeg"
          class="cursor-pointer rounded-xl object-cover w-full h-full border border-yellow-400"
          alt=""
        />
        <p
          class="absolute bottom-12 text-lg md:text-2xl font-poppins-semibold text-white pl-6"
        >
          Loft Conversion Home Cinema
        </p>
      </div>
      <div
        class="px-8 md:px-0 w-full relative hover:shadow-2xl hover:scale-110 hover:transition-all hover:duration-1000"
      >
        <img
          src="../assets/images/smart-18.jpeg"
          class="cursor-pointer rounded-xl object-cover w-full h-full border border-yellow-400"
          alt=""
        />
        <p
          class="absolute bottom-12 text-lg md:text-2xl font-poppins-semibold text-white pl-6"
        >
          Basement Cinema Refurb
        </p>
      </div>
      <div
        class="px-8 md:px-0 w-full relative hover:shadow-2xl hover:scale-110 hover:transition-all hover:duration-1000"
      >
        <img
          src="../assets/images/smart-20.jpeg"
          class="cursor-pointer rounded-xl object-cover w-full h-full border border-yellow-400"
          alt=""
        />
        <p
          class="absolute bottom-12 text-lg md:text-2xl font-poppins-semibold text-white pl-6"
        >
          Traditional Lounge Hidden Cinema
        </p>
      </div>
      <div
        class="px-8 md:px-0 w-full relative hover:shadow-2xl hover:scale-110 hover:transition-all hover:duration-1000"
      >
        <img
          src="../assets/images/smart-22.jpeg"
          class="cursor-pointer rounded-xl object-cover w-full h-full border border-yellow-400"
          alt=""
        />
        <p
          class="absolute bottom-12 text-lg md:text-2xl font-poppins-semibold text-white pl-6"
        >
          Snooker Lounge Media Room Conversion
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "PortfolioView",
  components: {
    Navbar,
    Footer,
  },
};
</script>
