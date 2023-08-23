import Project from '../models/Project.js'


const projectController = {
    // Create a new customer
    addProject: async (req, res) => {
      try {
        const { name, docURL, milestoneURL } = req.body;
        
        const project = await Project.create({ name, docURL, milestoneURL });
        res.status(201).json(project);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while creating the project.' });
      }
    },
  
    // Read all customers
    getAllProjects: async (req, res) => {
        try {
          const projects = await Project.findAll();
          res.status(200).json(projects);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching teams.' });
        }
      },
  
    // Get a customer by ID
    getProjectById: async (req, res) => {
      const projectId = req.params.id;
    
      try {
        const project = await Project.findByPk(projectId);
        if (project) {
          res.status(200).json(project);
        } else {
          res.status(404).json({ error: 'project not found.' });
        }
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the project.' });
      }
    },
  
    // Update a customer
    updateProject: async (req, res) => {
      const projectId = req.params.id;
      const { name, docURL, milestoneURL } = req.body;
  
      try {
        await Project.update({ name, docURL, milestoneURL }, { where: { id: projectId } });
        res.status(200).json({ message: 'Project updated successfully.' });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the Project.' });
      }
    },
    // Delete a customer
    deleteProject: async (req, res) => {
      const projectId = req.params.id;
  
      try {
        await Project.destroy({ where: { id: projectId } });
        res.status(200).json({ message: 'project deleted successfully.' });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the project.' });
      }
    },
}  

export default projectController