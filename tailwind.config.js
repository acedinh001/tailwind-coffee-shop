/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                kalar: ['Karla', 'sans-serif']
            },
            colors: {
                'light-coffee': '#c89f94'
            },
            keyframes: {
                slideDown: {
                    '0%': { transform: 'translateY(-10px)' },
                    '190%': { transform: 'translateY(0)' }
                }
            },
            animation: {
                slideDown: 'slideDown .4s ease-in-out'
            }
        }
    },
    plugins: []
}
