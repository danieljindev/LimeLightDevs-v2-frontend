<template>
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-10 xl:mb-5">Our Process</h2>
    <div class="hidden lg:flex justify-between mx-auto">
      <ProcessPoint
        class="mt-48 transform translate-x-8 xl:translate-x-16 2xl:translate-x-24 2xl:translate-y-6"
        src="/processes/wireframes.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula."
        subhead="Wireframes & Designs"
      />
      <left-dotted-line
        class="transform -rotate-6 w-2/5 -translate-x-8 -translate-y-16 xl:-translate-y-12 xl:-translate-x-6"
      />
      <ProcessPoint
        class="mt-32 transform -translate-x-20 translate-y-2 xl:-translate-x-24 2xl:-translate-x-32"
        src="/processes/development.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula."
        subhead="Development"
      />
      <right-dotted-line
        class="transform w-2/5 -translate-x-32 -translate-y-4 xl:-translate-x-40 2xl:-translate-x-56"
      />
      <ProcessPoint
        class="transform -translate-x-48 translate-y-24 xl:-translate-x-56 2xl:-translate-x-80"
        src="/processes/launch.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula."
        subhead="Launch!"
      />
    </div>
    <div class="flex flex-col items-center lg:hidden">
      <ProcessPoint
        src="/processes/wireframes.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula."
        subhead="Wireframes & Designs"
      />

      <ProcessPoint
        class="mt-16"
        src="/processes/development.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula."
        subhead="Development"
      />

      <ProcessPoint
        class="mt-16"
        src="/processes/launch.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula."
        subhead="Launch"
      />
    </div>
  </div>
</template>

<script>
import LeftDottedLine from '~/components/misc/icons/LeftDottedLine.vue'
import RightDottedLine from '~/components/misc/icons/RightDottedLine.vue'
export default {
  components: { RightDottedLine, LeftDottedLine },
}
</script>

<style></style>
