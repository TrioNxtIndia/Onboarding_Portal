import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class Member extends Model{}
Member.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    responsibility: {
        type: DataTypes.STRING,
        allowNull: false
    },
    teamId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{ sequelize })


export default Member