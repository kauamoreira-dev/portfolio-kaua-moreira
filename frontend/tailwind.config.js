/** @type {import('tailwindcss').Config} */
module.exports = {
    // `overline` is a Tailwind utility; without this an app's own eyebrow-label class draws a line above the text.
    blocklist: ["overline"],
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                ink: {
                    DEFAULT: "#0B0E17",
                    soft: "#0F1320",
                    card: "#111625",
                    raise: "#161D30",
                },
                accent: {
                    DEFAULT: "#2563EB",
                    light: "#3B82F6",
                    cyan: "#00D2FF",
                },
                line: "rgba(255,255,255,0.08)",
            },
            fontFamily: {
                display: ["Syne", "sans-serif"],
                sans: ["Plus Jakarta Sans", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
