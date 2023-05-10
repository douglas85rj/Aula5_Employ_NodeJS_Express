const express = require('express');
const router = express.Router();

router.get('get', (req, res) => {
    res.send('List of Employes');
} );

module.exports = router;