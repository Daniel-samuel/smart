<template>
  <div>
    <div class="mb-16">
      <VideoBackground
        src="/videos_3.mp4"
        poster="poster.jpg"
        :sources="[
          { src: '900>.mp4', res: 900, autoplay: true },
          {
            src: '640.mp4',
            res: 638,
            autoplay: true,
          },
        ]"
        class="max-h-[100%] h-[40vh] md:h-[100vh]"
        overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
      >
        <div class="mb-10">
          <Navbar />
          <div
            class="container flex flex-col space-y-12 font-axiforma absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4"
          >
            <div class="space-y-10">
              <p
                class="font-poppins-semibold text-3xl md:text-7xl text-white text-center"
              >
                Tv &amp; Gaming
              </p>
              <div class="flex justify-center">
                <button
                  class="custom_btn_small_device md:custom_btn"
                  @click="showModal = true"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </VideoBackground>
    </div>

    <div class="container mx-auto space-y-5 my-10 md:my-20">
      <p class="text-xl md:text-5xl">Tv &amp; Gaming</p>
      <p class="text-md md:text-2xl max-w-sm">
        Integrate your devices throughout your living space, from lighting,
        blinds and heating. Creating and all-in-one solution which is simple and
        easy to use.
      </p>
      <button class="findOutMore_small_device md:findOutMore">
        Find out more
      </button>
    </div>
    <Footer />
  </div>
  <div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="pop">
      <div class="modal" role="dialog" v-if="showModal">
        <div class="modal_div py-32">
          <div class="flex flex-row items-center justify-between mb-10">
            <p class="text-2xl">Enquiry Now</p>
            <button
              @click="showModal = false"
              class="text-[#FF0000] p-1 rounded-full"
            >
              X
            </button>
          </div>
          <div class="flex flex-col space-y-8 mb-6">
            <input
              class="w-full bg-[#fff] p-3 rounded-md border border-[#9A9A9A] focus:outline-none focus:border-yellow-400 focus:ring-0"
              type="text"
              name="Name"
              placeholder="Name"
            />
            <input
              class="w-full bg-[#fff] p-3 rounded-md border border-[#9A9A9A] focus:outline-none focus:border-yellow-400 focus:ring-0"
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <textarea
              name=""
              id=""
              cols="25"
              rows="4"
              placeholder="Message"
              class="w-full bg-[#fff] p-3 rounded-md border border-[#9A9A9A] focus:outline-none focus:border-yellow-400 focus:ring-0"
            ></textarea>
          </div>
          <div class="flex flex-row justify-center space-x-3">
            <button class="custom_btn_small_device md:custom_btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { defineComponent, ref } from "@vue/runtime-core";

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import VideoBackground from "vue-responsive-video-background-player";

export default defineComponent({
  name: "HomeTechnonolyView",
  components: {
    Navbar,
    Footer,
    VideoBackground,
  },
  setup() {
    const showModal = ref(false);
    const activeMain = () => {
      return $route.path === "/";
    };
    return {
      activeMain,
      showModal,
    };
  },
});
</script>

<style scoped>
.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  border-radius: 1rem;
  background: #000;
  z-index: 999;
  transform: none;
  display: flex;
  justify-content: center;
}

.modal_div {
  width: 600px;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: "";
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
