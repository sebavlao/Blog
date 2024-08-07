import qs from "qs";

export const getPosts = async () => {
  const qsObj = {
      fields: ["title", "body", "created", "slug"],
      populate: {
        author: {
          fields: ["name", "lastname"],
          populate: ["avatar"]
        },
        categories: {
          populate: ["icon"]
        },
        image: true
      }
    }
  
  const fetchPosts = await fetch(`http://localhost:1337/api/posts?${qs.stringify(qsObj)}`)
  const posts = await fetchPosts.json()

  const postAttributes = posts.data[0].attributes
  const author = postAttributes.author.data.attributes
  const authorAvatar = author.avatar.data.attributes
  const postImage = postAttributes.image.data.attributes
  const categories = postAttributes.categories.data[0].attributes
  const iconCategories = postAttributes.categories.data[0].attributes.icon.data.attributes

  return { postAttributes, author, authorAvatar, postImage, categories, iconCategories }
}