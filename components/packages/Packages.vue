<template>
  <div class="m-auto mt-16 mb-40">
    <div class="absolute left-0 top-0 w-3/6">
      <img class="block w-full h-full transform" src="greenblob08.png" alt="" />
    </div>
    <div class="absolute right-0 top-0 w-2/6">
      <img class="block w-full h-full transform" src="darkblob01.png" alt="" />
    </div>
    <div class="relative">
      <div class="absolute right-0 top-0 w-2/7">
        <img
          class="block w-full h-full transform translate-y-96"
          src="greenblob06.png"
          alt=""
        />
      </div>
      <div
        <div
        class="text-white w-full lg:w-5/12 flex flex-col items-center lg:items-start lg:ml-48 mt-12 mb-32 text-center lg:text-left"
      >
        <span class="text-4xl md:text-5xl font-hibana">Our Packages</span>
        <p class="text-lg px-8 lg:px-0 mt-2 mb-10 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper
          vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit
          faucibus parturient sagittis justo curabitur lacinia ridiculus class.
        </p>
        <nuxt-link
          to="/services"
          class="px-5 md:px-8 py-2 tracking-wider font-bold text-xl text-app-green-1 border-2 border-app-green-1 rounded-full cursor-pointer focus:outline-none hover:text-white hover:bg-app-green-1"
        >
          Check our Services
        </nuxt-link>
      </div>
      <Packages1 />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
