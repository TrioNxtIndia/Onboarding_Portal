import SFTPConfig from "../models/Config Tables/SFTPConfig.js";

const sftpconfigController = {

    saveSFTPConfig: async (req, res) => {
        try {
          const { name, detail, status, customerId } = req.body;
          console.log({ name, detail, status, customerId });
          await SFTPConfig.create({ name, detail, status, customerId });
          res.status(200).send({ message: 'Details added Successfully'});
        } catch (err) {
          console.error(err);
          res.status(500).send({ message: err.message });
        }
      },

      getSFTPDetails: async(req, res) => {
        try {
          const customers = await SFTPConfig.findAll();
          res.status(200).json(customers);
        } catch (error) {
          res.status(502).json({ Message: 'Bad Gateway..'})
        }
      },
}

export default sftpconfigController