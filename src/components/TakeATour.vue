<template>
  <div>
    <div class="take-a-tour-bg">
      <Navbar />
      <div class="flex flex-col justify-center space-y-4 text-white">
        <h1 class="text-3xl md:text-5xl text-center mt-24">AMAZING PRODUCTS</h1>
        <p class="text-center text-lg md:text-xl">
          See how you can get your Smart products.
        </p>
      </div>
    </div>
    <div class="container mx-auto space-y-10 my-10">
      <!--  Automated RTI -->
      <div class="flex flex-col md:flex-row justify-center items-center md:space-x-16">
        <div class="w-full md:w-1/2 mb-4 flex justify-center">
          <img
            src="../assets/images/images/Home-and-Commercial-Automation-Accessories-RTI.png"
            class="w-full h-44 md:h-full object-cover"
            alt=""
          />
        </div>
        <div class="w-full md:w-1/2 text-left">
          <h2
            class="text-center md:text-left text-xl md:text-2xl mb-4 md:mb-6 md:max-w-sm"
          >
            Home and Commercial Automated RTI
          </h2>
          <p class="text-center md:text-left max-w-md text-md md:text-lg">
            This is the premier manufacturer of electronic snow sensing and
            anti-icing systems for the telecommunications industry. We provide
            both sensing/control and heater systems for complete anti-icing
            solutions.
          </p>
        </div>
      </div>

      <!-- Salto -->
      <div
        class="flex flex-col-reverse md:flex-row justify-center items-center md:space-x-16"
      >
        <div class="w-full md:w-1/2 text-left">
          <h2
            class="text-center md:text-left text-xl md:text-2xl mb-4 md:mb-6 md:max-w-sm"
          >
            Controler System
          </h2>
          <p class="text-center md:text-left max-w-md text-md md:text-lg">
            allows you to define who goes where and when in a building. Create
            user profiles, assign or block tags, define which doors they may
            enter on which days, at which times.
          </p>
        </div>
        <div class="w-full md:w-1/2 mb-4 flex justify-center">
          <img
            src="../assets/images/smart-22.jpeg"
            class="w-full h-44 md:h-full object-cover"
            alt=""
          />
        </div>
      </div>

      <!-- Monitor-Audio -->
      <div class="flex flex-col md:flex-row justify-center items-center md:space-x-16">
        <div class="w-full md:w-1/2 mb-4 flex justify-center">
          <img
            src="../assets/images/smart-6.jpeg"
            class="w-full h-44 md:h-full object-cover"
            alt=""
          />
        </div>
        <div class="w-full md:w-1/2 text-left">
          <h2
            class="text-center md:text-left text-xl md:text-2xl mb-4 md:mb-6 md:max-w-sm"
          >
            With a fast Network
          </h2>
          <p class="text-center md:text-left max-w-md text-md md:text-lg">
            This Controller Audio is a British manufacturer of Hi-Fi speaker
            systems, offers quality stereo home cinema systems, multi-room audio
            setups, bluetooth, and more.
          </p>
        </div>
      </div>

      <!-- MK-sound -->
      <div
        class="flex flex-col-reverse md:flex-row justify-center items-center md:space-x-16"
      >
        <div class="w-full md:w-1/2 text-left">
          <h2
            class="text-center md:text-left text-xl md:text-2xl mb-4 md:mb-6 md:max-w-sm"
          >
            MK-sound System
          </h2>
          <p class="text-center md:text-left max-w-md text-md md:text-lg">
            For more than four decades, MK Sound has been held in the highest
            regard by the audio press, the film and music industries as well as
            by home users seeking the finest loudspeakers for music and home
            theater.
          </p>
        </div>
        <div class="w-full md:w-1/2 mb-4 flex justify-center">
          <img
            src="../assets/images/smart-20.jpeg"
            class="w-full h-44 md:h-full object-cover"
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
  name: "Products",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    return {};
  },
};
</script>
