import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan for files with JS/TS extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
