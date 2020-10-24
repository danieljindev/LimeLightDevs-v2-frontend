<template>
  <div class="w-full z-20 relative">
    <div class="text-white w-full lg:w-5/12 flex flex-col items-center lg:items-start lg:ml-56 mt-12 mb-48 text-center lg:text-left">
      <span class="text-7xl md:text-9xl font-hibana">Services</span>
      <p class="text-xl px-8 lg:px-0 mt-2 mb-10 tracking-wide">Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit faucibus parturient sagittis justo curabitur lacinia ridiculus class.</p>
      <a
        href="#services"
        class="px-8 md:px-16 py-3 tracking-wider font-bold text-2xl text-app-green-1 border-4 border-app-green-1 rounded-full cursor-pointer focus:outline-none"
      >
        Check our Packages
      </a>
    </div>
    <ServiceSlide />
    <div id="services" class="py-40 w-full flex flex-col items-center overflow-hidden">
      <ServiceItem v-for="serviceItem in serviceItems" 
        :key=serviceItem.title
        :title=serviceItem.title 
        :description=serviceItem.description 
        :imageUrl=serviceItem.imageUrl 
        :imageLeftSide=serviceItem.imageLeftSide
      />
    </div>

    <!-- scrolling bar thingy -->
    <!-- items -->
  </div>
</template>

<script>
export default {
  setup() {
    // wasn't sure if there we gonna be more of the service items eventually added, but implemented so there could be more anyways
    const serviceItems = [
      { 
        title: "Mobile App",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit faucibus parturient sagittis justo curabitur lacinia ridiculus class. Lorem ipsum dolor Sit amet consectetur adipiscing Semper vehicula velit dapibus Leo hendrerit faucibus parturient",
        imageUrl: '/services/phones.png',
        imageLeftSide: false,
      },
      { 
        title: "Web",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit faucibus parturient sagittis justo curabitur lacinia ridiculus class. Lorem ipsum dolor Sit amet consectetur adipiscing Semper vehicula velit dapibus Leo hendrerit faucibus parturient",
        imageUrl: '/services/unboggled.png',
        imageLeftSide: true,
      }
    ];

    return { serviceItems };
  }
}
</script>