<template>
  <div class="container mx-auto py-8 px-4">
    <div class="flex items-center justify-between">
      <NavLogo />
      <NavDesktop :nav-links="navLinks" />
      <NavMobile :nav-links="navLinks" />
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    navLinks: {
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
    },
  }),
}
</script>
<style></style>
