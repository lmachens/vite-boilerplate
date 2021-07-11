const dotenv = require('dotenv');
dotenv.config();

const { createProxyMiddleware } = require('http-proxy-middleware');

const { PORT = 3001 } = process.env;

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://localhost:${PORT}`,
      changeOrigin: true,
    })
  );
};
