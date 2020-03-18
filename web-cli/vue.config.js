// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '^/data': {
                target: 'http://localhost:3000',
                changeOrigin: true
            },
        }
    },
}