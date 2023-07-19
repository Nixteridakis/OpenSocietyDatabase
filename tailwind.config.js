/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#006eff',
          secondary: '#dde4ee',
          accent: '#5c6466',
          neutral: '#22232f',
          'base-100': '#eef1f6',
          info: '#569FB4',
          success: '#0369a1q',
          warning: '#44403c',
          error: '#111827'
        }
      },
      'dark',
      'cupcake'
    ]
  }
}
