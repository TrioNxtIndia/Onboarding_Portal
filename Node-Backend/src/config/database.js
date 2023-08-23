import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('op', 'root', 'Pass@123', {
    host: 'localhost',
    dialect: 'mysql',
});
  
export default sequelize; 