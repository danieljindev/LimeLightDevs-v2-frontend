<template>
  <div class="w-full z-20">
    <PageHeader
      :pageTitle="pageTitle"
      :description="description"
      :link="link"
      :linkTitle="linkTitle"
    />
    <Services />
  </div>
</template>

<script>
import PageHeader from '~/components/common/PageHeader.vue'

export default {
  components: { PageHeader },
  data() {
    return {
      pageTitle: 'Services',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit faucibus parturient sagittis justo curabitur lacinia ridiculus class.',
      link: '/packages',
      linkTitle: 'Check our packages',
    }
  },
}
</script>

<style></style>
