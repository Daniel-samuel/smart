<template>
  <div class="h-screen">
    <Navbar />
    <div
      class="mx-auto px-2 lg:px-4 py-4 min-h-[calc(100vh-80px)] flex items-center justify-center"
    >
      <div
        class="border border-yellow-400 rounded-xl flex flex-col justify-center items-center px-8 py-16"
      >
        <div class="mb-10 space-y-4">
          <p class="text-[#8B8D97]">Login to your account</p>
        </div>

        <div class="space-y-16 mb-12">
          <div
            class="w-96 flex flex-row items-center justify-between bg-[#EEF0FA] rounded-xl py-3 px-3"
          >
            <!-- <div class="flex items-center w-96"> -->
            <img src="../../assets/icons/Message.svg" alt="" />
            <input
              type="text"
              name=""
              id=""
              class="bg-transparent focus:outline-0 px-3 bg-[#EEF0FA] text-black w-full"
              placeholder="Email"
              v-model="payload.email"
            />
            <!-- </div> -->
          </div>
          <div class="space-y-2">
            <div
              class="w-96 flex flex-row items-center justify-between bg-[#EEF0FA] rounded-xl py-3 px-3"
            >
              <div class="flex items-center">
                <img src="../../assets/icons/Lock.svg" alt="" />
                <input
                  type="password"
                  name=""
                  id=""
                  class="bg-transparent focus:outline-0 px-3 bg-[#EEF0FA] text-black w-80"
                  placeholder="password"
                  v-model="payload.password"
                />
              </div>
            </div>
            <div class="flex flex-row tems-center justify-between mt-1">
              <div class="flex flex-row items-center space-x-1">
                <input type="checkbox" name="" id="" class="cursor-pointer" />
                <p class="text-xs text-[#959595]">Remember me</p>
              </div>
              <!-- <router-link
                to="/upload-item"
                class="text-xs text-[#959595] hover:underline hover:text-ResolutionBlue"
                >Forgot Password?</router-link -->
              >
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center space-y-4">
          <button
            @click="login"
            class="w-full text-xl px-8 py-2.5 rounded-lg text-yellow-400 bg-transparent border-2 border-yellow-400 transition duration-500 ease-in-out shadow-[0_2px_28px_-2px] shadow-yellow-400 cursor-pointer hover:bg-yellow-400 hover:text-white hover:shadow-[0_0_28px_2px] hover:shadow-yellow-400"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
// @ is an alias to /src

export default {
  components: { Navbar },
  name: "Signin",

  data() {
    return {
      payload: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async login() {
      let res;
      res = await this.$store.dispatch("mutate", {
        endpoint: "loginAcct",
        data: { input: this.payload },
      });
      if (res) {
        this.$router.push({ name: "upload-item" });
      }
    },
  },
};
</script>
