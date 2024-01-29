import { NetworkError, ApiError } from '@/types';
import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { errorHandler } from './http-error-strategies';

const httpService = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const apiNamespace = `/api`;

httpService.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error?.response) {
      const statusCode = error?.response?.status;
      if (statusCode >= 400) {
        const errorData: ApiError = error.response?.data;
        const errorHand = errorHandler[statusCode] || errorHandler[500];
        errorHand(errorData);
      }
    } else {
      throw {
        data: { detail: 'خطای شبکه' },
      } as NetworkError;
    }
  }
);

async function apiBase<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
  const response: AxiosResponse = await httpService(url, { ...options, baseURL: '/' });
  return response.data as T;
}

async function readData<T, ParamType = {}>(
  url: string,
  param?: ParamType,
  headers?: AxiosRequestHeaders
): Promise<T> {
  const options: AxiosRequestConfig = {
    headers: headers,
    method: 'GET',
    params: param,
  };
  return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: 'POST',
    headers: headers,
    data: data,
  };

  return await apiBase<TResult>(url, options);
}

async function updateData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: 'PUT',
    headers: headers,
    data: JSON.stringify(data),
  };

  return await apiBase<TResult>(url, options);
}

async function deleteData(url: string, headers?: AxiosRequestHeaders): Promise<void> {
  const options: AxiosRequestConfig = {
    method: 'DELETE',
    headers: headers,
  };

  return await apiBase(url, options);
}

export { createData, readData, updateData, deleteData };
