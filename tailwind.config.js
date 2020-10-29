module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  experimental: {
    additionalBreakpoint: true,
    applyComplexClasses: true,
    extendedFontSizeScale: true,
    extenedSpacingScale: true,
  },
  // nuxt tailwind handles this by default so no need to configure
  purge: [],
  theme: {
    extend: {
      colors: {
        // main
        'app-green-1': '#4dff64',
        // main
        'app-gray-1': '#1a1a1a',
        // secondary
        'app-gray-2': '#222222',
        // contact form text
        'app-gray-3': '#606060',
      },
      fontFamily: {
        hibana: ['Hibana', 'Roboto', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
