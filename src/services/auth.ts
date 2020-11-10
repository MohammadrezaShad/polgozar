import { secureClient, plainClient } from 'helpers/restClient';
import { AxiosResponse } from 'axios';
import LocalStore from 'store';

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
    LocalStore.set('token', token);
    return true;
  } catch (error) {
    throw new Error('Authenication Failed!');
  }
};

export const refreshToken = () => {
  const success = (response: AxiosResponse<TokenResponse>) => {
    const { token } = response.data;
    if (!token) {
      failure(response);
    } else {
      LocalStore.set('token', token);
    }
  };
  const failure = (error: any) => {
    console.log('ERR', error);
    LocalStore.remove('token');
  };

  secureClient
    .post<TokenResponse>('/refresh')
    .then((response) => success(response))
    .catch((error) => failure(error));
};
