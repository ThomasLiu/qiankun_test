export default {
  base: '/app1',
  publicPath: '/app1/',
  outputPath: './dist/app1',
  mountElementId: 'app1',
  qiankun: {
    slave: {},
  },
  plugins: ['@umijs/plugin-dva', '@umijs/plugin-antd', '@umijs/plugin-qiankun'],
};
