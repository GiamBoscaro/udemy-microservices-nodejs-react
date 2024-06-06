import { BadRequestError } from '@gboscaro-udemy-ticketing/common';
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/healthz', async (req: Request, res: Response) => {
  if (process.env.SERVICE_STATUS === 'HEALTHY') {
    res.send({ healthy: true });
  } else {
    throw new BadRequestError('Service is unhealthy');
  }
});

export { router as healthRouter };
