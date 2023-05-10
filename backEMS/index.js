const express = require('express');
const app = express();
const employeRoutes = require('./routes/employeRoutes');

const port = 3333;

app.use (express.json());
app.use ('/employes', employeRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
