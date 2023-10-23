import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '项目', link: '/docs/项目/小程序' },
      { text: 'tools', link: '/docs/配置/环境配置' },
    ],
    sidebar: [
      {
        text: '项目',
        items: [
          { text: '小程序', link: '/docs/项目/小程序' },
          { text: '项目生成器', link: '/docs/项目/项目生成器' },
          { text: '圆环倒计时', link: '/docs/项目/倒计时圆环' },
          { text: 'bug', link: '/docs/项目/bug' },
        ]
      },
      {
        text: '配置',
        items: [
          { text: '环境配置', link: '/docs/配置/环境配置' },
          { text: '其他', link: '/docs/配置/其他' },
          { text: '部署', link: '/docs/配置/部署' },
          { text: 'git', link: '/docs/配置/git指令' },

        ]
      },
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
