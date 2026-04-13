const { expect } = require('chai');
const app = require('../../app');
const LoginPage = require('../pages/LoginPage');
const SignupPage = require('../pages/SignupPage');

const loginPage = new LoginPage(app);
const signupPage = new SignupPage(app);

describe('=== INTEGRATION TESTS: Auth Flow ===', () => {

  describe('Signup Page', () => {

    it('Should register with valid data', async () => {
      const res = await signupPage.submitSignup('johndoe', 'john@example.com', 'password123');
      expect(signupPage.isSignupSuccessful(res)).to.be.true;
    });

    it('Should reject duplicate email', async () => {
      await signupPage.submitSignup('johndoe', 'john@example.com', 'password123');
      const res = await signupPage.submitSignup('johndoe', 'john@example.com', 'password123');
      expect(signupPage.hasErrorMessage(res)).to.be.true;
    });

    it('Should reject empty form', async () => {
      const res = await signupPage.submitEmpty();
      expect(signupPage.hasErrorMessage(res)).to.be.true;
    });

    it('Should reject short password', async () => {
      const res = await signupPage.submitSignup('alice', 'alice@example.com', '123');
      expect(signupPage.hasErrorMessage(res)).to.be.true;
    });

    it('Should reject invalid email', async () => {
      const res = await signupPage.submitSignup('alice', 'notanemail', 'password123');
      expect(signupPage.hasErrorMessage(res)).to.be.true;
    });

    it('Should reject short username', async () => {
      const res = await signupPage.submitSignup('ab', 'ab@example.com', 'password123');
      expect(signupPage.hasErrorMessage(res)).to.be.true;
    });

    it('Should accept username with special characters', async () => {
      const res = await signupPage.submitSignup('user_99', 'user99@example.com', 'securepass');
      expect(signupPage.isSignupSuccessful(res)).to.be.true;
    });

    it('Should accept password with special characters', async () => {
      const res = await signupPage.submitSignup('secuser', 'sec@example.com', 'p@$$w0rd!');
      expect(signupPage.isSignupSuccessful(res)).to.be.true;
    });

  });

  describe('Login Page', () => {

    before(async () => {
      await signupPage.submitSignup('loginuser', 'login@example.com', 'correctpass');
    });

    it('Should login with valid credentials', async () => {
      const res = await loginPage.submitLogin('login@example.com', 'correctpass');
      expect(loginPage.isLoginSuccessful(res)).to.be.true;
    });

    it('Should reject wrong password', async () => {
      const res = await loginPage.submitLogin('login@example.com', 'wrongpassword');
      expect(loginPage.hasErrorMessage(res)).to.be.true;
    });

    it('Should reject non existing user', async () => {
      const res = await loginPage.submitLogin('ghost@example.com', 'somepassword');
      expect(loginPage.hasErrorMessage(res)).to.be.true;
    });

    it('Should reject empty form', async () => {
      const res = await loginPage.submitEmpty();
      expect(loginPage.hasErrorMessage(res)).to.be.true;
    });

    it('Should reject invalid email format', async () => {
      const res = await loginPage.submitLogin('notanemail', 'password123');
      expect(loginPage.hasErrorMessage(res)).to.be.true;
    });

  });

  describe('Advanced Edge Case Tests', () => {

    it('Should handle garbage input gracefully', async () => {
      const res = await signupPage.submitSignup('!@#$%', '!!!invalid!!!', '??');
      expect(res.status).to.not.equal(500);
    });

    it('Boundary: Username exactly 3 chars accepted', async () => {
      const res = await signupPage.submitSignup('xyz', 'xyz@example.com', 'password123');
      expect(signupPage.isSignupSuccessful(res)).to.be.true;
    });

    it('Boundary: Username exactly 2 chars rejected', async () => {
      const res = await signupPage.submitSignup('xy', 'xy@example.com', 'password123');
      expect(signupPage.hasErrorMessage(res)).to.be.true;
    });

    it('Boundary: Password exactly 6 chars accepted', async () => {
      const res = await signupPage.submitSignup('user6chars', 'user6@example.com', 'abc123');
      expect(signupPage.isSignupSuccessful(res)).to.be.true;
    });

    it('Boundary: Password exactly 5 chars rejected', async () => {
      const res = await signupPage.submitSignup('user5chars', 'user5@example.com', 'ab123');
      expect(signupPage.hasErrorMessage(res)).to.be.true;
    });

    it('Rapid multiple signups should not crash server', async () => {
      const promises = [];
      for (let i = 0; i < 5; i++) {
        promises.push(signupPage.submitSignup(`spam${i}`, `spam${i}@test.com`, 'spampass123'));
      }
      const results = await Promise.all(promises);
      results.forEach(res => {
        expect(res.status).to.not.equal(500);
      });
    });

    it('Very long username should not crash server', async () => {
      const longName = 'a'.repeat(300);
      const res = await signupPage.submitSignup(longName, 'long@example.com', 'password123');
      expect(res.status).to.not.equal(500);
    });

  });

});