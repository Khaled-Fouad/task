<template>
  <div :class="[selectedTheme.bg, ' text-white py-6 shadow-md transition-all  w-full']">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Personal Info -->
        <div class="text-center md:text-left">
          <h2 class="text-lg font-semibold">Khaled Fouad</h2>
          <p class="text-sm opacity-80">Front-end Developer || Mobile Application Developer</p>
        </div>

        <!-- Contact Info -->
        <div class="flex space-x-4 mt-4 md:mt-0">
          <!-- Phone -->
          <a href="tel:+201099292491" class="flex items-center space-x-2 hover:opacity-80">
            <i class="fa-solid fa-phone text-white"></i>
            <span class="text-sm">01099292491</span>
          </a>

          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/khaled-fouad-96a981285/" target="_blank" class="hover:opacity-80">
            <i class="fab fa-linkedin text-white text-xl"></i>
          </a>

          <!-- GitHub -->
          <a href="https://github.com/Khaled-Fouad" target="_blank" class="hover:opacity-80">
            <i class="fab fa-github text-white text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    selectedTheme: Object, // Receives the selected theme
  },
};
</script>

<style>
</style>
