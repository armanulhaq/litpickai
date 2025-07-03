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
                    //proxy rule for any request that starts with /api
                    target: "https://api.nytimes.com", //When a request matches /api, send it to the New York Times API server.
                    changeOrigin: true, //Make the request look like it’s coming from the target (NYT) server, not from your local dev server. This helps avoid CORS issues.
                    rewrite: (path) => {
                        const newPath = path.replace(/^\/api/, ""); //Remove /api from the start of the path.
                        const separator = newPath.includes("?") ? "&" : "?"; //Decide whether to use ? or & to add the API key, depending on whether the URL already has query parameters.
                        return `${newPath}${separator}api-key=${env.VITE_NYT_API_KEY}`;
                    },
                },
            },
        },
    };
});
// write: fetch('/api/svc/books/v3/lists/current/fiction.json')
//Vite converts to: https://api.nytimes.com/svc/books/v3/lists/current/fiction.json?api-key=MY_KEY
