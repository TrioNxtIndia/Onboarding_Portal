import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';
import OBConfig from '../models/Config Tables/OBConfig.js'
import EndPtConfig from './Config Tables/EndPtConfig.js';
import SFTPConfig from './Config Tables/SFTPConfig.js';
import APIGEEConfig from './Config Tables/APIGEEConfig.js';
import Certdeatil from './Config Tables/CertDetail.js';
import Contactlist from './Config Tables/ContactList.js';
import AuthServerConfig from './Config Tables/AuthServerConfig.js';

class Customer extends Model {}
Customer.init({ 

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  saleContact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contractStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  goLiveDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectName: {
    type: DataTypes.STRING,
    allowNull: true
  }
},
  
{ sequelize });

Customer.hasMany(OBConfig, { foreignKey: 'customerId'})
OBConfig.belongsTo(Customer, { foreignKey: 'customerId'})

Customer.hasMany(EndPtConfig, { foreignKey: 'customerId'})
EndPtConfig.belongsTo(Customer, { foreignKey: 'customerId'})

Customer.hasMany(SFTPConfig, { foreignKey: 'customerId'})
SFTPConfig.belongsTo(Customer, { foreignKey: 'customerId'})

Customer.hasMany(APIGEEConfig, { foreignKey: 'customerId'})
APIGEEConfig.belongsTo(Customer, { foreignKey: 'customerId'})

Customer.hasMany(Certdeatil, { foreignKey: 'customerId'})
Certdeatil.belongsTo(Customer, { foreignKey: 'customerId'})

Customer.hasMany(Contactlist, { foreignKey: 'customerId'})
Contactlist.belongsTo(Customer, { foreignKey: 'customerId'})

Customer.hasMany(AuthServerConfig, { foreignKey: 'customerId'})
AuthServerConfig.belongsTo(Customer, { foreignKey: 'customerId'})

export default Customer;