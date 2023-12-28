import { type HttpInstance } from '@shared/http';
import { type IWIPBrandKitOutro } from '../IBrandKit';

export interface IBrandKitApi {
  createOutro: (
    wipBrandKitOutro: IWIPBrandKitOutro,
  ) => Promise<void>;
}

export type ApiInstance = (
  http: HttpInstance,
) => IBrandKitApi;
