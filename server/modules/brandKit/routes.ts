import express from 'express';
import asyncHandler from 'express-async-handler';
import videoConverter from '../../videoConverter';

const router = express.Router();

router.post('/outro', asyncHandler(async (req, res) => {
  try {
    await videoConverter.createOutro({
      name: req.body.name,
      text: req.body.callToAction,
    });

    res.sendStatus(200);
  } catch (error) {
    res.status(500).send('An error occurred while creating the outro.');
  }
}));

export default router;
