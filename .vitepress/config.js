import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'docs', link: '/docs/配置/环境配置' }
    ],

    sidebar: [
      {
        text: '配置',
        items: [
          { text: '环境配置', link: '/docs/配置/环境配置' },
          { text: '其他', link: '/docs/配置/其他' },

          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
