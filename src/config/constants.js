const devConfig = {
  MONGO_URL: 'mongodb://localhost:27017/api_start_kit',
  JWT_SECRET: 'LeThiMyHanh',
};

const testConfig = {
  MONGO_URL: 'mongodb://localhost:27017/api_start_kit_test'
};

const prodConfig = {
  MONGO_URL: 'mongodb://localhost:27017/api_start_kit_prod'
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};