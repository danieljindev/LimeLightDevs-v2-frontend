<template>
  <div class="mx-24 py-8 bg-red-500">
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
      <nav class="lg:hidden">HamburgerIcon</nav>
    </div>
  </div>
</template>

<style></style>
