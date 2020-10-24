<template>
  <div class="relative w-full h-full" :class="currentIndex === index ? 'block' : 'hidden'">
    <img :src=serviceSlide.imageUrl class="w-full max-h-full object-cover" draggable=false />
    <div class="absolute bottom-0 py-2 w-full flex flex-col items-center">
      <span class="font-bold text-4xl mb-2 text-center">{{ serviceSlide.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    serviceSlide: Object,
    index: Number,
    currentIndex: Number
  }
}
</script>
