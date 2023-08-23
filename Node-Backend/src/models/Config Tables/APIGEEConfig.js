import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database.js";

class APIGEEConfig extends Model{}
APIGEEConfig.init({
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{ sequelize })


export default APIGEEConfig