<template>
  <VueSlickCarousel v-bind="settings">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="relative px-3 py-2 focus:outline-none"
    >
      <img
        :src="'/works/3.jpg'"
        class="w-full object-cover rounded-xl"
        draggable="false"
      />
    </div>
  </VueSlickCarousel>
</template>

<script>
import { mapState } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'WorkCarousel',
  components: { VueSlickCarousel },
  data() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: true,
      pauseOnHover: true,
    }

    return {
      settings,
    }
  },
  computed: {
    ...mapState({
      projects: (state) => state.works.projects,
    }),
  },
}
</script>
