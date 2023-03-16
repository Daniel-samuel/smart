<template>
  <div class="bg-black md:opacity-90 sticky top-0 z-50 py-6">
    <nav class="container mx-auto">
      <div class="flex flex-row justify-between items-center text-white">
        <router-link to="/" class="text-3xl text-blue-400">SMART</router-link>
        <div
          class="hidden lg:flex flex-row text-sm font-nspabold items-center space-x-4 xl:space-x-8"
        >
          <router-link
            v-if="activePortfolio"
            to="/portfolio"
            :class="[$route.path.includes('/portfolio') && 'text-yellow-400']"
            >Portfolio</router-link
          >

          <div class="group inline-block">
            <button class="outline-none focus:outline-none flex items-center">
              <span
                class="pr-1 font-semibold flex-1"
                :class="[
                  $route.path.includes('/residential')
                    ? 'text-yellow-400'
                    : $route.path.includes('/hospitality')
                    ? 'text-yellow-400'
                    : $route.path.includes('/commercial')
                    ? 'text-yellow-400'
                    : $route.path.includes('/consulting')
                    ? 'text-yellow-400'
                    : '',
                ]"
                >Services</span
              >
              <span>
                <svg
                  class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </span>
            </button>
            <ul
              class="bg-black opacity-70 shadow-2xl rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 space-y-2 p-3 ease-in-out origin-top z-30"
            >
              <li
                class="text-white rounded-sm px-3 py-1 hover:bg-black hover:text-yellow-400"
              >
                <router-link to="/residential">Residential</router-link>
              </li>
              <li
                class="text-white rounded-sm px-3 py-1 hover:bg-black hover:text-yellow-400"
              >
                <router-link to="/hospitality"> Hospitality</router-link>
              </li>
              <li
                class="text-white rounded-sm px-3 py-1 hover:bg-black hover:text-yellow-400"
              >
                <router-link to="/commercial">
                  Commericial/Corporate</router-link
                >
              </li>

              <li
                class="text-white rounded-sm px-3 py-1 hover:bg-black hover:text-yellow-400"
              >
                <router-link to="/consulting"> Consulting</router-link>
              </li>
            </ul>
          </div>
          <router-link
            v-if="activeGallery"
            to="/products"
            :class="[$route.path.includes('/products') && 'text-yellow-400']"
          >
            Gallery</router-link
          >
          <router-link
            v-if="activeTakeATour"
            to="/take-a-tour"
            :class="[$route.path.includes('/take-a-tour') && 'text-yellow-400']"
          >
            Take A Tour</router-link
          >
          <router-link
            v-if="activePartnership"
            to="/partnerships"
            :class="[
              $route.path.includes('/partnerships') && 'text-yellow-400',
            ]"
          >
            Partnership</router-link
          >
          <router-link
            v-if="activeTakeATour"
            to="/about-us"
            :class="[$route.path.includes('/about-us') && 'text-yellow-400']"
          >
            About Us</router-link
          >
        </div>
        <div class="hidden lg:flex items-center space-x-2">
          <router-link to="/contact-us" class="contact_us_btn">
            Contact Us
          </router-link>
          <router-link to="/signin" class="contact_us_btn"> Login </router-link>
          <!-- <span class="number_us_btn">+234 (0) 9055222598</span> -->
        </div>
        <div class="block lg:hidden">
          <div
            class="flex flex-col space-y-2 justify-center items-center cursor-pointer w-fit transition-all duration-500"
            @click="openMobileNavbar = !openMobileNavbar"
          >
            <span class="w-8 h-[2px] bg-white"></span>
            <span class="w-8 h-[2px] bg-white"></span>
            <span class="w-8 h-[2px] bg-white"></span>
          </div>
        </div>
      </div>
    </nav>
    <div
      class="block lg:hidden"
      :class="openMobileNavbar ? 'd-block' : 'hidden'"
    >
      <div
        class="flex flex-col space-y-3 items-center transition-all duration-500"
      >
        <div class="flex flex-col space-y-3 items-center text-white">
          <router-link
            v-if="activePortfolio"
            to="/portfolio"
            :class="[$route.path.includes('/portfolio') && 'text-yellow-400']"
            >Portfolio</router-link
          >
          <div class="group inline-block">
            <button class="outline-none focus:outline-none flex items-center">
              <span
                class="pr-1 font-semibold flex-1"
                :class="[
                  $route.path.includes('/residential')
                    ? 'text-yellow-400'
                    : $route.path.includes('/hospitality')
                    ? 'text-yellow-400'
                    : $route.path.includes('/commercial')
                    ? 'text-yellow-400'
                    : $route.path.includes('/consulting')
                    ? 'text-yellow-400'
                    : '',
                ]"
                >Services</span
              >
              <span>
                <svg
                  class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </span>
            </button>
            <ul
              class="z-20 bg-white lg:bg-transparent shadow-2xl rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 space-y-2 p-3 ease-in-out origin-top z-30"
            >
              <li
                class="text-black lg:text-white rounded-sm px-3 py-1 hover:bg-black hover:text-yellow-400"
              >
                <router-link to="/residential">Residential</router-link>
              </li>
              <li
                class="text-black lg:text-white rounded-sm px-3 py-1 hover:bg-black hover:text-yellow-400"
              >
                <router-link to="/hospitality"> Hospitality</router-link>
              </li>
              <li
                class="text-black lg:text-white rounded-sm px-3 py-1 hover:bg-black hover:text-yellow-400"
              >
                <router-link to="/commercial">
                  Commericial/Corporate</router-link
                >
              </li>

              <li
                class="text-black lg:text-white rounded-sm px-3 py-1 hover:bg-black hover:text-yellow-400"
              >
                <router-link to="/consulting"> Consulting</router-link>
              </li>
            </ul>
          </div>
          <router-link
            v-if="activeGallery"
            to="/products"
            :class="[$route.path.includes('/products') && 'text-yellow-400']"
            >GALLERY</router-link
          >
          <router-link
            v-if="activeTakeATour"
            to="/take-a-tour"
            :class="[$route.path.includes('/take-a-tour') && 'text-yellow-400']"
            >TAKE A TOUR</router-link
          >
          <router-link
            v-if="activePartnership"
            to="/partnerships"
            :class="[
              $route.path.includes('/partnerships') && 'text-yellow-400',
            ]"
            >PARTNERSHIP</router-link
          >
          <router-link
            v-if="activeTakeATour"
            to="/about-us"
            :class="[$route.path.includes('/about-us') && 'text-yellow-400']"
            >ABOUT US</router-link
          >
          <span class="hidden lg:block py-6">+234 (0) 9055222598</span>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="pop">
      <div class="modal" role="dialog" v-if="showModal">
        <div
          class="flex flex-row items-center justify-between text-black mb-10"
        >
          <p class="text-2xl text-black">Contact Us</p>
          <button
            @click="showModal = false"
            class="text-[#FF0000] p-1 rounded-full"
          >
            X
          </button>
        </div>
        <div class="flex flex-col space-y-8 mb-6">
          <input
            class="text-black w-full bg-[#fff] p-3 rounded-md border border-[#9A9A9A] focus:outline-none focus:border-yellow-400 focus:ring-0"
            type="text"
            name="Name"
            placeholder="Name"
          />
          <input
            class="text-black w-full bg-[#fff] p-3 rounded-md border border-[#9A9A9A] focus:outline-none focus:border-yellow-400 focus:ring-0"
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
            class="text-black w-full bg-[#fff] p-3 rounded-md border border-[#9A9A9A] focus:outline-none focus:border-yellow-400 focus:ring-0"
          ></textarea>
        </div>
        <div class="flex flex-row justify-center space-x-3">
          <button
            class="bg-yellow-400 text-black rounded-lg px-6 py-2 hover:opacity-90 w-36"
          >
            Submit
          </button>
        </div>
      </div>
    </transition>
  </div> -->
</template>
<script>
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "Navbar",
  setup() {
    const showModal = ref(false);
    const openMobileNavbar = ref(false);
    const activeMain = () => {
      return $route.path === "/";
    };
    const activeGallery = () => {
      return $route.path === "/products";
    };
    const activeTakeATour = () => {
      return $route.path === "/take-a-tour";
    };
    const activePortfolio = () => {
      return $route.path === "/portfolio";
    };
    const activeAboutUs = () => {
      return $route.path === "/about-us";
    };
    const activePartnership = () => {
      return $route.path === "/partnerships";
    };
    return {
      activeMain,
      activeGallery,
      activeTakeATour,
      activePortfolio,
      activeAboutUs,
      activePartnership,
      openMobileNavbar,
      showModal,
    };
  },
});
</script>

<style scooped>
/* .modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 90vh;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #000;
  z-index: 999;
  transform: none;
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
} */
</style>
