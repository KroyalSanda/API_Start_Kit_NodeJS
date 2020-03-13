import "dotenv/config";

const devConfig = {
  MONGO_URL: "mongodb://localhost:27017/news",
  JWT_SECRET: process.env.JWT_SECRET || "LeThiMyHanh"
};

const testConfig = {
  MONGO_URL: "mongodb://localhost:27017/api_start_kit_test",
  JWT_SECRET: process.env.JWT_SECRET || "LeThiMyHanh"
};

const prodConfig = {
  MONGO_URL: "mongodb://localhost:27017/api_start_kit_prod",
  JWT_SECRET: process.env.JWT_SECRET || "LeThiMyHanh"
};

const defaultConfig = {
  PORT: process.env.PORT || 3000
};

function envConfig(env) {
  switch (env) {
    case "development":
      return devConfig;
    case "test":
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
};
