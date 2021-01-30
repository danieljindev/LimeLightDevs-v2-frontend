<template>
  <div class="hidden lg:flex w-full justify-center">
    <a
      href="#works"
      draggable="false"
      class="relative flex flex-row justify-start z-10 w-11/12 bg-app-gray-24 my-16 h-64 sm:h-96 md:h-128 rounded-2xl shadow-2xl"
    >
      <img
        v-for="(image, index) in images"
        :key="image"
        :src="image"
        :alt="image"
        draggable="false"
        class="w-1/4 object-cover"
        :class="[
          index === 0 ? 'rounded-l-2xl' : '',
          index === images.length - 1 ? 'rounded-r-2xl' : '',
        ]"
      />
      <div
        class="absolute inset-x-0 bottom-0 pb-4 h-1/4 bg-gradient-to-t from-black to-transparent rounded-b-2xl opacity-75"
      />
      <div class="absolute inset-x-0 bottom-0 items-center flex flex-col pb-4">
        <p class="text-white opacity-100 text-2xl mb-4">
          See all {{ projectCount }} projects
        </p>

        <div
          class="rounded-full w-12 h-12 bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-200 ease-in-out cursor-pointer flex items-center justify-center"
        >
          <Icon name="rightArrow" />
        </div>
      </div>
    </a>
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
