<template>
  <div>
    <Navbar />
    <div>
      <div class="mb-10">
        <VideoBackground
          src="/IMG_0302.TRIM.mp4"
          poster="poster.jpg"
          :sources="[
            { src: '900>.mp4', res: 900, autoplay: true },
            {
              src: '640.mp4',
              res: 638,
              autoplay: true,
            },
          ]"
          class="max-h-[50%] h-[40vh] md:h-[85vh]"
          overlay="linear-gradient(95deg,#2a4ae430,#fb949e6b)"
        >
          <div
            class="flex flex-col text-center items-center justify-center space-y-10 h-[40vh] md:h-[85vh]"
          >
            <p
              class="font-poppins-semibold font-black text-xl md:text-8xl text-white transition-all duration-500 ease-in-out"
            >
              WE LOVE MUSIC &amp; MOVIES
            </p>
            <p
              class="text-md md:text-2xl text-white transition-all duration-500 ease-in-out"
            >
              Choose for yourself something new
            </p>
            <div class="flex justify-center">
              <router-link
                to="/contact-us"
                class="custom_btn_small_device md:custom_btn"
              >
                Book A Demo
              </router-link>
            </div>
          </div>
          -->
        </VideoBackground>
      </div>

      <!-- About Us -->
      <div>
        <div class="space-y-3 text-center uppercase mb-10">
          <h2 class="text-3xl font-bold">about company</h2>
          <h3 class="text-yellow-400">Some history</h3>
        </div>
        <div
          class="container mx-auto flex flex-col space-y-3 md:space-y-0 md:flex-row items-center md:space-x-12"
        >
          <div class="w-full md:w-1/2 space-y-10 items-center mb-10 md:mb-0">
            <div class="space-y-2 md:max-w-sm">
              <p>--</p>
              <p>
                We are a full-service company characterized by our
                uncompromising quality and innovative Control4 systems. We
                deliver perfection consistently. From our classic products we
                have managed to build a stellar reputation for excellence,
                quality, reliability and integrity.
              </p>
            </div>
            <div class="space-y-2 md:max-w-sm">
              <p>--</p>
              <p>
                We pride ourselves in our ability to interpret the essence of
                our clients through our products. By working closely with each
                client we are able to create spaces that embody their being,
                because regardless of whether they are individuals, brands or
                establishments to us each project is personal.
              </p>
            </div>
            <div class="">
              <router-link
                to="/contact-us"
                class="custom_btn_small_device md:custom_btn"
                >Book A Demo</router-link
              >
            </div>
          </div>
          <div class="w-full md:w-1/ px-8 md:px-0">
            <img
              src="../assets/images/images/Control4-system-1.jpeg"
              class="w-full rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- Services -->
      <div class="md:my-10 my-40 py-10">
        <div class="container mx-auto">
          <div class="space-y-3 text-center mb-10">
            <h2 class="text-3xl font-bold uppercase">Services</h2>
            <h3 class="text-yellow-400 uppercase">we do it</h3>
            <p class="mx-auto max-w-lg">
              With over 10 years experience , we have amassed a wealth of
              knowledge and experience that we apply to all products and it’s no
              wonder we are consistent and the best at what we offer our
              clients.
            </p>
          </div>
          <div
            class="container mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-20 h-[1000px] md:h-64"
          >
            <router-link to="/home-cinema" class="home_cinema_bg mx-8 md:mx-0">
              <p
                class="absolute bottom-8 text-white font-bold text-2xl font-poppins-semibold"
              >
                Home Cinema
              </p>
            </router-link>
            <router-link
              to="/tv-and-gaming"
              class="tv_and_gaming_bg mx-8 md:mx-0"
            >
              <p
                class="absolute bottom-8 text-white font-bold text-2xl font-poppins-semibold"
              >
                Tv &amp; Gaming
              </p>
            </router-link>
            <router-link to="/music-systems" class="music_bg mx-8 md:mx-0">
              <p
                class="absolute bottom-8 text-white font-bold text-2xl font-poppins-semibold"
              >
                Music
              </p>
            </router-link>
            <router-link
              to="/home-technology"
              class="smart_home_bg mx-8 md:mx-0"
            >
              <p
                class="absolute bottom-8 text-white font-bold text-2xl font-poppins-semibold"
              >
                Smart Home Technology
              </p>
            </router-link>
          </div>
        </div>
      </div>

      <!-- News -->
      <div class="container mx-auto">
        <div class="relative transition duration-1000 ease-in-out ">
          <img
            src="../assets/images/istockphoto-1140016975-612x612.jpeg"
            class="rounded-xl w-full h-full md:h-[500px] object-cover"
            id="brightness"
            alt=""
          />
          <div
            class="bg-black bg-opacity-40 backdrop-filter backdrop-blur-md rounded-xl border border-yellow-400 space-y-2 md:space-y-8 absolute bottom-4 p-8 mx-2 md:mx-20 text-white font-bold text-2xl font-poppins-semibold"
          >
            <p class="text-2xl md:text-4xl font-poppins-semibold">News</p>
            <p class="text-yellow-400">Latest Event</p>
            <p class="text-sm md:text-lg max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptas unde libero quaerat delectus aperiam facere, molestiae,
              reiciendis ipsam, officiis labore? Ab cupiditate vitae repellendus
              error minima, voluptatem illum totam?
            </p>
            <br />
            <span class="custom_btn_small_device md:custom_btn"
              >14 September</span
            >
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
import VideoBackground from "vue-responsive-video-background-player";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Footer,
    VideoBackground,
  },
  setup() {
    const activeMain = () => {
      return $route.path === "/";
    };
    return {
      activeMain,
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100vh;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 600px;
}

#brightness {
  -webkit-filter: brightness(0.5);
  filter: brightness(0.5);
}
</style>
