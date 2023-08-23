import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database.js";

class SFTPConfig extends Model{}
SFTPConfig.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    detail: {
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


export default SFTPConfig