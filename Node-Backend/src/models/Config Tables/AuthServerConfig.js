import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database.js";

class AuthServerConfig extends Model{}
AuthServerConfig.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{ sequelize })


export default AuthServerConfig