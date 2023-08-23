import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";
import Member from "./teamMember.js";

class Team extends Model{}

Team.init({

    name: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false
    }
},
{ sequelize });

// Team has many Members relation
Team.hasMany(Member, { foreignKey: 'teamId'})
Member.belongsTo(Team, { foreignKey: 'teamId'})

export default Team;