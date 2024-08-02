import { Model, DataTypes, UUID } from "sequelize";
import { sequelize } from "../conection-db.js";

export class Category extends Model {}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            len: [5, 50]
        }
    },
    description: {
        type: DataTypes.STRING,
        validate: {
            len: [5, 50]
        }
    },
    iconUrl: {
        type: DataTypes.STRING,
        validate: [5, 100]
    }
}, { sequelize, modelName: "Category", tableName: "categories" })