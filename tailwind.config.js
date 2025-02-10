/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx.tsx}",
    "./wp-templates/**/*.{js,ts,jsx.tsx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        roman: 'upper-roman',
        alpha: 'lower-alpha',
      },
      colors: {
        'deep-teal': 'hsl(var(--color-deep-teal))',
        'bright-cyan': 'hsl(var(--color-bright-cyan))',
        navy: 'hsl(var(--color-navy))',
        lavender: 'hsl(var(--color-lavender))',
        lime: 'hsl(var(--color-lime))',
        ghost: 'hsl(var(--color-ghost))',
        seafoam: 'hsl(var(--color-seafoam))',
        ice: 'hsl(var(--color-ice))',
        snow: 'hsl(var(--color-snow))',
        'deep-blue': 'hsl(var(--color-deep-blue))',
        'smoke-grey': 'hsl(var(--color-smoke-grey))',
        // Semantic Colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'background-lighter': 'hsl(var(--background-lighter))',
        'foreground-lighter': 'hsl(var(--foreground-lighter))',

        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
          foreground: 'hsl(var(--tertiary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      height: {
        header_prelim: 'var(--header-prelim-height)',
        header_main: 'var(--header-main-height)',
        header: 'var(--header-height)',
        inner: 'var(--inner-height)',
      },
      spacing: {
        header: 'var(--header-height)',
        inner: 'var(--inner-height)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3.5rem',
      },
      screens: {
        xs: '460px',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        scroll: 'scroll 20s linear infinite',
        marquee: 'marquee 4s linear infinite',
      },
      backgroundImage: (theme) => ({
        'gradient-triptych-vertical': `linear-gradient(to bottom, ${theme('colors.background-lighter')},${theme('colors.card.DEFAULT')}, ${theme('colors.muted.DEFAULT')},${theme('colors.background-lighter')})`,
        'gradient-triptych-horizontal': `linear-gradient(to left, ${theme('colors.background-lighter')},${theme('colors.card.DEFAULT')}, ${theme('colors.muted.DEFAULT')},${theme('colors.background-lighter')})`,

        'gradient-banner': `linear-gradient(to right, ${theme('colors.muted.DEFAULT')}, ${theme('colors.ghost')})`,
        'gradient-banner-dark': `linear-gradient(to right, ${theme('colors.background')}, ${theme('colors.accent.DEFAULT')})`,
        'gradient-distribution': `linear-gradient(to bottom, ${theme('colors.lavender')}, ${theme('colors.seafoam')}, ${theme('colors.snow')}, ${theme('colors.background')}) bg-no-repeat`,
        'gradient-vertical-bg-ease': `linear-gradient(to bottom, ${theme('colors.background')},${theme('colors.background-lighter')})`,
      }),
    },
  },
  plugins: [],
}

