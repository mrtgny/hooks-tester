const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

    app.use(
        '/api',
        createProxyMiddleware({
            target: `http://192.168.1.47:5000`,
            changeOrigin: true,
        })
    );
};
