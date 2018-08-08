// 全局的一些配置，包括页面顶部导航栏和页面底部的一些配置
export default {
  defaultLanguage: 'en-us',
  'en-us': {
    pageMenu: [
      {
        text: 'HOME',
        link: '/',
      },
      {
        text: 'DOCS',
        link: '/docs/demo1.md',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'the disclaimer content',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Goals',
          link: '/docs/goals.md',
        },
        {
          text: 'Contents',
          link: '/docs/contents.md',
        },
        {
          text: 'Metrics',
          link: '/docs/metrics.md',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/blog',
        },
        {
          text: 'Community',
          link: '/community',
        },
      ],
    },
    copyright: 'Copyright © 2018 Alibaba',
  },
  'zh-cn': {
    pageMenu: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文档',
        link: '/docs/demo1.md',
      },
    ],
    disclaimer: {
      title: '免责声明',
      content: '免责声明的具体内容',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '目标',
          link: '/docs/goals.md',
        },
        {
          text: '内容',
          link: '/docs/contents.md',
        },
        {
          text: '标准',
          link: '/docs/metrics.md',
        }
      ]
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '博客',
          link: '/blog',
        },
        {
          text: '社区',
          link: '/community',
        }
      ]
    },
    copyright: 'Copyright © 2018 Alibaba'
  }
};
