<template>
  <div class="container mx-auto py-8">
    <div class="flex items-center justify-between">
      <div class="flex items-end">
        <p class="font-bold text-4xl text-app-green-1">
          <!-- Logo should replace this text -->
          Lime
        </p>
        <p class="text-4xl text-app-green-1">light</p>
        <p class="pl-3 text-app-green-1 opacity-75">devs</p>
      </div>
      <nav class="hidden lg:block">
        <ul class="flex space-x-12 items-center">
          <!-- Change text colors once color theme is added -->
          <li>
            <a
              href="#"
              class="font-bold hover:text-app-green-1 transition-all ease-in-out duration-200"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="font-bold hover:text-app-green-1 transition-all ease-in-out duration-200"
              >Packages</a
            >
          </li>
          <li>
            <a
              href="#"
              class="font-bold hover:text-app-green-1 transition-all ease-in-out duration-200"
              >Works</a
            >
          </li>
          <li>
            <!-- Button colors should be modified once color theme is added -->
            <button
              class="px-5 py-1 rounded-full font-bold text-app-gray-1 bg-app-green-1 hover:text-app-green-1 hover:bg-app-gray-1 border border-app-green-1 transition-all ease-in-out duration-200 focus:outline-none"
            >
              <a href="#">Contact Us</a>
            </button>
          </li>
        </ul>
      </nav>
      <nav class="lg:hidden">
        <!-- Drawer bg overlay -->
        <div
          class="absolute bg-black inset-0 transition-all ease-in-out duration-500 opacity-0 h-screen w-screen z-20"
          :class="{ 'opacity-50': isHamburgerActive }"
        ></div>
        <!-- Navigation drawer -->
        <aside
          :class="isHamburgerActive ? 'translate-x-0' : 'translate-x-full'"
          class="transform top-0 bottom-0 right-0 w-8/12 md:w-5/12 bg-white fixed h-screen overflow-auto ease-in-out transition-all duration-300 z-30"
        >
          <ul
            class="flex flex-col h-full items-center justify-center align-center"
          >
            <li class="my-3">
              <a href="#" class="text-lg font-bold transition duration-300">
                Services
              </a>
            </li>
            <li class="my-3">
              <a href="#" class="text-lg font-bold transition duration-300">
                Packages
              </a>
            </li>
            <li class="my-3">
              <a href="#" class="text-lg font-bold transition duration-300">
                Works
              </a>
            </li>
            <li class="my-3">
              <button
                class="px-5 py-1 text-lg font-bold rounded-full focus:outline-none bg-green-400"
              >
                Contact Us
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
    </div>
  </div>
</template>
<script>
export default {
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
  background-color: #222222;
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
