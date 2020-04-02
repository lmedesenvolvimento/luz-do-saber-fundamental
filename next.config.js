const externalCSS = require('@zeit/next-css')
module.exports = externalCSS()

const prod = process.env.NODE_ENV === 'production';

module.exports = {
    exportPathMap: () => ({
        '/': { page: '/' },
        '/projeto': { page: '/projeto' },
        '/contact': { page: '/contact' },
    }),
    publicRuntimeConfig: {
        basePath: prod ? '/fundamental-luz-do-saber' : ''
    },
    assetPrefix: prod ? 'https://lmedesenvolvimento.github.io/fundamental-luz-do-saber/' : '',
}