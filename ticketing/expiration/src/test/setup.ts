import request from 'supertest';

declare global {
  var signin: () => string[];
}

jest.mock('../nats-wrapper');

let mongo: any;
beforeAll(async () => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  process.env.SERVICE_STATUS = 'HEALTHY';
});

beforeEach(async () => {
  jest.clearAllMocks();
  process.env.SERVICE_STATUS = 'HEALTHY';
});

afterAll(async () => {
});
