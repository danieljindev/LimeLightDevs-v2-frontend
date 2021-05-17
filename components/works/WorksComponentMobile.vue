<template>
  <section-container class="sm:hidden w-11/12 mx-auto my-4">
    <section-title text="Our Works" />
    <div class="overflow-x-auto flex flex-nowrap p-3">
      <div
        v-for="work in works"
        :key="work.id"
        style="heigh"
        class="mr-12 shadow-2xl rounded-2xl min-w-128 min-h-128"
      >
        <works-card :work="work" />
      </div>
      <!-- <div
        v-for="(work, id) in works"
        :key="id"
        class="mr-12 shadow-2xl rounded-2xl min-w-128"
      >
        <a :href="work.url" class="relative h-full w-full">
          <img
            :src="work.image"
            :alt="work.image"
            draggable="false"
            class="w-full h-full object-cover rounded-2xl"
          />
        </a>
      </div> -->
    </div>
  </section-container>
</template>

<script>
import WorksCard from '~/components/works/WorkCard'
import SectionTitle from '~/components/common/SectionTitle.vue'
import SectionContainer from '~/components/common/SectionContainer.vue'

export default {
  components: {
    SectionContainer,
    SectionTitle,
    WorksCard,
  },
  props: {
    works: {
      type: Array,
      required: true,
    },
    projectCount: {
      type: Number,
      required: true,
    },
  },
}
</script>
