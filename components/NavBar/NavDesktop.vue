<template>
  <nav class="hidden lg:block">
    <ul class="flex space-x-12 items-center">
      <!-- Change text colors once color theme is added -->
      <li v-for="link in navLinks" :key="link.name">
        <a
          v-if="!link.button"
          :href="link.href"
          class="font-bold text-white hover:text-app-green-1 transition ease-in-out duration-300"
          >{{ link.name }}</a
        >
        <button
          v-else
          class="px-5 py-1 rounded-full font-bold text-app-gray-1 bg-app-green-1 hover:text-app-green-1 hover:bg-app-gray-1 border-2 border-app-green-1 transition duration-200 focus:outline-none"
        >
          <a :href="link.href">{{ link.name }}</a>
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
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
