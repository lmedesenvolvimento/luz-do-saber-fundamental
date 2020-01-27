const externalCSS = require('@zeit/next-css')
module.exports = externalCSS()

const prod = process.env.NODE_ENV === 'production';

module.exports = {
    exportPathMap: () => ({
        '/': { page: '/' },
        '/contact': { page: '/contact' },
    }),
    assetPrefix: prod ? 'https://lmedesenvolvimento.github.io/fundamental-luz-do-saber/' : '',
}