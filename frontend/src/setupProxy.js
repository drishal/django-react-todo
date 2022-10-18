 const { createProxyMiddleware } = require('http-proxy-middleware');

 module.exports = function(app) {
   app.use(
     '/api/todos/',
     createProxyMiddleware({
       //target: 'http://127.0.0.1:8000',
       // target: 'http://:8000',
       target: 'https://django-drishal.cloud.okteto.net',
       changeOrigin: true,
     })
   );
 };
