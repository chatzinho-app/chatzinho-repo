module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindFunctions: [
    'clsx',
    'twMerge',
    'cn',
    'cva',
    'class-variance-authority',
  ],
}
