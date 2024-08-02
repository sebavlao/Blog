import { Model, DataTypes, UUID } from "sequelize";
import { sequelize } from "../conection-db.js";

export class PostCategory extends Model {}

PostCategory.init({
    postId: {
        type: DataTypes.UUID,
        references: {
            model: "posts",
            key: "_id"
        }
    },
    categoryId: {
        type: DataTypes.UUID,
        references: {
            model: "categories",
            key: "_id"
        }
    },
}, { sequelize, modelName: "PostCategory", tableName: "postsCategories" })