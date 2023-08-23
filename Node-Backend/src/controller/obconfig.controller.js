import OBConfig from "../models/Config Tables/OBConfig.js";

const obconfigController = {

    saveObConfig: async (req, res) => {
        try {
          const { name, details, status, customerId } = req.body;
          console.log({ name, details, status, customerId });
          await OBConfig.create({ name, details, status, customerId });
          res.status(200).send({ message: 'Details added Successfully'});
        } catch (err) {
          console.error(err);
          res.status(500).send({ message: err.message });
        }
      },

      getAllDetails: async(req, res) => {
        try {
          const customers = await OBConfig.findAll();
          res.status(200).json(customers);
        } catch (error) {
          res.status(502).json({ Message: 'Bad Gateway..'})
        }
      },

      getDetailById: async (req, res) => {
        const customerId = req.params.id;
      
        try {
          const detail = await OBConfig.findByPk(customerId);
          if (detail) {
            res.status(200).json(detail);
          } else {
            res.status(404).json({ error: 'Config not found.' });
          }
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching the customer.' });
        }
      }
}

export default obconfigController