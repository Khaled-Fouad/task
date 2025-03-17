<template>
  <!-- Navigation Bar -->
  <nav :class="selectedTheme.bg" class="bg-blue-600 text-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Centered Title -->
        <h1 class="text-2xl font-bold">Security Matrix</h1>

        <!-- Dark Mode Toggle Button -->
        <button @click="toggleDarkMode" class="focus:outline-none">
          <!-- Light Mode Icon (Shown when dark mode is off) -->
          <svg
              v-if="!isDarkMode"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v1m0 16v1m8.485-8.485h1M3 12h1m15.364-7.364l-.707.707M4.343 19.657l.707-.707m0-14.142l-.707.707M19.657 19.657l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
          </svg>

          <!-- Dark Mode Icon (Shown when dark mode is on) -->
          <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v1m0 16v1m8.485-8.485h1M3 12h1m15.364-7.364l-.707.707M4.343 19.657l.707-.707m0-14.142l-.707.707M19.657 19.657l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { store } from "../store/store"; // Importing the store for global state management
import { onMounted, ref } from "vue"; // Importing Vue's reactivity functions

export default {
  props: {
    selectedTheme: Object, // Receiving the selected theme from the parent component
  },
  setup() {
    const isDarkMode = ref(false); // Reactive state to track if dark mode is enabled

    // Runs when the component is mounted
    onMounted(() => {
      const savedDarkMode = localStorage.getItem("darkMode"); // Retrieves dark mode preference from local storage
      if (savedDarkMode === "true") {
        isDarkMode.value = true;
        document.documentElement.classList.add("dark"); // Applies dark mode to the document
      }
    });

    // Function to toggle dark mode
    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value; // Toggle the dark mode state
      if (isDarkMode.value) {
        document.documentElement.classList.add("dark"); // Enable dark mode
      } else {
        document.documentElement.classList.remove("dark"); // Disable dark mode
      }
      localStorage.setItem("darkMode", isDarkMode.value); // Save preference in local storage
    };

    return { store, isDarkMode, toggleDarkMode }; // Return variables and methods for use in the template
  },
};
</script>

<style>
/* Dark Mode Styles */
.dark {
  background-color: #1a202c; /* Dark background */
  color: white; /* White text */
}
</style>
