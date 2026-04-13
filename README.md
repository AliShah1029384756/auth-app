# Node.js Authentication App

## Project Overview
A Node.js/Express authentication system with Login and Signup functionality, fully tested with Mocha/Chai and integrated into Jenkins CI/CD pipeline.

## Author
- **Name:** Ali Shah
- **Submission Date:** April 2026

## Tech Stack
- Node.js
- Express
- bcryptjs
- EJS
- Mocha
- Chai
- Supertest
- Jenkins

## How to Run

### Install dependencies
npm install

### Start app
npm start

### Run all tests
npm test

### Run unit tests only
npm run test:unit

### Run integration tests only
npm run test:integration

### Generate HTML report
npm run test:report

## Test Summary

| Type | Count | Status |
|------|-------|--------|
| Unit Tests | 19 | ✅ Pass |
| Integration Tests | 20 | ✅ Pass |
| Total | 39 | ✅ Pass |

## Jenkins Pipeline Stages
1. Checkout Code
2. Install Dependencies
3. Run Unit Tests
4. Run Integration Tests
5. Generate Reports
