import { authKey } from '@/constants/authKey';
import { instance as axiosInstance } from '@/helpers/axios/axiosInstance';
import { getBaseUrl } from '@/helpers/baseUrl';
import { CustomJwtPayload } from '@/types/common';
import { decodedToken } from '@/utils/jwtDecode';

import { getFromLocalStorage, setToLocalStorage } from '@/utils/localStorage';

export const storeUserInfo = (accessToken: string) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  try {
    const decodedData = decodedToken(authToken as string) as CustomJwtPayload;
    return decodedData;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
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
