/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#073451',
        ocean: '#0878B5',
        blue: '#149ED1',
        cyan: '#43C6E8',
        sky: '#EAF8FD',
        text: '#123047',
        muted: '#607B8D',
        border: '#D7EAF3',
        positive: '#18865B',
        warning: '#D88A16'
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'Manrope', 'sans-serif']
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem'
      }
    }
  },
  plugins: []
}
