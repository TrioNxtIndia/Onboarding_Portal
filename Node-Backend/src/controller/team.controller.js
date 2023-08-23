import Team from '../models/Team.js'
import Member from '../models/teamMember.js';

const teamController = {

    addTeam: async (req, res) => {
        try {
          const { name } = req.body;
          
          const team = await Team.create({ name });
          res.status(201).json(team);
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: 'An error occurred while creating the project.' });
        }
      },

      getAllTeams: async (req, res) => {
        try {
          const teams = await Team.findAll();
          res.status(200).json(teams);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching teams.' });
        }
      },

      getTeamById: async (req, res) => {
        const teamId = req.params.id;
      
        try {
          const team = await Team.findByPk(teamId);
          if (team) {
            res.status(200).json(team);
          } else {
            res.status(404).json({ error: 'project not found.' });
          }
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching the project.' });
        }
      },

      updateTeam: async (req, res) => {
        const teamId = req.params.id;
        const { name } = req.body;
    
        try {
          await Team.update({ name }, { where: { id: teamId } });
          res.status(200).json({ message: 'Team updated successfully.' });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while updating the Team.' });
        }
      },

      deleteTeam: async (req, res) => {
        const teamId = req.params.id;
    
        try {
          await Team.destroy({ where: { id: teamId } });
          res.status(200).json({ message: 'Team deleted successfully.' });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while deleting the Team.' });
        }
      },

      getTeamAndMemberById: async(req, res) => {
          const teamId = req.params.id;
        
          try {
            const team = await Team.findByPk(teamId, {
                  include: Member
              });
              res.status(200).json(team)
          } catch (error) {
              console.log(error)
              res.status(500).json({Message: 'Bad Request...'})
          }
      }
}

export default teamController