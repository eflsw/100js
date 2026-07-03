import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    site: "https://100jsw.vercel.app",
    devToolbar: {
        enabled: false
    },
    vite: {
        plugins: [tailwindcss()]
    }
})
