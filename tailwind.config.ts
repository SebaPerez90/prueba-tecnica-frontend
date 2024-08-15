import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          '100': '#BFACE2',
          '200': '#6C63FF',
          '300': '#655DBB',
          secondary: '#f3f3f3',
          borders: '#ccc',
          'font-100': '#777e87',
          'font-200': '#3c3c43c7',
          'font-300': '#3c3c43',
        },
      },
      boxShadow: {
        top: '0px -3px 15px 0px rgba(0, 0, 0, 0.3)',
        neutral: '0px 0px 30px 0px rgba(0, 0, 0, 0.1)',
        bottom: '0px 3px 15px 0px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
export default config;
