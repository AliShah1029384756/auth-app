const request = require('supertest');

class SignupPage {
  constructor(app) {
    this.app = app;
    this.endpoint = '/signup';
  }

  async submitSignup(username, email, password) {
    const res = await request(this.app)
      .post(this.endpoint)
      .send({ username, email, password });
    return res;
  }

  async submitEmpty() {
    return await this.submitSignup('', '', '');
  }

  isSignupSuccessful(response) {
    return response.status === 201 && response.body.success === true;
  }

  hasErrorMessage(response) {
    return response.status !== 201 && response.body.success === false;
  }
}

module.exports = SignupPage;