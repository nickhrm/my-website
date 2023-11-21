import type { Config } from 'tailwindcss'

const preline = require('preline/plugin.js');


const config: Config = {
  content: [
    'node_modules/preline/dist/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
export default config
