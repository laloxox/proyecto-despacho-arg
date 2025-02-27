/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'morph': 'morph 8s ease-in-out infinite',
				'float': 'float 12s ease-in-out infinite',
				'gradient': 'gradient 8s linear infinite',
				'reveal': 'reveal 1.5s cubic-bezier(0.2, 1, 0.3, 1)',
				'slide': 'slide 1s cubic-bezier(0.2, 1, 0.3, 1)',
				'scale': 'scale 1s cubic-bezier(0.2, 1, 0.3, 1)',

				slide: "slide 2.8s linear infinite",
			},
			keyframes: {
				morph: {
					'0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
					'50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0) scale(1)' },
					'50%': { transform: 'translateY(-20px) scale(1.05)' }
				},
				gradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				},
				reveal: {
					'0%': { transform: 'translateY(20px)', opacity: 0 },
					'100%': { transform: 'translateY(0)', opacity: 1 }
				},
				slide: {
					'0%': { transform: 'translateX(-20px)', opacity: 0 },
					'100%': { transform: 'translateX(0)', opacity: 1 }
				},
				scale: {
					'0%': { transform: 'scale(0.95)', opacity: 0 },
					'100%': { transform: 'scale(1)', opacity: 1 }
				},
				slide: {
					"0%": { transform: "translateY(100%)", opacity: 0.1 },
					"15%": { transform: "translateY(0)", opacity: 1 },
					"30%": { transform: "translateY(0)", opacity: 1 },
					"45%": { transform: "translateY(-100%)", opacity: 1 },
					"100%": { transform: "translateY(-100%)", opacity: 0.1 },
				},
			}
		},
	},
	plugins: [],
}
