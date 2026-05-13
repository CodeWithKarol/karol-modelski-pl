import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Karol Modelski – Automatyzacja procesów biznesowych",
    short_name: "Karol Modelski",
    description:
      "Wdrażam automatyzacje n8n i Google Gemini eliminujące ręczną pracę Twojego zespołu.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
