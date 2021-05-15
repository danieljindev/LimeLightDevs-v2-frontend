<template>
  <container variant="two">
    <div>
      <h3
        class="mb-3 text-4xl font-semibold tracking-wide text-left 2xl:text-5xl lg:mb-0"
      >
        <span class="text-4xl font-hibana">Works</span>
        <p class="text-lg px-8 lg:px-0 mt-2 mb-10 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper
          vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit
          faucibus parturient sagittis justo curabitur lacinia ridiculus class.
        </p>
        <nuxt-link
          to="/packages"
          class="px-5 md:px-8 py-2 tracking-wider font-bold text-xl text-app-green-1 border-2 border-app-green-1 rounded-full cursor-pointer focus:outline-none hover:text-white hover:bg-app-green-1"
        >
          Check our packages
        </nuxt-link>
      </div>
      <Works1 />
    </div>
    <WorksComponent />
  </container>
</template>

<script>
import Container from '../common/Container.vue'
export default {
  components: { Container },
  setup() {},
}
</script>

<style></style>
