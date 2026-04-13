const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const authRoutes = require('./src/routes/authRoutes');
app.use('/', authRoutes);

app.get('/', (req, res) => res.redirect('/login'));

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
}