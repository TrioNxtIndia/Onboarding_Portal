import Team from "../models/Team.js";
import Member from "../models/teamMember.js";

const memberController = {

    saveMember: async (req, res) => {
        try {
          const { name, location, role, responsibility, teamId} = req.body;
          await Member.create({
            name, 
            location,
            role,
            responsibility,
            teamId
          });
          res.status(200).send({ message: 'Team Member added Successfully'});
        } catch (err) {
          console.error(err);
          res.status(500).send({ message: err.message });
        }
      },

      getAllMembers: async(req, res) => {
        try {
            const members = await Member.findAll();
            res.status(200).json(members)
        } catch (error) {
            res.status(500).json({ Message: 'Bad Request..'})
        }
      },

      getTeamWithMembers: async(req, res) => {
        try {
            const members = await Member.findAll({
                include: Team
            });
            res.status(200).json(members)
        } catch (error) {
            console.log(error)
            res.status(500).json({Message: 'Bad Request...'})
        }
      }
}

export default memberController