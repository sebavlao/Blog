import qs from "qs";
import { API_BACK } from "../config/config";

export const getPosts = async (page) => {
  const qsObj = {
    fields: ["title", "created", "slug"],
    populate: {
      author: {
        fields: ["name", "lastname"],
        populate: ["avatar"],
      },
      categories: {
        populate: ["icon"],
      },
      image: true,
    },
    sort: ["created:desc"],
    "pagination[page]": page || 1,
    "pagination[pageSize]": 10,
  };

  console.log(`${API_BACK}/api/posts?${qs.stringify(qsObj)}`);

  const fetchPosts = await fetch(
    `${API_BACK}/api/posts?${qs.stringify(qsObj)}`
  );

  const posts = await fetchPosts.json();

  const getPostData = (index) => {
    const attributes = posts.data[index].attributes;
    const author = attributes.author.data.attributes;
    const authorAvatar = author.avatar.data.attributes;
    const image = attributes.image.data.attributes;
    const category = attributes.categories.data[0].attributes;
    const iconCategory =
      attributes.categories.data[0].attributes.icon.data.attributes;

    return {
      attributes,
      author,
      authorAvatar,
      image,
      category,
      iconCategory,
    };
  };

  return { posts, getPostData };
};
