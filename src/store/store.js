// store.js

// Importing 'reactive' from Vue to create a reactive state
import { reactive } from 'vue';

// Creating a global reactive store to manage theme selection
export const store = reactive({
    selectedTheme: {
        text: 'text-black', // Default text color (black)
        bg: 'bg-blue-600'   // Default background color (blue)
    }
});