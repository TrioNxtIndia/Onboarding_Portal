import EndPtConfig from "../models/Config Tables/EndPtConfig.js";

const endpointconfigController = {

    saveEndPtConfig: async (req, res) => {
        try {
          const { name, status, date, customerId } = req.body;
          console.log({ name, status, date, customerId });

          await EndPtConfig.create({ name, status, date, customerId });
          res.status(200).send({ message: 'Details added Successfully'});
        } catch (err) {
          console.error(err);
          res.status(500).send({ message: err.message });
        }
      },

      getAllEndPts: async(req, res) => {
        try {
          const customers = await EndPtConfig.findAll();
          res.status(200).json(customers);
        } catch (error) {
          res.status(502).json({ Message: 'Bad Gateway..'})
        }
      },

}

export default endpointconfigController