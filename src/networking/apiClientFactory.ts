// src/api/apiClientFactory.ts
import axios, {AxiosInstance} from 'axios';
import {attachRequestInterceptor} from './RequestInterceptor';
import {attachResponseInterceptor} from './ResponseInterceptor';

export interface CreateApiClientOptions {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export const createApiClient = ({
  baseURL,
  timeout = 100000,
  headers = {'Content-Type': 'application/json'},
}: CreateApiClientOptions): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout,
    headers,
  });

  attachRequestInterceptor(instance);
  attachResponseInterceptor(instance);

  return instance;
};
