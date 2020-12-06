import { useState, useCallback } from 'react';
import { authRegister, RegisterReq } from 'services/auth';
import { message } from 'antd';

function useRegister() {
  const [loading, setLoading] = useState(false);
  const register = useCallback(async (data: RegisterReq, onSuccess: () => void = () => {}) => {
    setLoading(true);
    try {
      await authRegister(data);
      onSuccess();
      setLoading(false);
    } catch (err) {
      message.error(err.message);
      setLoading(false);
    }
  }, []);
  return [loading, register] as const;
}

export default useRegister;
