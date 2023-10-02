import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Modelo 3",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '#1' },
      { text: 'Serviços', link: '#2' },
      { text: 'Depoimentos', link: '#3' },
      { text: 'Entre em contato', link: '#4' },
    ],
  }
})
