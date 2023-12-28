/* eslint-disable @typescript-eslint/promise-function-async */
import { type ApiInstance } from './IApi';
import createOutro from './createOutro';

const BrandKitApiInstance: ApiInstance = (
  http,
) => ({
  createOutro: (...params) => createOutro(http, ...params),
});

export default BrandKitApiInstance;
