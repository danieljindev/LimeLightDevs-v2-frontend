<template>
  <div class="w-full overflow-x-auto">
    <WorksComponentDesktop :images="images" :project-count="projectCount" />
    <WorksComponentMobile :images="images" :project-count="projectCount" />
  </div>
</template>

<script>
export default {
  setup() {
    // images shown for works component, should probs be fetched from backend
    // one issue i see for mobile view (that also occurs with the Packages component) is that because the component has w-11/12, it can sometimes look oddly clipped off
    // it's not too great of an issue but just something i noticed
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
