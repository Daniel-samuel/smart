<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-10 md:my-24">
      <p
        class="max-w-sm md:max-w-md text-3xl md:text-6xl font-poppins-semibold"
      >
        BOOK YOUR PRIVATE DEMO TODAY!
      </p>
      <div class="my-24 md:my-44">
        <p class="text-xl md:text-5xl text-yellow-400 font-poppins-semibold">
          We would love for you to visit!
        </p>
        <div class="max-w-2xl" role="dialog">
          <div class="flex flex-col">
            <p class="text-2xl my-4 md:my-10">Contact Us</p>
            <div class="flex flex-col space-y-8 mb-6">
              <div class="flex space-x-4">
                <input
                  class="w-full bg-[#fff] p-3 rounded-md border border-[#9A9A9A] focus:outline-none focus:border-2 focus:border-yellow-400 focus:ring-0"
                  type="text"
                  name="Name"
                  placeholder="First name"
                />
                <input
                  class="w-full bg-[#fff] p-3 rounded-md border border-[#9A9A9A] focus:outline-none focus:border-2 focus:border-yellow-400 focus:ring-0"
                  type="text"
                  name="Name"
                  placeholder="Surname"
                />
              </div>
              <input
                class="w-full bg-[#fff] p-3 rounded-md border border-[#9A9A9A] focus:outline-none focus:border-2 focus:border-yellow-400 focus:ring-0"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <textarea
                name=""
                id=""
                cols="25"
                rows="6"
                placeholder="Message"
                class="w-full bg-[#fff] p-3 rounded-md border border-[#9A9A9A] focus:outline-none focus:border-2 focus:border-yellow-400 focus:ring-0"
              ></textarea>
            </div>
            <div class="space-x-3">
              <button class="custom_btn_small_device md:custom_btn">Submit</button>
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
export default {
  name: "ContactUsView",
  components: {
    Navbar,
    Footer,
  },
};
</script>
