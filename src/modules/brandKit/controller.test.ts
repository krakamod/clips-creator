import { vi, type Mock } from 'vitest';
import { BrandKitController, Status } from './controller';
import { type IBrandKitApi } from './api';
import { type IWIPBrandKitOutro } from './IBrandKit';

describe('BrandKitController', () => {
  let brandKitApiMock: IBrandKitApi;
  let setStatusMock: Mock;

  let brandKitController: BrandKitController;

  beforeEach(() => {
    brandKitApiMock = {
      createOutro: vi.fn(),
    };
    setStatusMock = vi.fn();

    brandKitController = new BrandKitController({
      brandKitApi: brandKitApiMock,
      setStatus: setStatusMock,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should set status to "Pending" and call brandKitApi.createOutro', async () => {
    const wipBrandKitOutro: IWIPBrandKitOutro = {
      name: 'Test name',
      callToAction: 'Test call to action',
    };

    await brandKitController.createOutro(wipBrandKitOutro);

    expect(setStatusMock).toHaveBeenCalledWith(Status.Pending);
    expect(brandKitApiMock.createOutro).toHaveBeenCalledWith(wipBrandKitOutro);
  });

  it('should set status to "Success" when brandKitApi.createOutro succeeds', async () => {
    const wipBrandKitOutro: IWIPBrandKitOutro = {
      name: 'Test name',
      callToAction: 'Test call to action',
    };

    await brandKitController.createOutro(wipBrandKitOutro);

    expect(setStatusMock).toHaveBeenCalledWith(Status.Success);
  });

  it('should set status to "Error" when brandKitApi.createOutro throws an error', async () => {
    const wipBrandKitOutro: IWIPBrandKitOutro = {
      name: 'Test name',
      callToAction: 'Test call to action',
    };
    const error = new Error('Test error');

    (brandKitApiMock.createOutro as Mock).mockRejectedValueOnce(error);

    await brandKitController.createOutro(wipBrandKitOutro);

    expect(setStatusMock).toHaveBeenCalledWith(Status.Error);
  });
});
