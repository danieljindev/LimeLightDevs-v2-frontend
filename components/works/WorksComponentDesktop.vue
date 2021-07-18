<template>
  <section-container
    class="relative z-[1] hidden sm:block"
    style="filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.4))"
    :default-margins="false"
  >
    <section-title text="Our Works" />
    <div
      class="
        sm:flex
        flex-wrap
        items-stretch
        rounded-2xl
        overflow-hidden
        relative
        hidden
        shadow-2xl
      "
      style="filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.4))"
    >
      <div
        v-for="work in projects"
        :key="work.id"
        class="w-1/2 lg:w-1/3 xl:w-1/4"
      >
      <works-card :work="work" />
      </div>
    </div>
  </section-container>
</template>

<script>
import { mapState } from 'vuex'
import SectionTitle from '~/components/common/SectionTitle.vue'
import SectionContainer from '~/components/common/SectionContainer.vue'
import WorksCard from '~/components/works/WorkCard'

export default {
  components: { SectionContainer, SectionTitle, WorksCard },

  computed: {
    ...mapState({
      projects: (state) => state.works.projects,
    }),
  },
}
</script>

<style></style>
