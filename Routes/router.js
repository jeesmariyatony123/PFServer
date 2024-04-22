//7. To setup independent routes for each request in express server
// Create routes folder = Inside routes folder create router.js file to define route / path for resolving each request

//7.1 import express
const express = require('express')
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

//7.2 create object for router class of express to set up routes
const router = new express.Router()

//7.3 register &goto userController
router.post('/register', userController.register)

//login
router.post('/login', userController.login)

//addproject
router.post('/add-project', jwtMiddleware, multerConfig.single('projectImage'), projectController.addProject)

//getallprojects
router.get('/all-projects', jwtMiddleware, projectController.getAllProjects)

//getUserProjects
router.get('/user-projects', jwtMiddleware, projectController.getUserProjects)

//getHomeProjects
router.get('/home-projects', projectController.getHomeProjects)

//editproject
router.put('/edit-project/:pid', jwtMiddleware, multerConfig.single('projectImage'), projectController.editProject)

//removeproject
router.delete('/remove-project/:pid', jwtMiddleware, projectController.removeProject)

//edituser
router.put('/edit-user', jwtMiddleware, multerConfig.single("profileImage"), userController.editUser)

//7. export router
module.exports = router