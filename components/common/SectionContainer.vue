<template>
  <div
    :class="defaultMargins ? 'mt-48' : ''"
    class="container mx-auto py-8 px-6 lg:px-10 xl:px-32"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    defaultMargins: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style></style>
