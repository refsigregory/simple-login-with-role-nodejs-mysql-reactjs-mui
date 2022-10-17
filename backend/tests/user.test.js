const request = require('supertest');
const express = require('express');

const app = express();

require('../app/routes/user.routes')(app);

describe('User Signup Routes', function() {
    it('responds with json', function(done) {
        request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});