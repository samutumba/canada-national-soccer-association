/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
       "./src/*.{js,ts,jsx,tsx}",
       'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#C5281C',
        'secondary': '#D87CAC',
        'matte': '#0A0908',
        'lavender': '#FFF2F1',
        'ghost': '#FFFAFF',
        'cultured': '#F3F3F3',
        'burn': '#7F150E'
      },
      fontFamily: {
        'title': ['Poppins', 'sans-serif'],
        'paragraph': ['Gantari', 'sans-serif'],
        'silly': ['DynaPuff', 'cursive']
      },
      backgroundImage: {
        'crowd': "url('https://media-exp1.licdn.com/dms/image/C4E1BAQGXIKm8MlByww/company-background_10000/0/1646244138409?e=2147483647&v=beta&t=pZC2YFIeKAV7-fPNt7Dn-KyITYiPpry5Hqz8Ahw0-jQ')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
