module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media",
    theme: {
        fontFamily: {
            sans: "Poppins, sans-serif",
            serif: "Poppins, sans-serif",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
