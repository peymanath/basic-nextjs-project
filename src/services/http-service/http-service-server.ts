import 'server-only';
import { NetworkError } from '@/types/http-errors.interface';
import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { errorHandler } from './http-error-strategies';
import { Auth } from '@/utils/class-auth';
import { API_KEY, API_NAMESPACE, API_URL } from '@/config/global';

type OtherRequest = {
  type?: 'user' | 'admin';
  namespace?: string;
};

const httpService = axios.create({
  headers: {
    'X-API-KEY': API_KEY || '',
    'Content-Type': 'application/json',
  },
});

httpService.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error?.response) {
      const statusCode = error?.response?.status;
      const errorData = error.response.data;
      if (statusCode >= 400) {
        if (statusCode === 401) {
          // Redirect to the login page
          Auth.logoutServer();
        } else {
          // Handle other error codes
          const errorHand = errorHandler[statusCode] || errorHandler[500];
          errorHand(errorData);
        }
      }
      throw errorData;
    } else {
      throw {
        data: { detail: 'خطای شبکه' },
      } as NetworkError;
    }
  }
);

async function wpApiBase<T>(url: string, options?: AxiosRequestConfig & OtherRequest): Promise<T> {
  const tokens = Auth.getTokens();
  const response: AxiosResponse = await httpService(url, {
    baseURL: `${API_URL}/${options?.namespace || API_NAMESPACE}`,
    ...options,
    headers: {
      ...options?.headers,
      ...(!!tokens?.bot_token && !!tokens?.token
        ? {
            Authorization: `Bearer ${options?.type === 'admin' ? tokens.bot_token : tokens.token}`,
          }
        : {}),
    },
  });
  return response.data as T;
}

async function wpReadData<T, ParamType = {}>(
  url: string,
  param?: ParamType,
  headers?: AxiosRequestHeaders,
  init?: OtherRequest
): Promise<T> {
  const options: AxiosRequestConfig = {
    headers: headers,
    method: 'GET',
    params: param,
    ...init,
  };
  return await wpApiBase<T>(url, options);
}

async function wpCreateData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders,
  init?: OtherRequest
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: 'POST',
    headers: headers,
    data: data,
    ...init,
  };

  try {
    const response = await wpApiBase<TResult>(url, options);

    return response;
  } catch (error) {
    throw error;
  }
}

async function wpUpdateData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders,
  init?: OtherRequest
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: 'PUT',
    headers: headers,
    data: JSON.stringify(data),
    ...init,
  };

  return await wpApiBase<TResult>(url, options);
}

async function wpDeleteData(
  url: string,
  headers?: AxiosRequestHeaders,
  init?: OtherRequest
): Promise<void> {
  const options: AxiosRequestConfig & OtherRequest = {
    method: 'DELETE',
    headers: headers,
    ...init,
  };

  return await wpApiBase(url, options);
}

export { wpReadData, wpCreateData, wpUpdateData, wpDeleteData };
