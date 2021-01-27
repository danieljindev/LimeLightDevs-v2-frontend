<template>
  <div class="w-full overflow-x-auto">
    <WorksComponentDesktop :images="images" :projectCount="projectCount" />
    <WorksComponentMobile :images="images" :projectCount="projectCount" />
  </div>
</template>

<script>
import { reactive } from '@nuxtjs/composition-api'

export default {
  setup() {
    const images = [
      '/works/1.jpg',
      '/works/2.jpg',
      '/works/3.jpg',
      '/works/4.jpg',
    ]
    const projectCount = 52
    return { images, projectCount }
  },
}
</script>
