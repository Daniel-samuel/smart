<template>
  <div class="py-10">
    <div class="container mx-auto">
      <div class="flex flex-col items-center space-y-3 mb-5">
        <h2 class="text-3xl font-bold">Sign up for our company news</h2>
        <h3 class="text-yellow-400">
          You will receive notifications about company news
        </h3>
        <div class="group w-72 md:w-80 lg:w-96">
          <div class="relative flex items-center">
            <input
              id="10"
              type="text"
              class="text-black peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
            />
            <button
              class="absolute right-2 h-7 w-16 rounded-md bg-yellow-400 text-xs font-semibold text-black transition-all duration-200 ease-in-out group-focus-within:bg-yellow-500 group-focus-within:hover:bg-transparent group-focus-within:hover:border group-focus-within:hover:border-yellow-400"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-6/12">
          <p class="py-6 text-3xl text-blue-400">SMART</p>
          <p class="max-w-xs">
            We let you you get your items in easy steps. You no longer have to
            go through the stress to get your goods at your door step.
          </p>
        </div>
        <div class="w-1/2 md:w-3/12 flex flex-col space-y-2">
          <p class="py-6 text-xl">Social Media</p>
          <router-link to="/" class="underline hover:text-yellow-400"
            >Facebook</router-link
          >
          <router-link to="/" class="underline hover:text-yellow-400"
            >Twitter</router-link
          >
          <router-link to="/" class="underline hover:text-yellow-400"
            >Instagram</router-link
          >
        </div>
        <div class="w-1/2 md:w-3/12 flex flex-col space-y-2">
          <p class="py-6 text-xl hover:text-yellow-400">Contact</p>
          <span to="/" class="">Address: 9, Alimosho, Ikeja, Lagos</span>
          <span to="/" class="">Number: +234 (0) 9055222598</span>
          <span to="/" class="">Email: smartproduct@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Footer",
});
</script>

//
