<template>
  <nav class="lg:hidden">
    <!-- Drawer bg overlay -->
    <div
      class="absolute bg-black inset-0 transition-all ease-in-out duration-500 opacity-0 h-screen w-screen z-20"
      :class="{ 'opacity-50': isHamburgerActive }"
    ></div>
    <!-- Navigation drawer -->
    <aside
      :class="isHamburgerActive ? 'translate-x-0' : 'translate-x-full'"
      class="transform top-0 bottom-0 right-0 w-8/12 md:w-5/12 bg-app-gray-1 fixed h-screen overflow-auto ease-in-out transition-all duration-300 z-30"
    >
      <ul class="flex flex-col h-full items-center justify-center align-center">
        <li v-for="link in navLinks" :key="link.name" class="my-3">
          <a
            v-if="!link.button"
            :href="link.href"
            class="text-xl font-bold hover:text-app-green-1 transition duration-200"
          >
            {{ link.name }}
          </a>
          <button
            v-else
            class="px-5 py-1 text-xl text-app-gray-1 font-bold rounded-full bg-app-green-1 hover:text-app-green-1 hover:bg-app-gray-1 border-2 border-app-green-1 transition-all ease-in-out duration-200 focus:outline-none"
          >
            <a :href="link.href">{{ link.name }}</a>
          </button>
        </li>
      </ul>
    </aside>
    <!-- Hamburger menu -->
    <div
      class="hamburger-menu relative z-40"
      :class="{ 'is-active': isHamburgerActive }"
      @click.prevent="toggleMenu"
    >
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </div>
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
  data: () => ({
    isHamburgerActive: false,
  }),
  methods: {
    toggleMenu() {
      this.isHamburgerActive = !this.isHamburgerActive
    },
  },
}
</script>
<style>
/* Hamburger menu styling */
.hamburger-menu .hamburger-line {
  width: 30px;
  height: 4px;
  background-color: #ffffff;
  display: block;
  margin: 6px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger-menu:hover {
  cursor: pointer;
}

.hamburger-menu.is-active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.is-active .hamburger-line:nth-child(1) {
  -webkit-transform: translateY(10px) rotate(45deg);
  -ms-transform: translateY(10px) rotate(45deg);
  -o-transform: translateY(10px) rotate(45deg);
  transform: translateY(10px) rotate(45deg);
}

.hamburger-menu.is-active .hamburger-line:nth-child(3) {
  -webkit-transform: translateY(-10px) rotate(-45deg);
  -ms-transform: translateY(-10px) rotate(-45deg);
  -o-transform: translateY(-10px) rotate(-45deg);
  transform: translateY(-10px) rotate(-45deg);
}
</style>
