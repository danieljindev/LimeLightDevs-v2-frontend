<template>
  <nav class="hidden lg:block">
    <ul class="flex space-x-12 items-center">
      <!-- Change text colors once color theme is added -->
      <li v-for="link in navLinks" :key="link.name">
        <nuxt-link
          v-if="!link.button"
          :to="link.href"
          class="font-bold text-white hover:text-app-green-1 transition ease-in-out duration-300"
          >{{ link.name }}</nuxt-link
        >
        <Button v-else variant="inverse">
          <nuxt-link :to="link.href">{{ link.name }}</nuxt-link>
        </Button>
      </li>
    </ul>
  </nav>
</template>
<script>
import Button from '../common/Button.vue'
export default {
  props: {
    Button,
    navLinks: {
      type: Object,
      default: () => {
        return {
          services: {
            name: 'Services',
            href: '#services',
          },
          packages: {
            name: 'Packages',
            href: '#packages',
          },
          works: {
            name: 'Works',
            href: '#works',
          },
          contactus: {
            name: 'Contact Us',
            href: '#contact',
            button: true,
          },
        }
      },
    },
  },
}
</script>
<style></style>
