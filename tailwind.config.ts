import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',    // Example: Deep Blue
        secondary: '#F59E0B',  // Example: Amber
        accent: '#10B981',     // Example: Emerald
        dark: '#111827',       // Example: Slate-900
        light: '#F9FAFB'       // Example: Gray-50
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}

export default config
