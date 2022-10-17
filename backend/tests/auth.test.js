const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('../app/routes/auth.routes')(app);

describe('Auth SignIn Routes', function() {
  it('responds with json', function(done) {
    request(app)
    .post('/api/auth/signin')
    .send({username: 'admin', password: 'password'})
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done)
  });
});

describe('User SignUp Routes', function() {
  it('responds with json', function(done) {
      request(app)
      .post('/api/auth/signin')
      .send({
        "username": "admin",
        "email": "admin@localhost.local",
        "password": "admin",
        "roles": ["admin"]
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});