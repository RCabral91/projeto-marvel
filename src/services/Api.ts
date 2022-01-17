import axios from "axios";

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? '',
});

Api.interceptors.request.use(config => {
  const newConfig = config;

  newConfig.params = {
    ...config.params,
    ts: process.env.REACT_APP_API_TS ?? '',
    apikey: process.env.REACT_APP_API_KEY ?? '',
    hash: process.env.REACT_APP_API_HASH ?? '',
  };

  return newConfig;
});

export default Api;