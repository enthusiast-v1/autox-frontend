import { authKey } from '@/constants/authKey';
import { instance as axiosInstance } from '@/helpers/axios/axiosInstance';
import { getBaseUrl } from '@/helpers/baseUrl';
import { decodedToken } from '@/utils/jwtDecode';

import { getFromLocalStorage, setToLocalStorage } from '@/utils/localStorage';
import { JwtPayload } from 'jwt-decode';

export const storeUserInfo = (accessToken: string) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const decodedData: JwtPayload = decodedToken(authToken);
    return decodedData;
  } else {
    return '';
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${getBaseUrl()}/auth/refresh-token`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });
};
