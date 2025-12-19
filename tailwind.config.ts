import type { Config } from "tailwindcss";

export default {
  runtimeConfig: {
    // 仅服务端可用
    databaseUrl: process.env.DATABASE_URL,

    // 客户端 + 服务端都可用
    public: {},
  },
  content: [
    "./app/components/**/*.{vue,js,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', '"Noto Sans SC"', "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "soft-pulse": "soft-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
