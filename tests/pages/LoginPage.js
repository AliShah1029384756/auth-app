const request = require('supertest');

class LoginPage {
  constructor(app) {
    this.app = app;
    this.endpoint = '/login';
  }

  async submitLogin(email, password) {
    const res = await request(this.app)
      .post(this.endpoint)
      .send({ email, password });
    return res;
  }

  async submitEmpty() {
    return await this.submitLogin('', '');
  }

  isLoginSuccessful(response) {
    return response.status === 200 && response.body.success === true;
  }

  hasErrorMessage(response) {
    return response.status !== 200 && response.body.success === false;
  }
}

module.exports = LoginPage;