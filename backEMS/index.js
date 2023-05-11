const express = require('express');
const app = express();
const employeRoutes = require('./routes/employeRoutes');

const host = '127.0.0.1';
const port = 3333;

app.use (express.json());
app.use ('/employes', employeRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
