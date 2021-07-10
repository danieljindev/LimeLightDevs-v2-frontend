<template>
  <div class="w-full z-20">
    <PageHeader
      :page-title="pageTitle"
      :description="description"
      :link="link"
      :link-title="linkTitle"
    />
    <WorksComponent />
  </div>
</template>

<script>
import PageHeader from '~/components/common/PageHeader.vue'

export default {
  components: { PageHeader },
  data() {
    return {
      pageTitle: 'Works',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit faucibus parturient sagittis justo curabitur lacinia ridiculus class.',
      link: '/packages',
      linkTitle: 'Check our packages',
    }
  },
  head() {
    return {
      title: this.pageTitle,
    }
  },
}
</script>

<style></style>
