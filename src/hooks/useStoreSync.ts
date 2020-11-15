import { useEffect } from 'react';
import { AUTH_TOKEN } from 'constant';
import jwt from 'jwt-decode';
import { useGlobalStore, ActionConstantType, UserTokenType } from 'stores/globalStore';
import LocalStore from 'helpers/localStore';

export default function UseGlobalSync() {
  const { dispatch } = useGlobalStore();
  useEffect(() => {
    const userCredentialHandler = (token?: string) => {
      try {
        const user = jwt(token || '') as UserTokenType;
        if (token && user) {
          dispatch({ type: ActionConstantType.SET_USER_DATA, payload: { role: user.role, loggedIn: true } });
        } else {
          throw new Error();
        }
      } catch (err) {
        dispatch({ type: ActionConstantType.SET_USER_DATA, payload: { role: null, loggedIn: false } });
      }
    };
    LocalStore.subscribe(AUTH_TOKEN, userCredentialHandler);
    return () => {
      LocalStore.unsubscribe(AUTH_TOKEN, userCredentialHandler);
    };
  }, [dispatch]);
}
