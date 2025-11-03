const express = require('express');
const app = express();
const port = 3000;

// Simple calculator logic
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a) || 0;
  const b = parseFloat(req.query.b) || 0;
  res.send({ result: a + b });
});

app.listen(port, () => console.log(`SmartCalc running on port ${port}`));

module.exports = app;
