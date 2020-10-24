<template>
  <div class="relative w-full h-96 bg-app-gray-2">
    <ServiceSlideItem v-for="(serviceSlide, index) in serviceSlides" 
      :key=serviceSlide.name
      :serviceSlide=serviceSlide
      :index=index
      :currentIndex=currentIndex
    />
    <div class="w-full flex justify-center absolute top-0 mt-6">
      <button
        v-for="(serviceSlide, index) in serviceSlides"
        :key=index
        class="rounded-full w-3 h-3 focus:outline-none mx-2 transition duration-500"
        :class="currentIndex === index ? 'bg-white' : 'border-2 border-white'"
        @click="changeIndex(index-currentIndex)"
      />  
    </div>

    <ServiceSlideButton direction="&lt;" @changeIndex="changeIndex" />
    <ServiceSlideButton direction="&gt;" @changeIndex="changeIndex" />
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";

export default {
  setup() {
    const serviceSlides = [
      {
        name: 'Hallmar wine & distillery',
        imageUrl: 'https://images.unsplash.com/photo-1487083990731-52aaad54939a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        name: 'Lorem ipsum dolor sit amet',
        imageUrl: 'https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1369&q=80'
      },
      {
        name: 'consectetur adipiscing elit',
        imageUrl: 'https://images.unsplash.com/photo-1483488792196-78bedff29c21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        name: 'something really really cool!',
        imageUrl: 'https://images.unsplash.com/photo-1525877089115-11718b6724c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
      }
    ];
    const currentIndex = ref(0);

    function changeIndex(value) {
      currentIndex.value += value;
      if (currentIndex.value >= serviceSlides.length) {
        currentIndex.value = 0;
      } else if (currentIndex.value < 0) {
        currentIndex.value = serviceSlides.length - 1
      }
      console.log(currentIndex.value)
    }

    return { serviceSlides, currentIndex, changeIndex };
  }
}
</script>