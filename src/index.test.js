const request = require('supertest');
const app = require('./index');

describe('GET /health', () => {
  it('responds with status ok and a timestamp', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
    expect(response.body).toHaveProperty('timestamp');
  });
});
