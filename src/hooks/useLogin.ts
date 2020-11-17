import { useState, useCallback } from 'react';
import { authLogin, LoginReq } from 'services/auth';
import { message } from 'antd';

function useLogin() {
  const [loading, setLoading] = useState(false);
  const login = useCallback(async (data: LoginReq, onSuccess: () => void = () => {}) => {
    setLoading(true);
    try {
      await authLogin(data);
      onSuccess();
      setLoading(false);
    } catch (err) {
      message.error(err.message);
      setLoading(false);
    }
  }, []);
  return [loading, login] as const;
}

export default useLogin;
