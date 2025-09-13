// server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// The site you want to proxy
const TARGET_URL = process.env.TARGET_URL || 'https://httpbin.org';

app.use('/', createProxyMiddleware({
    target: TARGET_URL,
    changeOrigin: true,
    pathRewrite: { '^/': '/' },
}));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}, forwarding to ${TARGET_URL}`);
});
