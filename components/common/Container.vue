<template>
  <!-- DESIGN VARIANTS  -->
  <div
    class="mx-auto mt-10 md:mt-24"
    :class="[
      variant === 'one' ? 'w-10/12' : '',
      variant === 'two' ? 'w-10/12 lg:w-4/5 xl:w-3/5 2xl:w-7/12' : '',
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'one',
    },
  },
}
</script>
