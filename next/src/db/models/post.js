import { Model, DataTypes, UUID } from "sequelize";
import { sequelize } from "../conection-db.js";

export class Post extends Model {}

Post.init({
    _id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 50]
        }
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING
    },
    authorId: {
        type: UUID,
        allowNull: false,
        references: {
            model: Users,
            key: "_id"
        }
    },
}, { sequelize, modelName: "post" })