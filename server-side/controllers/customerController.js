const Customer = require('../models/customer');

module.exports = {
  // Create a new customer
  saveCustomer: async (req, res) => {
    try {
      const { name, email, mobile, project, sale_contact, status, golivedate } = req.body;
      console.log({ name, email, mobile, project, sale_contact, status, golivedate });
  
      // Check if a customer with the same email already exists
      const existingCustomer = await Customer.findOne({ where : { email }});

      if (existingCustomer) {
        return res.status(400).json({ error: 'Customer with this email already exists.' });
      }
  
      const customer = await Customer.create({ name, email, mobile, project, sale_contact, status, golivedate });
      res.status(201).json(existingCustomer);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the customer.' });
    }
  },

  // Read all customers
  getAllCustomers: async (req, res) => {
    try {
      const customers = await Customer.findAll();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching customers.' });
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
    const { name, email, mobile, project, sale_contact, status, golivedate } = req.body;

    try {
      await Customer.update({ name, email, mobile, project, sale_contact, status, golivedate }, { where: { id: customerId } });
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
};
