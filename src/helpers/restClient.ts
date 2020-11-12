import axios from 'axios';
import LocalStore from 'store';
import { AUTH_TOKEN } from 'constant';

const connection = (withCredentials = false) => {
  const baseConnection = axios.create({
    withCredentials,
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  baseConnection.interceptors.request.use((config) => {
    const token = LocalStore.get(AUTH_TOKEN) || process.env.REACT_APP_API_GENERIC_TOKEN;
    if (token) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }
    return config;
  });
  return baseConnection;
};

const plainClient = connection();
const secureClient = connection(true);

export { secureClient, plainClient };
