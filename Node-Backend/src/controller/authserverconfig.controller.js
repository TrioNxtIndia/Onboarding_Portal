import AuthServerConfig from "../models/Config Tables/AuthServerConfig.js";

const authserverController = {

    saveASConfig: async (req, res) => {
        try {
          const { name, email, password, customerId } = req.body;
          console.log({ name, email, password, customerId });
          await AuthServerConfig.create({ name, email, password, customerId });
          res.status(200).send({ message: 'Details added Successfully'});
        } catch (err) {
          console.error(err);
          res.status(500).send({ message: err.message });
        }
      },

      getAllASConfigs: async(req, res) => {
        try {
          const customers = await AuthServerConfig.findAll();
          res.status(200).json(customers);
        } catch (error) {
          res.status(502).json({ Message: 'Bad Gateway..'})
        }
      },

}

export default authserverController