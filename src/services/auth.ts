import { secureClient, plainClient } from 'helpers/restClient';
import LocalStore from 'store';
import { AUTH_TOKEN } from 'constant';

export interface LoginReq {
  email: string;
  password: string;
}
interface TokenResponse {
  token: string;
}
// export const authSignup = data => {
//   const success = response => {
//     if (!response.data.csrf) {
//       failure(response);
//     } else {
//       localStorage.csrf = response.data.csrf;
//       localStorage.setItem('signedIn', 'true');
//     }
//   };

//   const failure = error => {
//     delete localStorage.csrf;
//     delete localStorage.signedIn;
//     console.log('ERR', error);
//   };

//   signup(data)
//     .then(response => success(response))
//     .catch(error => failure(error));
// };

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
