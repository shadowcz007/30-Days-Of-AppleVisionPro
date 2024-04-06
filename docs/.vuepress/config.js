import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // URL
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'https://github.com/shadowcz007/30-Days-Of-AppleVisionPro',
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      // NavbarGroup
      {
        text: 'youtube',
        link:'/video/'
      },
      '/about/README.md',
    ],
  }),

  lang: 'zh-CN',
  title: '你好， VisionPro ！',
  description: '这是我的第一个 VisionPro 站点',
})
