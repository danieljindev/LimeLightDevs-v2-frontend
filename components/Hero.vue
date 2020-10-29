<template>
  <div class="w-full text-white flex justify-start">
    <img src="hero/blob.png" class="absolute top-0 right-0 w-2/3 h-auto" />
    <img src="hero/projects.png" class="absolute right-0 w-2/5 h-auto" />
    <!-- honestly thinking of just creating a whole new image with all the images put on it, it seems to difficult to responsively style this -->
    <div
      class="relative w-1/2 flex flex-col items-center lg:items-start lg:ml-56 my-64 text-center lg:text-left"
    >
      <span class="text-8xl font-hibana w-full mb-1">Welcome!</span>
      <span class="text-6xl font-hibana text-app-green-1 w-full mb-6">Limelight - Web Developing</span>
      <p class="text-lg w-3/4 mb-8">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, fames semper
        vehicula velit dapibus in iaculis. Eros cursus lobortis leo hendrerit
        faucibus parturient sagittis justo curabitur lacinia ridiculus class.
      </p>
      <a
        href="#contact"
        class="px-8 md:px-16 py-3 tracking-wider font-bold text-2xl text-app-green-1 border-4 border-app-green-1 rounded-full cursor-pointer focus:outline-none"
      >
        Contact Us
      </a>

      <div class="h-full flex items-center justify-center absolute left-0">
      <span class="text-app-gray-3 font-bold text-xl ml-6 transform -rotate-90 -translate-x-40 -translate-y-10">contact@limelight.com</span>
      </div>
    </div>
  </div>
</template>
