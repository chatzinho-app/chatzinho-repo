/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      // WHITE COLORS
      white: '#FFFFFF',
      'white-blue': '#F2F5FF',
      'white-gray': '#F4F5F6',
      // GRAY COLORS
      gray: '#AAB3C3',
      'light-gray': '#D9D9D9',
      'dark-gray': '#2B3241',
      // GREEN COLORS
      green: '#00A286',
      'light-green': '#00C19F',
      // BLUE COLORS
      blue: '#4A72FF',
      'dark-blue': '#2C6CD6',
      'light-blue': '#B4C4FF',
      // TEXT COLORS
      black: '#000000',
      // STATUS COLORS
      error: '#FF574D',
      success: '#00A286',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      sm: '0.625rem', // 10
      base: '0.75rem', // 12
      xl: '0.875rem', // 14
      '2xl': '1rem', // 16
      '3xl': '1.125rem', // 18
      '4xl': '1.5rem', // 24
      '5xl': '1.75rem', // 28
    },
    spacing: {
      0: '0',
      0.5: '0.313rem', // xs
      1: '0.625rem', // sm
      1.5: '0.69rem', // sm
      2: '0.938rem', // md
      3: '1.25rem', // lg
      4: '1.563rem', // xl
      5: '1.875rem', // 2xl
      6: '2.5rem', // 3xl
      7: '3.125rem', // 4xl
      8: '3.75rem', // 5xl
    },
    borderRadius: {
      sm: '0.625rem',
      md: '0.938rem',
      lg: '1.25rem',
      full: '9999px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
}
