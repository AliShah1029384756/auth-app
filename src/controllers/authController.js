const bcrypt = require('bcryptjs');
const { validateEmail, validatePassword, validateUsername } = require('../utils/validators');

const users = [];

function signupController(req, res) {
  const { username, email, password } = req.body;

  const emailCheck = validateEmail(email);
  const passCheck = validatePassword(password);
  const userCheck = validateUsername(username);

  if (!emailCheck.valid) return res.status(400).json({ success: false, message: emailCheck.message });
  if (!passCheck.valid) return res.status(400).json({ success: false, message: passCheck.message });
  if (!userCheck.valid) return res.status(400).json({ success: false, message: userCheck.message });

  const existingUser = users.find(u => u.email === email);
  if (existingUser) return res.status(400).json({ success: false, message: 'User already exists' });

  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ username, email, password: hashedPassword });

  return res.status(201).json({ success: true, message: 'Registration successful' });
}

function loginController(req, res) {
  const { email, password } = req.body;

  const emailCheck = validateEmail(email);
  const passCheck = validatePassword(password);

  if (!emailCheck.valid) return res.status(400).json({ success: false, message: emailCheck.message });
  if (!passCheck.valid) return res.status(400).json({ success: false, message: passCheck.message });

  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) return res.status(401).json({ success: false, message: 'Incorrect password' });

  return res.status(200).json({ success: true, message: 'Login successful' });
}

module.exports = { signupController, loginController, users };