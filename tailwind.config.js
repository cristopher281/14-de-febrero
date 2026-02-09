/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'soft-pink': '#FFD1DC',
                'soft-pink-dark': '#E6B2C0',
                'gold': '#FFD700',
                'gold-light': '#FCE682',
                'text-dark': '#3D3D3D',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
                magic: ['"Cinzel"', 'serif'],
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
