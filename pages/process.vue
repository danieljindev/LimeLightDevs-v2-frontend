<template>
  <div class="container mx-auto px-3">
    <h2 class="text-4xl font-bold mb-5">Our Process</h2>
    <div class="flex justify-between">
      <ProcessPoint
        src="/processes/wireframes.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula."
      />
      <!-- <left-dotted-line class="w-2/5 -ml-40" /> -->
      <ProcessPoint
        src="/processes/development.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula."
      />
      <!-- <right-dotted-line class="w-2/5 -ml-20" /> -->
      <ProcessPoint
        src="/processes/launch.png"
        body="App pagesLorem ipsum dolor sit amet consectetur adipiscing elit, fames semper vehicula."
      />
    </div>
  </div>
</template>

<script>
// import LeftDottedLine from '~/components/misc/icons/LeftDottedLine.vue'
// import RightDottedLine from '~/components/misc/icons/RightDottedLine.vue'
export default {
  // components: { RightDottedLine, LeftDottedLine },
}
</script>

<style></style>
