function validateEmail(email) {
  if (!email || email.trim() === '') {
    return { valid: false, message: 'Email is required' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: 'Invalid email format' };
  }
  return { valid: true, message: 'Valid email' };
}

function validatePassword(password) {
  if (!password || password.trim() === '') {
    return { valid: false, message: 'Password is required' };
  }
  if (password.length < 6) {
    return { valid: false, message: 'Password must be at least 6 characters' };
  }
  return { valid: true, message: 'Valid password' };
}

function validateUsername(username) {
  if (!username || username.trim() === '') {
    return { valid: false, message: 'Username is required' };
  }
  if (username.length < 3) {
    return { valid: false, message: 'Username must be at least 3 characters' };
  }
  return { valid: true, message: 'Valid username' };
}

module.exports = { validateEmail, validatePassword, validateUsername };