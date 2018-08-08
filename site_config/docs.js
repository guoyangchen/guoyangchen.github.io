export default {
  'en-us': {
    sidemenu: [
      {
        title: 'Documentation',
        children: [
          {
            title: 'Goal',
            link: '/docs/goal.md',
          },
          {
            title: 'Contents',
            link: '/docs/contents.md',
          },
          {
            title: 'Metrics',
            link: '/docs/metrics.md',
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '大标题',
        children: [
          {
            title: '示例1',
            link: '/docs/demo1.md',
          },
          {
            title: '示例2',
            link: '/docs/demo2.md',
          },
          {
            title: '目录',
            opened: true,
            children: [
              {
                title: '示例3',
                link: '/docs/dir/demo3.md',
              },
            ],
          },
        ],
      },
    ],
    barText: '文档',
  }
};
