const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/DaWonCar',
    createProxyMiddleware({
      target: 'http://localhost:8080',  // 여기에 백엔드 서버의 주소를 입력합니다.
      changeOrigin: true,
    })
  );
  // app.use(
  //   '/list',
  //   createProxyMiddleware({
  //     target: 'http://localhost:8080',  // 여기에 백엔드 서버의 주소를 입력합니다.
  //     changeOrigin: true,
  //   })
  // );
  app.use(
    '/IMG',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  )
};