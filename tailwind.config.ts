import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
    },
    extend: {
      keyframes: {
        slideOut: {
          'from': { opacity: '0', transform: "translateX(-100%)", zIndex: "-1" },
          'to': { opacity: '1', transform: "translateX(0)",zIndex: "10" },
        },
        slideIn: {
          'from': { opacity: '1', transform: "translateX(0)", zIndex: "10" },
          'to': { opacity: '0',transform: "translateX(-100%)", zIndex: "-1" },
        },
        backdropOut: {
          'from': { opacity: '0', zIndex: "-1" },
          'to': { opacity: '1',zIndex: "5" },
        },
        backdropIn: {
          'from': { opacity: '1', zIndex: "5" },
          'to': { opacity: '0', zIndex: "-1" },
        }
      },
      animation: {
        slideIn: 'slideIn .25s ease-in-out',
        slideOut: 'slideOut .25s ease-in-out',
        backdropIn: 'backdropIn .5s ease-in-out',
        backdropOut: 'backdropOut .5s ease-in-out',
      },
      backgroundImage: {
        'subscription-paywall-background': "url('https://images.yourstory.com/cs/images/the-captable/article/subscription_paywall_bgv1.png')",
        'subscription-paywall-background-mobile': "url('https://images.yourstory.com/cs/images/the-captable/article/subscription_paywall_bg_mobile.png')",
      },
    },
  },
  plugins: [],
};
export default config;
