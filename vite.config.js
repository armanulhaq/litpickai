import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        proxy: {
            "/api": {
                target: "https://api.nytimes.com", //When I see /api/..., actually send the request to https://api.nytimes.com/...
                changeOrigin: true, //Changes the Origin header in the request so it looks like it's coming from nytimes.com rather than localhost.
                rewrite: (path) => path.replace(/^\/api/, ""), //if you fetch /api/svc/books/v3/lists/... it gets redirected to https://api.nytimes.com/svc/books/v3/lists/...
            },
        },
    },
});
