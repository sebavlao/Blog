import qs from "qs";
import { API_BACK } from "../config/config";

export const getPost = async (slug) => {
  const qsObj = {
    filters: {
      slug: slug,
    },
    fields: ["title", "created", "slug", "body"],
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
  };

  const fetchPosts = await fetch(
    `${API_BACK}/api/posts?${qs.stringify(qsObj)}`
  );
  const posts = await fetchPosts.json();

  const attributes = posts.data[0].attributes;
  const author = attributes.author.data.attributes;
  const authorAvatar = author.avatar.data.attributes;
  const image = attributes.image.data.attributes;
  const category = attributes.categories.data[0].attributes;
  const iconCategory =
    attributes.categories.data[0].attributes.icon.data.attributes;

  return { attributes, author, authorAvatar, image, category, iconCategory };
};
