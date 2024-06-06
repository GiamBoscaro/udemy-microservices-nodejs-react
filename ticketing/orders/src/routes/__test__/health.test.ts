import request from 'supertest';
import { app } from '../../app';

it('fetches the health status of the service', async () => {
  // Make request to check the health of the service
  const response = await request(app)
    .get('/api/healthz')
    .expect(200);

  // Make sure the service is healthy
  expect(response.body.healthy).toEqual(true);
});

it('fetches the health status of a broken service', async () => {
  process.env.SERVICE_STATUS='';
  // Make request to check the health of the service
  const response = await request(app)
    .get('/api/healthz')
    .expect(400);
});
