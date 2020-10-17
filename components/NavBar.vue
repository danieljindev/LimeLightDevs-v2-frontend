<template>
  <div class="mx-24 py-8">
    <div class="flex items-center justify-between">
      <div class="font-bold text-4xl">
        <!-- Logo should replace this text -->
        Limelight
      </div>
      <nav class="hidden lg:block">
        <ul class="flex space-x-12 items-center">
          <!-- Change text colors once color theme is added !-->
          <li><a class="font-bold">Services</a></li>
          <li><a class="font-bold">Packages</a></li>
          <li><a class="font-bold">Works</a></li>
          <li>
            <!-- Button colors should be modified once color theme is added -->
            <button
              class="px-5 py-1 rounded-full font-bold bg-green-400 focus:outline-none"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
      <!-- Add hamburger nav menu for mobile width -->
      <nav class="lg:hidden">
        <!-- Add background dim overlay -->
        <div class="absolute"></div>
        <div></div>
        <div
          class="hamburger-menu"
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
  width: 40px;
  height: 4px;
  background-color: #222222;
  display: block;
  margin: 8px auto;
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
  -webkit-transform: translateY(12px) rotate(45deg);
  -ms-transform: translateY(12px) rotate(45deg);
  -o-transform: translateY(12px) rotate(45deg);
  transform: translateY(12px) rotate(45deg);
}

.hamburger-menu.is-active .hamburger-line:nth-child(3) {
  -webkit-transform: translateY(-12px) rotate(-45deg);
  -ms-transform: translateY(-12px) rotate(-45deg);
  -o-transform: translateY(-12px) rotate(-45deg);
  transform: translateY(-12px) rotate(-45deg);
}
</style>
