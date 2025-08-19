import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'], // можно оставить; мы используем единый тёмный стиль через :root
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        /* Привязка к CSS‑переменным из index.css */
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card:      { DEFAULT: 'var(--card)',      foreground: 'var(--foreground)' },
        popover:   { DEFAULT: 'var(--popover)',   foreground: 'var(--foreground)' },
        primary:   { DEFAULT: 'var(--primary)',   foreground: 'var(--primary-foreground)' },
        secondary: { DEFAULT: 'var(--secondary)', foreground: 'var(--secondary-foreground)' },
        muted:     { DEFAULT: 'var(--muted)',     foreground: 'var(--foreground)' },
        accent:    { DEFAULT: 'var(--accent)',    foreground: 'var(--accent-foreground)' },
        destructive: { DEFAULT: 'var(--destructive)', foreground: 'var(--destructive-foreground)' },
        border: 'var(--border)',
        input:  'var(--input)',
        ring:   'var(--ring)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      /* Анимации от tailwindcss-animate уже подключены плагином */
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate],
  safelist: [
    /* страхуем часто используемые классы от purge */
    'bg-primary', 'text-primary', 'border-primary',
    'bg-secondary', 'text-secondary',
    'bg-accent', 'text-accent',
    'bg-background', 'text-foreground',
    'border-border',
  ],
}

export default config
