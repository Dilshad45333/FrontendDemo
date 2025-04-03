const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = mergeConfig(getDefaultConfig(__dirname), {
  server: {
    enhanceMiddleware: (middleware, server) => {
      return (req, res, next) => {
        if (req.url.startsWith('/api')) {
          req.url = `https://802f-202-142-122-97.ngrok-free.app${req.url}`;
        }
        return middleware(req, res, next);
      };
    }
  }
});
