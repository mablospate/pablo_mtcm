import { fontFamily } from "tailwindcss/defaultTheme";
import typography from '@tailwindcss/typography';

export default {
  theme: {
    extend: {
      fontFamily: {
        neuton: ["Neuton", ...fontFamily.serif],
      },
    },
  },
  plugins: [typography()],
};