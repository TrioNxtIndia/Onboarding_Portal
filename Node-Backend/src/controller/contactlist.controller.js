import Contactlist from "../models/Config Tables/ContactList.js";

const contactListController = {

    saveContact: async (req, res) => {
        try {
          const { name, email, mobile, customerId } = req.body;
          console.log({ name, email, mobile, customerId });
          await Contactlist.create({ name, email, mobile, customerId });
          res.status(200).send({ message: 'Details added Successfully'});
        } catch (err) {
          console.error(err);
          res.status(500).send({ message: err.message });
        }
      },

      getContact: async(req, res) => {
        try {
          const customers = await Contactlist.findAll();
          res.status(200).json(customers);
        } catch (error) {
          res.status(502).json({ Message: 'Bad Gateway..'})
        }
      },
}

export default contactListController