const assert = require('assert');
const request = require('supertest');
const app = require('../app');
describe('Express App', () => {
    it('GET /api', (done) => {
        request(app)
            .get('/api')
            .end((err, response) => {
                console.log(response);
            });
    });
});