import express from 'express';
import cors from 'cors';

import brandKitRoutes from './modules/brandKit/routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/brand-kit', brandKitRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
