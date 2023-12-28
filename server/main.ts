import express from 'express';

import brandKitRoutes from './modules/brandKit/routes';

const app = express();
const port = 3000;

app.use('/brand-kit', brandKitRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
