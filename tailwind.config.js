import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eff7ff',
          100: '#d9ecff',
          200: '#b3d9ff',
          300: '#85c1ff',
          400: '#57a5ff',
          500: '#2f8aff',   // main
          600: '#1f6ddf',
          700: '#1655b8',
          800: '#123f8a',
          900: '#0f2f66'
        },
        secondary: {
          50:  '#fff4f2',
          100: '#ffe7e3',
          200: '#ffcfc7',
          300: '#ffaea1',
          400: '#ff8873',
          500: '#ff6a55',   // main
          600: '#e24c37',
          700: '#bc3a2b',
          800: '#8f2f25',
          900: '#6e251f'
        },
        accent: {
          50:  '#f2fbf6',
          100: '#ddf7e8',
          200: '#b6efcf',
          300: '#83e4b1',
          400: '#4cd58d',
          500: '#23c46f',   // main
          600: '#1fa85e',
          700: '#1b8c4d',
          800: '#166f3c',
          900: '#135a31'
        },
        neutral: {
          50:  '#f7f8fa',
          100: '#eef1f4',
          200: '#dce1e6',
          300: '#c3cbd4',
          400: '#9ea7b3',
          500: '#7a838e',
          600: '#5c636d',
          700: '#454b53',
          800: '#2e3237',
          900: '#1c1f23'
        },
        // Book theme colors
        sidebar: {
          DEFAULT: '#0f2f66',
          dark: '#0a1f44',
          light: '#1655b8'
        },
        book: {
          DEFAULT: '#fff',
          cream: '#f5f3f0',
          paper: '#ffffff',
          dots: '#f7f5f2'
        },
        // Pattern colors
        dots: {
          DEFAULT: '#f44cf7',
          bg: '#fff'
        }
      }
    },
  },
  plugins: [
    typographyPlugin,
  ],
}
