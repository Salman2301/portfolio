/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        highlight: 'var(--color-highlight)',
        "highlight-1": 'var(--color-highlight-1)',
        "secondary-1": 'var(--color-secondary-1)',
        'highlight-1-dark': 'var(--color-highlight-1-dark)'
      }
    },

  },
  plugins: [],
}

