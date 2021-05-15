<template>
  <section-container class="mb-56">
    <div class="z-10 w-full text-center">
      <h3
        class="mb-3 text-4xl font-semibold tracking-wide text-left 2xl:text-5xl lg:mb-0"
      >
        Our Packages
      </h3>
      <ul
        class="flex flex-no-wrap justify-end font-bold mb-3 mr-2 space-x-4 text-md lg:space-x-12"
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
  </section-container>
</template>

<script>
import Button from '../common/Button.vue'
import SectionContainer from '../common/SectionContainer.vue'
export default {
  components: { Button, SectionContainer },
  data() {
    return {
      packages: [
        {
          id: 0,
          img: 'appdev.png',
          package: 'App development',
          desc:
            'App devLorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatuporro, architecto totam recusandae praesentium.',

          slashedPrice: 240,
          price: 149,
        },
        {
          id: 1,
          img: 'desktop.png',
          package: 'Web development',
          desc:
            'App devLorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatuporro, architecto totam recusandae praesentium.',

          slashedPrice: 149,
          price: 299,
        },
        {
          id: 2,
          img: 'appdev.png',
          package: 'Full development',
          desc:
            'App devLorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatuporro, architecto totam recusandae praesentium.',

          slashedPrice: 120,
          price: 999,
        },
        {
          id: 3,
          img: 'Edit4.png',
          package: 'Personalised',
          desc:
            'App devLorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatuporro, architecto totam recusandae praesentium.',

          slashedPrice: 399,
          price: '1000+',
        },
      ],
    }
  },
}
</script>

<style>
</style>
