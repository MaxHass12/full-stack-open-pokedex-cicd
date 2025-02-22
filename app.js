const express = require('express');
const app = express();

// get the port from env variable
// foo
const PORT = process.env.PORT || 5001;

app.use(express.static('dist'));

app.get('/version', (req, res) => {
  res.send('1');
});

app.listen(PORT, () => {
  throw new Error();
  console.log(`server started on port ${PORT}`);
});
