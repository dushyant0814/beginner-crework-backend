const express = require('express');
const app = express();
const router = require('./routes/health');
app.use(express.json());
app.use('/example', router);

app.listen(3000, () => {
  console.log('Server is listening at PORT ', 3000);
});
