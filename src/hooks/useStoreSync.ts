import { useEffect } from 'react';
import { AUTH_TOKEN } from 'constant';
import jwt from 'jwt-decode';
import { loggedInState, userRole, UserTokenType } from 'cache';
import LocalStore from 'helpers/localStore';

export default function UseGlobalSync() {
  useEffect(() => {
    const userCredentialHandler = (token?: string) => {
      try {
        const user = jwt(token || '') as UserTokenType;
        if (token && user) {
          loggedInState(true);
          userRole(user.role);
        } else {
          throw new Error();
        }
      } catch (err) {
        loggedInState(false);
        userRole(null);
      }
    };
    LocalStore.subscribe(AUTH_TOKEN, userCredentialHandler);
    return () => {
      LocalStore.unsubscribe(AUTH_TOKEN, userCredentialHandler);
    };
  }, []);
}
