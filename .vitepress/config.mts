import { DefaultTheme, defineConfig } from 'vitepress'

const sidebars = (): DefaultTheme.SidebarItem[] => [
  {
    text: 'コンセプト',
    collapsed: true,
    items: [
      { text: 'モチベーション', link: '/docs/concept' },
      { text: 'アーキテクチャ', link: '/docs/architecture' },
    ],
  },
  {
    text: 'Getting Started',
    collapsed: true,
    items: [{ text: 'インストール', link: '/docs/getting-started' }],
  },
]

const sidebarsExamples = (): DefaultTheme.SidebarItem[] => [
  {
    text: 'Examples',
    collapsed: true,
    items: [
      { text: 'Markdown Examples', link: '/docs/markdown-examples' },
      { text: 'Runtime API Examples', link: '/example/api-examples' },
    ],
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Headless VPL',
  description: 'VPLを爆速で開発',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Docs', link: '/docs' },
      { text: 'Examples', link: '/example' },
    ],

    sidebar: {
      '/docs/': sidebars(),
      '/example/': sidebarsExamples(),
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/orgs/headless-vpl/dashboard',
      },
    ],
  },
})
