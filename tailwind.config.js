/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ["Helvetica Neue", 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      'outline': ["Helvetica Neue Outline", 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'neon': {
          500: '#E9FE70'
        },
        'blue': {
          950: '#080809'
        },
        'grey': {
          500: '#333333'
        }
      },
    },
  },
  plugins: [],
}

