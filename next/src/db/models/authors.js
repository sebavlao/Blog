import { Model, DataTypes, UUID, UUIDV4 } from "sequelize";
import { sequelize } from "../conection-db.js";

export class Author extends Model {}

Author.init({
    _id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 100]
        }
    },
    avatarUrl: {
        type: DataTypes.STRING,
        validate: {
            len: [5, 100]
        }
    }
}, { sequelize, modelName: "author" })