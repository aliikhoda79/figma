/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    
    extend: {
      fontFamily:{
        roboto:["roboto"],
        med:["robm"],
      },
    
    
      backgroundColor:{
        "primary-blue":"#1d2130",

        "primary-green":"#70C174",
        "back-green":"#EFF7F2",

        
      }

    },
  },
  plugins: [require("daisyui")],
}

