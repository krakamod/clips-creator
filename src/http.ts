import { createHttpInstance } from '@shared/http';

const http = createHttpInstance({
  baseURL: 'http://localhost:3000',
});

export default http;
