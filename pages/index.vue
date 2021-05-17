<template>
  <!-- overflow hidden is required for blobs -->
  <div class="lg:overflow-x-hidden">
    <Hero />
    <!-- <Works /> -->
    <!-- <container :default-margins="false" /> -->
    <Packages />
    <!-- <section-container class="relaitve" :default-margins="false">
      <img class="w-full absolute right-0" src="greenblob09.png" alt="" />
    </section-container> -->
    <div class="relative">
      <div class="absolute right-[-100px] bottom-[-400px] w-[50rem]">
        <img class="w-full" src="greenblob09.png" alt="" />
      </div>
      <works-component />
    </div>
    <our-process />
  </div>
</template>

<script>
import Container from '~/components/common/Container.vue'
import OurProcess from '~/components/process/OurProcess.vue'
import WorksComponent from '~/components/works/WorksComponent'
export default {
  components: { OurProcess, WorksComponent },
  setup() {
    // images shown for works component, should probs be fetched from backend
    // one issue i see for mobile view (that also occurs with the Packages component) is that because the component has w-11/12, it can sometimes look oddly clipped off
    // it's not too great of an issue but just something i noticed
    const works = [
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 1',
        image: '/works/1.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 2',
        image: '/works/2.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 3',
        image: '/works/3.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 4',
        image: '/works/4.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 1',
        image: '/works/1.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 2',
        image: '/works/2.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 3',
        image: '/works/3.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 4',
        image: '/works/4.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 1',
        image: '/works/1.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 2',
        image: '/works/2.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 3',
        image: '/works/3.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: Math.random().toString(36).substring(7),
        name: 'Work 4',
        image: '/works/4.jpg',
        url: '#works',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]
    const projectCount = 52
    return { works, projectCount }
  },
  data() {
    return {
      Container,
    }
  },
}
</script>

<style></style>
