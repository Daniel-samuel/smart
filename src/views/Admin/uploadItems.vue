<template>
  <div class="container mx-auto px-2 lg:px-4 py-4 min-h-[calc(100vh-80px)]">
    <div class="p-6 rounded-md">
      <div class="flex flex-row justify-between">
        <h3 class="text-2xl font-semibold">Add New Product</h3>
        <router-link to="/" class="text-sm underline">Back to Home</router-link>
      </div>
      <!-- Upload Product pictures  -->
      <div
        class="flex flex-col space-y-4 md:space-y-0 md:flex-row space-x-0 md:space-x-6"
      ></div>

      <!-- Product Name -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 my-12"
      >
        <div class="w-full">
          <label for="name" class="text-sm">Namesss</label>
          <input
            class="w-full text-sm text-black border rounded-[4px] px-3 py-2 focus:outline-none focus:border-yellow-400 focus:ring-0"
            type="text"
            name=""
            id=""
            placeholder="name"
            v-model="args.name"
          />
        </div>
        <div class="w-full">
          <label for="name" class="text-sm">Price</label>
          <input
            class="w-full text-sm text-black border rounded-[4px] px-3 py-2 focus:outline-none focus:border-yellow-400 focus:ring-0"
            type="number"
            name=""
            id=""
            placeholder="price"
            v-model="args.price"
          />
        </div>
        <div class="w-full">
          <label for="name" class="text-sm">Brand</label>
          <input
            class="w-full text-sm text-black border rounded-[4px] px-3 py-2 focus:outline-none focus:border-yellow-400 focus:ring-0"
            type="text"
            name=""
            id=""
            placeholder="brand"
          />
        </div>
        <div class="w-full">
          <label for="name" class="text-sm">Category</label>
          <input
            class="w-full text-sm text-black border rounded-[4px] px-3 py-2 focus:outline-none focus:border-yellow-400 focus:ring-0"
            type="text"
            name=""
            id=""
            placeholder="category"
          />
        </div>
      </div>

      <!-- Product Description -->
      <div class="mb-12">
        <label for="name" class="text-sm">Description</label>
        <textarea
          id="message"
          rows="10"
          class="w-full text-sm text-black border rounded-[4px] p-8 focus:outline-none focus:border-yellow-400 focus:ring-0"
          placeholder="Write a description for your item"
          v-model="args.details"
        ></textarea>
      </div>
      <div class="w-full md:w-6/12">
        <h2 class="text-base mb-3">Picture (s)</h2>
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full border border-yellow-400 border-dashed rounded-lg cursor-pointer hover:bg-orange-50"
          >
            <div class="flex flex-col items-center justify-center py-16">
              <p class="mb-2 text-xs text-[#323232]">
                <span class="underline">Click to upload</span> or drag and drop
                files
              </p>
            </div>
            <input
              ref="uploadFile"
              id="uploadFile"
              type="file"
              class="uploadFile"
              @change="handleFileUpload"
            />
          </label>
        </div>
      </div>
      <div class="px-4 py-3">
        <div @click="create" class="flex flex-row items-center justify-end">
          <button class="custom_btn_small_device md:custom_btn">
            Add Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import UploadFilesIcon from "@/components/icons/UploadFilesIcon.vue";
// import Cloudinary, {
//   CldImage,
//   CldVideo,
//   CldTransformation,
//   CldContext,
// } from "cloudinary-vue";

// Vue.use(Cloudinary, {
//   configuration: {
//     cloudName: "dtjkvwvwy",
//     apiKey: "967895479769642",
//     apiSecret: "Fs39eig46E6NqhfF5G3ESxkKtX0",
//   },
//   components: {
//     CldContext,
//     CldImage,
//     CldVideo,
//     CldTransformation,
//   },
// });

// cloudinary.config({
//   cloud_name: "dtjkvwvwy",
//   api_key: "967895479769642",
//   api_secret: "Fs39eig46E6NqhfF5G3ESxkKtX0",
// });
export default {
  name: "uploadItems",
  components: {
    UploadFilesIcon,
  },

  data() {
    return {
      args: {
        image: "",
        name: "",
        details: "",
        price: "",
      },
    };
  },

  methods: {
    handleFileUpload(event) {
      this.uploadFile = event.target.files[0];
      console.log(this.uploadFile, "file");
      const reader = new FileReader();
      reader.onload = () => {
        this.args.image = reader.result.split(",")[1];
      };
      reader.readAsDataURL(this.uploadFile);
      console.log(this.uploadFile), "happy";
      const encodedData = btoa(this.args.image);
      console.log(encodedData, "rttyyuu");
    },

    async create() {
      console.log(this.args.name);
      console.log(this.args.image, "rttyyuu");

      // this.args.image = this.args.image;
      console.log("mmdsmmsmdsm");
      let res;
      res = await this.$store.dispatch("mutate", {
        endpoint: "CreateProduct",
        data: { input: this.args },
      });
    },
    // handleFileUpload(event) {
    //   this.UploadFiles = event.target.files[0];
    // },
  },
};
</script>
