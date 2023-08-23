import Certdeatil from "../models/Config Tables/CertDetail.js";

const certdetailController = {

    saveCertDetail: async (req, res) => {
        try {
          const { certno, name, date, customerId } = req.body;
          console.log({ certno, name, date, customerId });
          await Certdeatil.create({ certno, name, date, customerId });
          res.status(200).send({ message: 'Details added Successfully'});
        } catch (err) {
          console.error(err);
          res.status(500).send({ message: err.message });
        }
      },

      getCertDetail: async(req, res) => {
        try {
          const customers = await Certdeatil.findAll();
          res.status(200).json(customers);
        } catch (error) {
          res.status(502).json({ Message: 'Bad Gateway..'})
        }
      },
}

export default certdetailController