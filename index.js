const server = require('./server.js');
require('dotenv').config();

// const port = process.env.PORT
const port = 5500

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
