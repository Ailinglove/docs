module.exports = {
  title: '栗子🌰app',
  description: '栗子🌰app',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'GSAP', link: '/gsap/' },
      { text: '栗子🌰app', link: 'https://github.com/zhaoqize/lizi-app' },
    ],
    sidebarDepth: 0,
    sidebar: {
      "/gsap/":[
        {
          title: '初识GSAP', // 侧边栏显示的标题
          path: '/gsap/初识gsap.md', // 实际路径
        },
        {
          title: '你的第一个动画', // 侧边栏显示的标题
          path: '/gsap/你的第一个动画.md', // 实际路径
        },
      ],
    }
  }
}