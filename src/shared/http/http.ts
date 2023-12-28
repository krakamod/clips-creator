import axios from 'axios';
import { type HttpInstance } from './HttpInstance';

interface CreateHttpInstanceParams {
  baseURL?: string;
  timeout?: number;
}

const createHttpInstance = ({
  baseURL,
  timeout = 15000,
}: CreateHttpInstanceParams): HttpInstance => {
  const http: HttpInstance = axios.create({
    baseURL,
    timeout,
  });

  return http;
};

export default createHttpInstance;
