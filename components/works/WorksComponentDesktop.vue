<template>
  <section-container
    class="relative z-[1] hidden sm:block"
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
        shadow-2xl
        hidden
      "
    >
      <div v-for="work in works" :key="work.id" class="w-1/4">
        <works-card :work="work" />
      </div>
    </div>
  </section-container>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle.vue'
import SectionContainer from '~/components/common/SectionContainer.vue'
import WorksCard from '~/components/works/WorkCard'

export default {
  components: { SectionContainer, SectionTitle, WorksCard },
  props: {
    works: {
      type: Array,
      default: () => [],
    },
  },
  setup() {},
}
</script>

<style></style>
