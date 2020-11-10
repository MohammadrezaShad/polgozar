import axios from 'axios';
import LocalStore from 'store';

const connection = (withCredentials = false) => {
  const baseConnection = axios.create({
    withCredentials,
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  baseConnection.interceptors.request.use((config) => {
    const token = LocalStore.get('token') || process.env.REACT_APP_API_GENERIC_TOKEN;
    if (token) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }
    console.log(config, 'configconfigconfigconfig');
    return config;
  });
  return baseConnection;
};

const plainClient = connection();
const secureClient = connection(true);

export { secureClient, plainClient };
