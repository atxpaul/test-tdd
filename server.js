const express = require('express');
const axios = require('axios');
const { users } = require('./endpoints');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usersHandlers = users({ axios });

app.get('/', usersHandlers.get);

app.post('/', usersHandlers.post);

app.put('/:id', usersHandlers.put);

app.delete('/:id', usersHandlers.delete);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
