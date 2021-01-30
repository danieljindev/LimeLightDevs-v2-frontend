<template>
  <div class="lg:hidden flex w-11/12 mx-auto my-4">
    <div class="w-full overflow-x-auto z-30 flex p-3">
      <div
        v-for="(image, id) in images"
        :key="id"
        class="mr-12 shadow-2xl rounded-2xl min-w-128"
      >
        <a href="#works" class="w-full">
          <img
            :src="image"
            :alt="image"
            draggable="false"
            class="w-full h-full object-cover rounded-2xl"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
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
