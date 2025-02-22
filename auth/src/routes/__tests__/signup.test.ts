import request from 'supertest';
import { app } from '../../app';

/*
it('should return 405 for non-post requests to the sign up route', () => {

});
*/

it('should return 422 if the email is not valid', async () => {
    await request(app).post('/api/auth/signup').send({}).expect(422);
    await request(app).post('/api/auth/signup').send({ email: 'invalid' }).expect(422);
});
