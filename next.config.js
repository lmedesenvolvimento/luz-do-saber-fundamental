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
        basePath: prod ? '/luz-do-saber-fundamental' : ''
    },
    assetPrefix: prod ? 'https://lmedesenvolvimento.github.io/luz-do-saber-fundamental/' : '',
}