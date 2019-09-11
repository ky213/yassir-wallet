/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../src/app';

const request = supertest.agent(app);

describe('done', () => {
  it('should return an array of accounts', done => {
    request
      .get('/account/all')
      .expect(res => expect(res.body).toContain('sdlkl'));

    done();
  });
});
