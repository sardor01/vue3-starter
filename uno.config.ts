import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'Proxima Nova',
        garamond: 'Garamond',
      },
    }),
  ],
  theme: {
    breakpoints: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      cblue: {
        DEFAULT: '#3b96e1',
        dark: '#133654',
      },
      cgreen: '#44BB49',
      cgrey: '#edf1f4',
      cred: '#e03730',
      cyellow: '#fdc017',
    },
  },
})
