import { name } from './package.json';

export default {
  base: name,
  publicPath: '/app2/',
  outputPath: './dist/app2',
  mountElementId: 'app2',
  qiankun: {
    slave: {},
  },
  plugins: ['@umijs/plugin-dva', '@umijs/plugin-antd', '@umijs/plugin-qiankun'],
  // TODO 测试约定式路由下的情况
  routes: [
    {
      path: '/user',
      component: './user',
    },
    {
      path: '/',
      component: './index',
    },
  ],
};
