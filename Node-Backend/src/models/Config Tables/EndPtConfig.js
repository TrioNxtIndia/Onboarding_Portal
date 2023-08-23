import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database.js";

class EndPtConfig extends Model{}
EndPtConfig.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{ sequelize })


export default EndPtConfig