import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';
import Customer from './Customer.js'

class Project extends Model {}
Project.init({
  name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },
  docURL: {
    type: DataTypes.STRING,
    allowNull: false
  },
  milestoneURL: {
    type: DataTypes.STRING,
    allowNull: false
  }
  },
  { sequelize });

// Project & Customer Relation 1 to Many 
Project.hasMany(Customer, { foreignKey: 'projectName', sourceKey: 'name' });
Customer.belongsTo(Project, { foreignKey: 'projectName', targetKey: 'name' });

export default Project;