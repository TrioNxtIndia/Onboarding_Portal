import express from 'express';
import authController from '../controller/auth.controller.js';
import projectController from '../controller/project.controller.js'
import customerController from '../controller/customer.controller.js';
import teamController from '../controller/team.controller.js';
import memberController from '../controller/teamMember.controller.js';
import obconfigController from '../controller/obconfig.controller.js';
import endpointconfigController from '../controller/endptconfig.controller.js';
import authserverController from '../controller/authserverconfig.controller.js';
import sftpconfigController from '../controller/sftpconfig.controller.js';
import apigeeConfigController from '../controller/apigeeconfig.controller.js';
import contactListController from '../controller/contactlist.controller.js';
import certdetailController from '../controller/certDetail.controller.js';

const router = express.Router();

// auth Routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);


// Projects Routes
router.post('/project', projectController.addProject)
router.get('/project', projectController.getAllProjects)
router.get('/project/:id', projectController.getProjectById)
router.put('/project/:id', projectController.updateProject)
router.delete('project/:id', projectController.deleteProject)

// Customer Routes
router.post('/customer', customerController.saveCustomer)
router.get('/customer', customerController.getAllCustomers)
router.get('/customer/:id', customerController.getCustomerById)
router.put('/customer/:id', customerController.updateCustomer)
router.delete('/customer/:id', customerController.deleteCustomer)
router.get('/customerwithproject', customerController.getCustomerWithProject) // get Customer with Project
router.get('/customerwithtables/:id', customerController.getCustomerWithTables)

// Team Routes
router.post('/team', teamController.addTeam)
router.get('/team', teamController.getAllTeams)
router.get('/team/:id', teamController.getTeamById)
router.put('/team/:id', teamController.updateTeam)
router.delete('/team/:id', teamController.deleteTeam)
router.get('/teamwithmember/:id', teamController.getTeamAndMemberById)

// Team Members Routes
router.post('/member', memberController.saveMember)
router.get('/member', memberController.getAllMembers)
router.get('/teamwithmembers', memberController.getTeamWithMembers) //get Members with Team Details

// OBConfig tables Routes
router.post('/obconfig', obconfigController.saveObConfig)
router.get('/obconfig', obconfigController.getAllDetails)

// EndPoint Config tables Routes
router.post('/endpt', endpointconfigController.saveEndPtConfig)
router.get('/endpt', endpointconfigController.getAllEndPts)

// Auth Server Config tables Routes
router.post('/asconfig', authserverController.saveASConfig)
router.get('/asconfig', authserverController.getAllASConfigs)

// SFTP Config tables Routes
router.post('/sftp', sftpconfigController.saveSFTPConfig)
router.get('/sftp', sftpconfigController.getSFTPDetails)

// APIGEE Config tables Routes
router.post('/apigee', apigeeConfigController.saveAPIGEE)
router.get('/apigee', apigeeConfigController.getAPIGEE)

// Contact List tables Routes
router.post('/contactlist', contactListController.saveContact)
router.get('/contactlist', contactListController.getContact)

// Certificate Detail tables Routes
router.post('/cert', certdetailController.saveCertDetail)
router.get('/cert', certdetailController.getCertDetail)


export default router;
