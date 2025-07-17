const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/wurrd.github.io' : '',
  assetPrefix: isProd ? '/wurrd.github.io/' : '',
};