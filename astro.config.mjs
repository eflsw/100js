import { defineConfig, fontProviders } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    site: "https://100jsw.vercel.app",
    devToolbar: {
        enabled: false
    },
    vite: {
        plugins: [tailwindcss()]
    },
    fonts: [
        {
            provider: fontProviders.local(),
            name: "Onest",
            cssVariable: "--font-sans",
            weights: [400, 500, 600],
            fallbacks: ["system-ui", "sans-serif"],
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/Onest.woff2"],
                        style: "normal"
                    }
                ]
            }
        },
        {
            provider: fontProviders.local(),
            name: "Geist Mono",
            cssVariable: "--font-mono",
            weights: [400, 500, 600],
            fallbacks: ["ui-monospace", "monospace"],
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/GeistMono.woff2"],
                        style: "normal"
                    }
                ]
            }
        }
    ]
})
