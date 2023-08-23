import APIGEEConfig from "../models/Config Tables/APIGEEConfig.js";

const apigeeConfigController = {

    saveAPIGEE: async (req, res) => {
        try {
          const { type, url, customerId } = req.body;
          console.log({ type, url, customerId });
          await APIGEEConfig.create({ type, url, customerId });
          res.status(200).send({ message: 'Details added Successfully'});
        } catch (err) {
          console.error(err);
          res.status(500).send({ message: err.message });
        }
      },

      getAPIGEE: async(req, res) => {
        try {
          const customers = await APIGEEConfig.findAll();
          res.status(200).json(customers);
        } catch (error) {
          res.status(502).json({ Message: 'Bad Gateway..'})
        }
      },
}

export default apigeeConfigController