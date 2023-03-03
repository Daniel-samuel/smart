<template>
  <!-- <nav
    class="sticky top-0 bg-white text-md flex flex-row items-center justify-between px-1 md:px-10 py-4"
  >
    <div class="flex flex-col space-y-1 justify-center items-center">
      <span class="w-8 h-[2px] bg-black"></span>
      <span class="w-8 h-[2px] bg-black"></span>
      <span class="w-8 h-[2px] bg-black"></span>
    </div>
    <div>
      <router-link to="/" class="text-3xl">SMART</router-link>
    </div>
    <div class="flex flex-row items-center space-x-4">
      <router-link to="/" class="bg-black text-white px-4 py-1 rounded-md hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-500 ease-in-out">Login</router-link>
      
    </div>
  </nav> -->
  <router-view :productLists="productLists"/>
</template>

<script>
export default {
  name: "",
  setup() {
     const productLists = [
      {
        id: 1,
        productName: "RTI System",
        image: require("./assets/images/images/RTI-Updates-Pro-Control-Line.png"),
        price: "455,500",
      },
      {
        id: 2,
        productName: "Control4 System",
        image: require("./assets/images/images/Control4-system-img-4.jpeg"),
        price: "358,000",
      },
      {
        id: 3,
        productName: "VTI system",
        image:
          "https://www.indigozest.co.uk/wp-content/uploads/2020/12/IMG_0126-1-e1609268734947.jpg",
        price: "800,000",
      },
      {
        id: 4,
        productName: "Subwoofer",
        image: require("./assets/images/images/monitor-img-3.png"),
        price: "91,000",
      },
      {
        id: 5,
        productName: "VDA Audio system",
        image: require("./assets/images/smart-11.jpeg"),
        price: "233,000",
      },
      {
        id: 6,
        productName: "Monitor Audio",
        image: require("./assets/images/smart-9.jpeg"),
        price: "300,000",
      },

      {
        id: 7,
        productName: "Monitor Audio",
        image: require("./assets/images/smart-14.jpeg"),
        price: "329,000",
      },
      {
        id: 8,
        productName: "Monitor Audio",
        image: require("./assets/images/smart-20.jpeg"),
        price: "250,000",
      },
      {
        id: 9,
        productName: "Monitor Audio",
        image: require("./assets/images/smart-7.jpeg"),
        price: "3,000",
      },
      {
        id: 10,
        productName: "Salto system",
        image: require("./assets/images/smart-21.jpeg"),
        price: "3,200",
      },
    ];

    return {
      productLists
    }
  }
}
</script>
