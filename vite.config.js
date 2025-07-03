import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [react(), tailwindcss()],
        server: {
            proxy: {
                "/api": {
                    target: "https://api.nytimes.com",
                    changeOrigin: true,
                    rewrite: (path) => {
                        const newPath = path.replace(/^\/api/, "");
                        // Add API key to the URL
                        const separator = newPath.includes("?") ? "&" : "?";
                        return `${newPath}${separator}api-key=${env.VITE_NYT_API_KEY}`;
                    },
                },
            },
        },
    };
});
//I write: fetch('/api/svc/books/v3/lists/current/fiction.json')
//Vite converts to: https://api.nytimes.com/svc/books/v3/lists/current/fiction.json?api-key=MY_KEY
