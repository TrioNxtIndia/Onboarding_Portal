import APIGEEConfig from "../models/Config Tables/APIGEEConfig.js";
import AuthServerConfig from "../models/Config Tables/AuthServerConfig.js";
import Certdeatil from "../models/Config Tables/CertDetail.js";
import Contactlist from "../models/Config Tables/ContactList.js";
import EndPtConfig from "../models/Config Tables/EndPtConfig.js";
import OBConfig from "../models/Config Tables/OBConfig.js";
import SFTPConfig from "../models/Config Tables/SFTPConfig.js";
import Customer from "../models/Customer.js";
import Project from '../models/Project.js';

const customerController = {

    saveCustomer: async (req, res) => {
        try {
          const { name, saleContact, contractStatus, goLiveDate, projectName} = req.body;
          console.log({
            name,
            saleContact,
            contractStatus,
            goLiveDate,
            projectName
          });
          await Customer.create({
            name, 
            saleContact,
            contractStatus,
            goLiveDate,
            projectName
          });
          res.status(200).send({ message: 'Customers added Successfully'});
        } catch (err) {
          console.error(err);
          res.status(500).send({ message: err.message });
        }
      },
    
      // Read all customers
      getAllCustomers: async(req, res) => {
        try {
          const customers = await Customer.findAll();
          res.status(200).json(customers);
        } catch (error) {
          res.status(502).json({ Message: 'Bad Gateway..'})
        }
      },

      getCustomerWithProject: async (req, res) => {
         try {
          const customers = await Project.findAll({
            include: Customer
          });
          res.status(200).json(customers);
        } catch (error) {
          console.log(error)
          res.status(500).json({ error: 'An error occurred while fetching projects.' });
        }
      },
    
      // Get a customer by ID
      getCustomerById: async (req, res) => {
        const customerId = req.params.id;
      
        try {
          const customer = await Customer.findByPk(customerId);
          if (customer) {
            res.status(200).json(customer);
          } else {
            res.status(404).json({ error: 'Customer not found.' });
          }
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching the customer.' });
        }
      },
    
      // Update a customer
      updateCustomer: async (req, res) => {
        const customerId = req.params.id;
        const { name, saleContact, contractStatus, goLiveDate, projectName } = req.body;
    
        try {
          await Customer.update({ name, saleContact, contractStatus, goLiveDate, projectName }, { where: { id: customerId } });
          res.status(200).json({ message: 'Customer updated successfully.' });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while updating the customer.' });
        }
      },
    
      // Delete a customer
      deleteCustomer: async (req, res) => {
        const customerId = req.params.id;
    
        try {
          await Customer.destroy({ where: { id: customerId } });
          res.status(200).json({ message: 'Customer deleted successfully.' });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while deleting the customer.' });
        }
      },

      getCustomerWithTables: async (req, res) => {
        const id = req.params.id;
        try {
          const customer = await Customer.findByPk(id, {
            include: [
            
            { model: OBConfig }, { model: EndPtConfig },{ model: AuthServerConfig }, { model: SFTPConfig },
            { model: APIGEEConfig },{ model: Contactlist }, { model: Certdeatil }
          ]
          })
          res.status(200).json(customer)
        } catch (error) {
          
        }
      }

}

export default customerController