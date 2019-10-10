const express = require('express');
const helmet = require('helmet');

const server = express();
const recipesRouter = require('./recipes/recipes-router.js');

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
    const nameInsert = req.teamName ? ` ${req.teamName}` : '';
    const yourData = process.env
    res.send(`
    <h2>Heorhii Recipe Book API</h2>
    <p>Hello ${yourData.USER}</p>
    <p>Welcome ${nameInsert} to the Heorhii Hubs API on port ${yourData.PORT}</p>
    `);
  });


module.exports = server;
