<template>
  <container variant="two">
    <div>
      <h3
        class="mb-3 text-4xl font-semibold tracking-wide text-left 2xl:text-5xl lg:mb-0"
      >
        Our Works
      </h3>
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
