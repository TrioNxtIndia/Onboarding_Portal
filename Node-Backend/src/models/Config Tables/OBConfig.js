import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database.js";

class OBConfig extends Model{}
OBConfig.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    details: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{ sequelize })


export default OBConfig