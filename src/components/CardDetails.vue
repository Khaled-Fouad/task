<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
    <!-- Header Section -->
    <h2 class="text-3xl font-bold dark:text-white text-gray-800 mb-6 flex items-center">
      <!-- Icon before the title -->
      <svg :class="selectedTheme.text" class="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
      Modern Development Stack
    </h2>

    <!-- Card Container -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Looping through the cards array to display each card -->
      <div v-for="(card, index) in cards" :key="index"
           class="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4 transition-all duration-300 dark:hover:shadow-gray-900 hover:shadow-xl">

        <!-- Card Image Section -->
        <div class="h-40 w-full overflow-hidden rounded-lg">
          <img :src="card.image" alt="Feature Image" class="w-full h-full object-cover">
        </div>

        <!-- Card Content Section -->
        <div class="p-4">
          <!-- Icon and Title Section -->
          <div class="flex items-center mb-3">
            <!-- Dynamic Icon -->
            <component :is="card.icon" :class="selectedTheme.text" class="w-6 h-6 text-blue-600 mr-2"></component>
            <h3 class="text-xl font-semibold dark:text-white text-gray-800">{{ card.title }}</h3>
          </div>

          <!-- Expandable Description -->
          <div :class="{'max-h-25': !card.expanded, 'max-h-90': card.expanded}"
               class="relative overflow-hidden transition-all duration-500">
            <p class="text-gray-500 dark:text-gray-400">
              {{ card.description }}
            </p>
          </div>

          <!-- Read More / Read Less Button -->
          <button :class="selectedTheme.text" class="mt-3 text-blue-600 cursor-pointer font-medium transition"
                  @click="toggleExpand(index)">
            {{ card.expanded ? "Read Less" : "Read More" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { store } from "../store/store"; // Importing the global state store

// Importing icons from Heroicons library
import { Squares2X2Icon, DevicePhoneMobileIcon, SparklesIcon } from "@heroicons/vue/24/solid";

// Importing images for cards
import VueImage from "@/assets/Images/1.jpg";
import IonicImage from "@/assets/Images/2.png";
import TailwindImage from "@/assets/Images/3.jpg";

export default {
  props: {
    selectedTheme: Object, // Receiving the selected theme from the parent component
  },
  components: {
    VueImage, IonicImage, TailwindImage, // Image components
    Squares2X2Icon,
    DevicePhoneMobileIcon,  // Corrected naming for mobile icon
    SparklesIcon,
  },
  setup() {
    return { store }; // Using the store inside the component
  },
  data() {
    return {
      // Array of cards representing different technologies
      cards: [
        {
          image: VueImage, // Image for Vue.js card
          title: "Vue.js - Progressive Framework",
          description: "Vue.js is a modern JavaScript framework for building user interfaces. It provides a reactive and component-driven architecture that makes web development efficient. Vue’s ecosystem includes Vue Router for navigation and Vuex for state management. It seamlessly integrates with APIs, making it a powerful tool for interactive applications. Vue makes it easy to manage state and build interactive, scalable applications with a simple yet powerful syntax.",
          expanded: false, // Default state for expandable description
          icon: "Squares2X2Icon", // Icon for this card
        },
        {
          image: IonicImage, // Image for Ionic framework
          title: "Ionic - Hybrid Mobile Development",
          description: "Ionic is a powerful framework for building cross-platform mobile applications using web technologies like HTML, CSS, and JavaScript. It integrates well with Vue.js, providing a seamless experience for developers. Ionic’s UI components are optimized for mobile devices, ensuring a native-like experience on iOS and Android. With Ionic, developers can use one codebase to create beautiful, high-performance mobile applications that work across multiple platforms.",
          expanded: false, // Default state
          icon: "DevicePhoneMobileIcon",  // Icon for mobile development
        },
        {
          image: TailwindImage, // Image for Tailwind CSS
          title: "Tailwind CSS - Utility-First Styling",
          description: "Tailwind CSS is a utility-first framework that allows developers to build designs quickly without writing custom CSS. Its responsive grid system and utility classes make styling intuitive. Tailwind is highly customizable and works seamlessly with Vue.js, making UI development faster and more efficient. The framework encourages reusable styles and reduces the need for writing traditional CSS, making it perfect for modern web development projects.",
          expanded: false, // Default state
          icon: "SparklesIcon", // Icon for styling
        },
      ],
    };
  },
  methods: {
    // Toggles the expanded state for each card
    toggleExpand(index) {
      this.cards[index].expanded = !this.cards[index].expanded;
    },
  },
};
</script>


<style>
/* CSS styles for smooth expand/collapse animation */
.max-h-20 {
  max-height: 5rem; /* Shows only a few lines initially */
}

.max-h-96 {
  max-height: 24rem; /* Fully expanded */
}
</style>
