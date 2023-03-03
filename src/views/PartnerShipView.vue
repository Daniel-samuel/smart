<template>
  <div>
    <div class="bg-black">
      <Navbar />
      <div class="portfolio-bg">
        <p class="text-center text-5xl md:text-7xl text-white">
          Become A Partner...
        </p>
        <EnquiryNow />
      </div>
    </div>
    <div class="container mx-auto my-10 md:my-20">
      <div class="space-y-6">
        <p class="text-2xl md:text-5xl">Our Partnerships</p>
        <p class="max-w-xl text-xl font-thin">
          We currently work with industry experts in various fields such as
          architecture, construction, interior and lighting design. Get in touch
          to collaborate with us on your next project.
        </p>
      </div>
      <div class="slider">
        <div
          class="slide-track flex flex-row space-x-4 md:space-x-10 py-10 overflow-hidden"
        >
          <div class="slide">
            <div class="cursor-pointer rounded-md">
              <img src="../assets/images/salto-logo.svg" alt="" class="" />
            </div>
          </div>
          <div class="slide">
            <div class="cursor-pointer rounded-md">
              <img
                src="../assets/images/Control-4-Logo.jpeg"
                alt=""
                class="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="slide">
            <div class="cursor-pointer rounded-md">
              <img
                src="../assets/images/vda-logo.png"
                alt=""
                class="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="slide">
            <div class="cursor-pointer rounded-md">
              <img
                src="../assets/images/Lyngdorf-Logo.png"
                alt=""
                class="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="slide">
            <div class="cursor-pointer rounded-md">
              <img
                src="../assets/images/mk-some.png"
                alt=""
                class="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="slide">
            <div class="cursor-pointer rounded-md">
              <img
                src="../assets/images/rti-logo.jpeg"
                alt=""
                class="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import EnquiryNow from "@/components/EnquiryNow.vue";
export default {
  name: "PartnerShipView",
  components: {
    Navbar,
    Footer,
    EnquiryNow,
  },
};
</script>

<style scoped>
.slider {
  height: 250px;
  position: relative;
  width: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.slide-track {
  display: flex;
  width: calc(33% * 3);
  animation: scroll 20s linear infinite;
}

.slide-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 3));
  }
}

.slide {
  height: 200px;
  width: 250px;
  display: flex;
  align-items: center;
  padding: 15px;
  perspective: 100px;
}

img {
  width: 100%;
  transition: transform 1s;
}

img:hover {
  transform: translateZ(20px);
}

.slider::before,
.slider::after {
  content: "";
  position: absolute;
  width: 15%;
  z-index: 2;
}
</style>
