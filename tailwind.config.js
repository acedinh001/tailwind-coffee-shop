/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                kalar: ['Karla', 'sans-serif']
            },
            colors: {
                coffee: {
                    50: '#E8D6D0',
                    200: '#c89f94',
                    400: '#a25f4b',
                    600: '#744838'
                }
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
