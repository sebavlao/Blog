import qs from "qs";

export const getPosts = async () => {
  const qsObj = {
      fields: ["title", "created", "slug"],
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

    console.log(`http://localhost:1337/api/posts?${qs.stringify(qsObj)}`)
  
  const fetchPosts = await fetch(`http://localhost:1337/api/posts?${qs.stringify(qsObj)}`)
  const posts = await fetchPosts.json()

  const getPostData = index => {
    const attributes = posts.data[index].attributes
    const author = attributes.author.data.attributes
    const authorAvatar = author.avatar.data.attributes
    const image = attributes.image.data.attributes
    const category = attributes.categories.data[0].attributes
    const iconCategory = attributes.categories.data[0].attributes.icon.data.attributes

    return {
      attributes,
      author,
      authorAvatar,
      image,
      category,
      iconCategory
    }
  }

  return { posts, getPostData }
}