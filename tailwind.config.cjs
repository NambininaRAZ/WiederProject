/** @type {import('tailwindcss').Config} */
module.exports = async () => {
  const daisyui = (await import('daisyui')).default

  return {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [daisyui],
  }
}
