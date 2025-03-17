
<template>
  <nav-bar-component :selectedTheme="selectedTheme" />
  <card-details :selectedTheme="selectedTheme" />
  <color-picker-component :selectedTheme="selectedTheme" @updateTheme="updateTheme" class="mb-6" />
<footer-component :selectedTheme="selectedTheme"/>
</template>
<script>
import { ref, onMounted } from "vue";
import NavBarComponent from "@/components/NavBarComponent.vue";
import CardDetails from "@/components/CardDetails.vue";
import ColorPickerComponent from "@/components/ColorPickerComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    FooterComponent,
    NavBarComponent,
    CardDetails,
    ColorPickerComponent,
  },
  setup() {
    const themes = [
      { text: "text-red-600", bg: "bg-red-600" },
      { text: "text-green-600", bg: "bg-green-600" },
      { text: "text-blue-600", bg: "bg-blue-600" },
      { text: "text-purple-600", bg: "bg-purple-600" },
    ];

    const selectedTheme = ref(themes[0]); // Default theme

    onMounted(() => {
      const savedTheme = localStorage.getItem("selectedTheme");
      if (savedTheme) {
        selectedTheme.value = JSON.parse(savedTheme);
      }
    });

    const updateTheme = (theme) => {
      selectedTheme.value = theme;
      localStorage.setItem("selectedTheme", JSON.stringify(theme));
    };

    return {
      selectedTheme,
      updateTheme,
    };
  },
};
</script>
<style>
</style>
