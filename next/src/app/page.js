import { Header } from "./components/header.js";
import { getPosts } from "@/api/get-posts.js"
import { colors } from "@/helpers/colors.js"
import { MainPost } from "@/app/containers/main-post.js";

export default async function Home() {
  const { postAttributes, author, authorAvatar, postImage, categories, iconCategories } = await getPosts()
  const url = "http://localhost:1337"

  return (
    <>
      <Header></Header>
      <main className="flex min-h-screen flex-col items-center justify-between sm:px-6 px-2 py-6">
        <MainPost 
          attributes={postAttributes} 
          postImage={postImage}
          category={categories} 
          iconCategory={iconCategories} 
          author={author}
          authorAvatar={authorAvatar}
          classBase={colors[categories.color].bg + " bg-opacity-10"}
          classContent={colors[categories.color].text}
          url={url}
        />
      </main>
    </>
  );
}
