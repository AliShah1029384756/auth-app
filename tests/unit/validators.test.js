const { expect } = require('chai');
const { validateEmail, validatePassword, validateUsername } = require('../../src/utils/validators');

describe('=== UNIT TESTS: Validator Functions ===', () => {

  describe('Email Validation', () => {

    it('Should accept a valid email', () => {
      const result = validateEmail('test@example.com');
      expect(result.valid).to.be.true;
    });

    it('Should reject email missing @ symbol', () => {
      const result = validateEmail('testexample.com');
      expect(result.valid).to.be.false;
    });

    it('Should reject email missing domain', () => {
      const result = validateEmail('test@');
      expect(result.valid).to.be.false;
    });

    it('Should reject empty email', () => {
      const result = validateEmail('');
      expect(result.valid).to.be.false;
    });

    it('Should reject null email', () => {
      const result = validateEmail(null);
      expect(result.valid).to.be.false;
    });

    it('Should reject email with spaces', () => {
      const result = validateEmail('test @example.com');
      expect(result.valid).to.be.false;
    });

    it('Should accept email with subdomain', () => {
      const result = validateEmail('user@mail.example.com');
      expect(result.valid).to.be.true;
    });

  });

  describe('Password Validation', () => {

    it('Should accept a valid password', () => {
      const result = validatePassword('mypassword');
      expect(result.valid).to.be.true;
    });

    it('Should accept exactly 6 characters', () => {
      const result = validatePassword('123456');
      expect(result.valid).to.be.true;
    });

    it('Should reject password shorter than 6 chars', () => {
      const result = validatePassword('abc');
      expect(result.valid).to.be.false;
    });

    it('Should reject empty password', () => {
      const result = validatePassword('');
      expect(result.valid).to.be.false;
    });

    it('Should reject 5 character password', () => {
      const result = validatePassword('12345');
      expect(result.valid).to.be.false;
    });

    it('Should accept password with special characters', () => {
      const result = validatePassword('p@$$w0rd!');
      expect(result.valid).to.be.true;
    });

  });

  describe('Username Validation', () => {

    it('Should accept a valid username', () => {
      const result = validateUsername('john');
      expect(result.valid).to.be.true;
    });

    it('Should accept exactly 3 characters', () => {
      const result = validateUsername('abc');
      expect(result.valid).to.be.true;
    });

    it('Should reject username shorter than 3 chars', () => {
      const result = validateUsername('ab');
      expect(result.valid).to.be.false;
    });

    it('Should reject empty username', () => {
      const result = validateUsername('');
      expect(result.valid).to.be.false;
    });

    it('Should reject 2 character username', () => {
      const result = validateUsername('jo');
      expect(result.valid).to.be.false;
    });

    it('Should accept username with numbers', () => {
      const result = validateUsername('user123');
      expect(result.valid).to.be.true;
    });

  });

});