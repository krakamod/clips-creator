import request from 'supertest';
import express from 'express';

import router from './routes';
import { vi } from 'vitest';

vi.mock('../../videoConverter', () => ({
  default: {
    createOutro: vi.fn(),
  },
}));

describe('BrandKit Routes', () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(router);

  it('should return 200 status code for POST /outro', async () => {
    await request(app)
      .post('/outro')
      .send({
        name: 'Test Name',
        callToAction: 'Test Call to Action',
      })
      .expect(200);
  });

  it('should return 404 status code for POST /nonexistent', async () => {
    await request(app)
      .post('/nonexistent')
      .expect(404);
  });
});
