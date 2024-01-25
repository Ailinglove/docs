import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '码上记录',
  description:
    '这里记录了日常工作中见到的有趣的东西，包括但不限于代码、好用的网址...',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '记录', link: '/docs/项目/小程序' },
      { text: 'interview', link: '/interview/JavaScript' },
    ],
    sidebar: {
      '/docs': [
        {
          text: '项目',
          items: [
            { text: '小程序', link: '/docs/项目/小程序' },
            { text: '圆环倒计时', link: '/docs/项目/倒计时圆环' },
          ],
        },
        {
          text: 'Vue',
          items: [
            { text: '项目生成器', link: '/docs/项目/项目生成器' },
            { text: '从0开始写一个v-loading指令', link: '/docs/Vue/指令' },
            {
              text: '从0开始写一个vite插件',
              link: '/docs/Vue/consolePlugin插件',
            },
            { text: '抽象语法树', link: '/docs/Vue/抽象语法树AST' },
            { text: 'webpack', link: '/docs/Vue/webpack' },
            { text: 'css扩展器', link: '/docs/Vue/css扩展器' },
          ],
        },
        {
          text: '配置',
          items: [
            { text: '环境配置', link: '/docs/配置/环境配置' },
            { text: '其他', link: '/docs/配置/其他' },
            { text: 'git', link: '/docs/配置/git指令' },
          ],
        },
        {
          text: '问题解决',
          items: [{ text: '问题', link: '/docs/问题解决/READEME' }],
        },
      ],
      '/interview/': [
        {
          text: 'interview',
          items: [
            { text: 'JavaScript', link: '/interview/JavaScript' },
            { text: 'CSS', link: '/interview/CSS' },
          ],
        },
      ],
    },
    rewrites: {
      'interview/(.*)': ':pkg/基础.md',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
