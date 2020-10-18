<template>
  <div class="flex flex-col min-h-screen">
    <Footer />
  </div>
</template>

<script>
export default {
  setup() {
    const name = 'Limelight Devs'
    return { name }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
