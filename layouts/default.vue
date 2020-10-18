<template>
  <div class="min-h-screen text-white bg-app-gray-1">
    <Icon class="w-64 mx-auto" name="DottedLine" />
    <h1 class="text-8xl font-hibana">Welcome!</h1>
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@font-face {
  font-family: 'Hibana';
  src: local('Hibana'), url(~static/fonts/Hibana-SubMedium.otf);
}
html {
  font-family: 'Roboto', sans-serif;
}
</style>
