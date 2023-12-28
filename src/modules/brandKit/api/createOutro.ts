import { type HttpInstance } from '@shared/http';
import { baseUrl } from './constants';
import { type IWIPBrandKitOutro } from '../IBrandKit';

const createBrandKitOutro = async (
  http: HttpInstance,
  wipBrandKitOutro: IWIPBrandKitOutro,
): Promise<void> => {
  await http.post(
    `/${baseUrl}/outro`,
    {
      name: wipBrandKitOutro.name,
      callToAction: wipBrandKitOutro.callToAction,
    },
  );
};

export default createBrandKitOutro;
