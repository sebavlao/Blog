import { Author } from "./models/authors.js";
import { Category } from "./models/categories";
import { Post } from "./models/post.js";
import { PostCategory } from "./models/post-categories.js";

Author.hasMany(Post, { foreignKey: "authorId" });
Post.belongsTo(Author, { foreignKey: "authorId" });
Post.belongsToMany(Category, { through: PostCategory, foreignKey: "postId" });
Category.belongsToMany(Post, { through: PostCategory, foreignKey: "categoryId" });

export {
    Post,
    Category,
    Author,
    PostCategory
};