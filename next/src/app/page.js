
import { getPosts } from "@/api/get-posts.js"
import { colors } from "@/helpers/colors.js"
import { MainPost } from "@/app/containers/main-post.js";
import { GridCard } from "@/app/containers/grid-card.js";

export default async function Home() {
  const { posts, getPostData } = await getPosts()
  const mainPost = getPostData(0)
  const url = "http://localhost:1337"

  return (
    <>
      <main className="flex min-h-screen gap-12 flex-col items-center justify-between sm:px-6 px-2 py-6">
        <MainPost
          post={mainPost}
          classBase={colors[mainPost.category.color].bg + " bg-opacity-10"}
          classContent={colors[mainPost.category.color].text}
          url={url}
        />
        <GridCard 
          posts={posts} 
          url={url} 
          getPostFunction={getPostData}
          classBase={colors[mainPost.category.color].bg + " bg-opacity-10"}
          classContent={colors[mainPost.category.color].text}
        />
      </main>
    </>
  );
}
