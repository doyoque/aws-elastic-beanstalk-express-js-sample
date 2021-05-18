const express = require('express');
const app = express();
const port = 8080;

// more comment sir
app.get('/', (req, res) => res.send('Hello world!, I am learning DevOps with AWS. Currently in steps 5'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
