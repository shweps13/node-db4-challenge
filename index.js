const server = require('./server.js');
require('dotenv').config();

// const port = process.env.PORT
const port = process.env.PORT || 5500;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
