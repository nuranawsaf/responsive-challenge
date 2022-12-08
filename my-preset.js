module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  safelist: [
    {
      pattern:
        /(bg|border|text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(128.88% 128.88% at 90.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)',
      },
      colors: {
        primary: '#373F68',
        primaryLight: '#656EA3',
        secondary: '#AD1FEA',
        secondaryLight: '#C75AF6',
        tertiary: '#4661E6',
        tertiaryLight: '#7C91F9',
        orange: '#D73737',
        orangeLight: '#E98888',
        orangenormal: '#F49F85',
        yellow: '#FBB57A',
        skyBlue: '#7AD8FB',
        darkLight: '#F7F8FD',
      },
      fontFamily: {
        jost: 'Jost',
      },
    },
  },
  variants: {},
  plugins: [],
};
