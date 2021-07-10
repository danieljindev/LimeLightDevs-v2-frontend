<template>
  <h3 class="mb-7 text-4xl font-semibold tracking-wide text-left md:text-5xl">
    <slot>{{ text }}</slot>
  </h3>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Title',
    },
  },
}
</script>

<style></style>
