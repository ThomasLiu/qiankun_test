import { defineConfig } from 'umi';

export default defineConfig({
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  base: '/qiankun_test/',
  hash: true,
  ignoreMomentLocale: true,
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/qiankun_test/',
  routes: [{ path: '/', component: '@/pages/index' }],
  qiankun: {
    slave: {},
  },
});
