import { i18n } from '@/translate';
import { Notification } from 'element-ui';

/**
 * Authorization interceptor
 * 
 * @param {any} config 
 * @returns 
 */
export const authInterceptor = (config) => {
  const jwtToken = tokenStorage.getItem('token');
  let _config = config;
  if (jwtToken) _config.headers.Authorization = `Bearer ${jwtToken}`;
  return _config;  
}

export const errorHandlerInterceptor = (error) => {
  const errorMessage = i18n.tc(`http_errors.${error.response ? error.response.status : 500}`);
  Notification.error({
    title: 'Error',
    message: errorMessage,
  });

  return Promise.reject(error);
}