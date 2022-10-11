import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: {
          100: '#3A53CA',
          50: '#4868FD',
          20: '#7F95FE',
          10: '#C8D2FE',
          5: '#EDF0FF',
        },
      },
      fontFamily: {
        proxima: ['Proxima Nova', 'sans-serif'],
      },
      spacing: {
        1: '1px',
        2: '2px',
      },
      borderRadius: {
        4: '4px',
        6: '6px',
      },
    },
  },
});
