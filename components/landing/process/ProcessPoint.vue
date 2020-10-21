<template>
  <div class="w-1/6 relative z-20">
    <div class="flex justify-center">
      <div
        class="rounded-full h-20 w-20 bg-app-gray-2 flex items-center justify-center"
      >
        <img class="w-16" :src="src" alt="" />
      </div>
    </div>
    <div class="text-center">
      <h4 class="font-bold">Wireframes & designs</h4>
      <p>
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
