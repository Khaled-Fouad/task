<template>
  <div class="flex flex-col items-center">
    <!-- Heading for the theme picker -->
    <h2 class="text-2xl dark:text-white font-bold mb-4">Pick a Theme</h2>

    <div class="flex space-x-4">
      <!-- Looping through the themes array to display theme options -->
      <!-- Emits the selected theme to the parent -->
      <div
          v-for="(theme, index) in themes"
          :key="index"
          @click="$emit('updateTheme', theme)"
      class="w-10 h-10 rounded-lg border-white cursor-pointer border-3 transition flex items-center justify-center"
      :class="[theme.bg, theme.text, selectedTheme.bg === theme.bg ? 'border-black' : '']"
      >
      <span class="text-white font-bold"></span> <!-- Just a placeholder letter -->
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedTheme: Object, // Receiving the selected theme from the parent component
  },
  emits: ["updateTheme"], // Declaring the custom event for updating the theme
  setup() {
    return {
      // Array of theme options with text and background colors
      themes: [
        { text: "text-red-600", bg: "bg-red-600" },
        { text: "text-green-600", bg: "bg-green-600" },
        { text: "text-blue-600", bg: "bg-blue-600" },
        { text: "text-purple-600", bg: "bg-purple-600" },
      ],
    };
  },
};
</script>
