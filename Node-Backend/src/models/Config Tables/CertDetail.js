import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database.js";

class Certdeatil extends Model{}
Certdeatil.init({
    certno: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
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


export default Certdeatil