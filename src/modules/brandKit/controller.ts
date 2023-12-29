import { useMemo, useState } from 'react';

import http from '../../http';
import { Api, type IBrandKitApi } from './api';
import { type IWIPBrandKitOutro } from './IBrandKit';

export enum Status {
  Idle = 'idle',
  Pending = 'pending',
  Success = 'success',
  Error = 'error',
}

export class BrandKitController {
  private readonly brandKitApi: IBrandKitApi;
  private readonly setStatus: (status: Status) => void;

  public constructor ({
    brandKitApi,
    setStatus,
  }: {
    brandKitApi: IBrandKitApi;
    setStatus: (status: Status) => void;
  }) {
    this.brandKitApi = brandKitApi;
    this.setStatus = setStatus;
  }

  public async createOutro (
    wipBrandKitOutro: IWIPBrandKitOutro,
  ): Promise<void> {
    this.setStatus(Status.Pending);
    try {
      await this.brandKitApi.createOutro(wipBrandKitOutro);
      this.setStatus(Status.Success);
    } catch (error) {
      this.setStatus(Status.Error);
    }
  }
}

const useBrandKitController = (): { status: Status; controller: BrandKitController } => {
  const [status, setStatus] = useState<Status>(Status.Idle);

  return useMemo(() => {
    const controller = new BrandKitController({
      brandKitApi: Api(http),
      setStatus,
    });

    return { status, controller };
  }, [status]);
};

export default useBrandKitController;
