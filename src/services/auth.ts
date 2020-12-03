import { secureClient, plainClient } from 'helpers/restClient';
import { AUTH_TOKEN } from 'constant';
import LocalStore from 'helpers/localStore';

export interface LoginReq {
  email: string;
  password: string;
}

export interface RegisterReq {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
}

interface TokenResponse {
  token: string;
}

export const authLogin = async (data: LoginReq) => {
  try {
    const {
      data: { token },
    } = await plainClient.post<TokenResponse>('/signin', data);
    if (!token) {
      throw new Error('Authenication Failed!');
    }
    LocalStore.set(AUTH_TOKEN, token);
    return true;
  } catch (error) {
    LocalStore.remove(AUTH_TOKEN);
    throw new Error('Authenication Failed!');
  }
};

export const authRegister = async (data: RegisterReq) => {
  try {
    const {
      data: { token },
    } = await plainClient.post<TokenResponse>('/signup', data);
    if (!token) {
      throw new Error('Authenication Failed!');
    }
    LocalStore.set(AUTH_TOKEN, token);
    return token;
  } catch (error) {
    LocalStore.remove(AUTH_TOKEN);
    throw new Error('Authenication Failed!');
  }
};

export const refreshToken = async () => {
  try {
    const {
      data: { token },
    } = await secureClient.post<TokenResponse>('/refresh');
    if (!token) {
      throw new Error('Authenication Failed!');
    }
    LocalStore.set(AUTH_TOKEN, token);
    return token;
  } catch (error) {
    LocalStore.remove(AUTH_TOKEN);
    throw new Error('Authenication Failed!');
  }
};

export function logout() {
  LocalStore.remove(AUTH_TOKEN);
}
