// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RequestPayload = any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Response<T = any> {
  data: T;
  status: number;
  headers: Record<string, string>;
}

interface Options {
  params?: Record<string, string | number | boolean | undefined>;
  headers?: Record<string, string | number | boolean>;
  responseType?: 'blob';
}

export interface HttpInstance {
  get: <R>(
    url: string,
    options?: Options,
  ) => Promise<Response<R>>;
  post: <R>(
    url: string,
    data?: RequestPayload,
    options?: Options,
  ) => Promise<Response<R>>;
  put: <R>(
    url: string,
    data: RequestPayload,
    options?: Options,
  ) => Promise<Response<R>>;
  delete: <R>(
    url: string,
    options?: Options,
  ) => Promise<Response<R>>;
}
