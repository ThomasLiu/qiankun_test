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
  base: '/dumi_test/',
  hash: true,
  ignoreMomentLocale: true,
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/dumi_test/',
  routes: [{ path: '/', component: '@/pages/index' }],
});
