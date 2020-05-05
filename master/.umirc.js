export default {
  proxy: {
    '/api/app1': {
      target: 'http://localhost:8001',
      changeOrigin: true,
    },
    '/api/app2': {
      target: 'http://localhost:8002',
      changeOrigin: true,
    },
    '/api/app3': {
      target: 'http://localhost:8003',
      changeOrigin: true,
    },
  },
  qiankun: {
    master: {
      defer: true,
      jsSandbox: true,
      prefetch: true,
    },
  },
  plugins: ['@umijs/plugin-dva', '@umijs/plugin-antd', '@umijs/plugin-qiankun'],
  devtool: 'source-map',
};
