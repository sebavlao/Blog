import { Header } from "./components/header.js";
import { getPosts } from "@/api/get-posts.js"
import { colors } from "@/helpers/colors.js"
import { MainPost } from "@/app/containers/main-post.js";
import { CardPost } from "@/app/components/card.js";

export default async function Home() {
  const { posts, getPostData } = await getPosts()
  const mainPost = getPostData(0)
  const url = "http://localhost:1337"

  return (
    <>
      <Header></Header>
      <main className="flex min-h-screen flex-col items-center justify-between sm:px-6 px-2 py-6">
        <MainPost
          post={mainPost}
          classBase={colors[mainPost.category.color].bg + " bg-opacity-10"}
          classContent={colors[mainPost.category.color].text}
          url={url}
        />
        <section>
          {posts.data.slice(1).map((_, index) => {
            const post = getPostData(index + 1)
            const classBase = colors[mainPost.category.color].bg + " bg-opacity-10"
            const classContent = colors[mainPost.category.color].text

            return (
              <CardPost key={index + 1}
              post={post}
              cardStyle="p-4 h-[280px] lg:h-72" 
              descriptionStyle="w-full font-semibold text-2xl sm:text-3xl line-clamp-3 my-auto"
              fontAuthorStyle="font-semibold"
              classBase={classBase}
              classContent={classContent}
              url={url}/>
            )
          })}
        </section>
      </main>
    </>
  );
}
