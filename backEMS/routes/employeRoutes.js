const express = require('express');
const router = express.Router();

const employesController = require ('../controllers/employesController')

router.get( ('/', employesController.getAllEmployes) ) // Get all employes  
router.post( ('/add', employesController.addEmployes) ) // Add an employes
router.put( ('/update/:id', employesController.updateEmployes) ) // Update an employes
router.delete( ('/delete/:id', employesController.deleteEmployes) ) // Delete an employes     


module.exports = router;