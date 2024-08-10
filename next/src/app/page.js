import { Header } from "./components/header.js";
import { getPosts } from "@/api/get-posts.js"
import { colors } from "@/helpers/colors.js"
import { MainPost } from "@/app/containers/main-post.js";
import { CardPost } from "@/app/components/card.js";
import { Image } from "@nextui-org/image";

export default async function Home() {
  const { posts, getPostData } = await getPosts()
  const mainPost = getPostData(0)
  const url = "http://localhost:1337"

  return (
    <>
      <Header></Header>
      <main className="flex min-h-screen gap-4 flex-col items-center justify-between sm:px-6 px-2 py-6">
        <MainPost
          post={mainPost}
          classBase={colors[mainPost.category.color].bg + " bg-opacity-10"}
          classContent={colors[mainPost.category.color].text}
          url={url}
        />
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 max-w-5xl gap-4">
          {posts.data.map((_, index) => {
            if (index === 0) return;
            
            const post = getPostData(index)
            const classBase = colors[mainPost.category.color].bg + " bg-opacity-10"
            const classContent = colors[mainPost.category.color].text
            console.log(post.image.formats)

            return (
              <article key={index} className="border rounded-lg p-0.5 max-w-xs">
                <Image
                  className="xl:h-[500px] md:h-[400px] h-[270px]"
                  src={`${url}${post.image.formats.large.url}`}
                  width={"100%"}
                  srcSet={`${url}${post.image.formats.small.url} 480w, ${url}${post.image.formats.medium.url} 768w, ${url}${post.image.formats.large.url} 1024w` }
                  sizes="(max-width: 768px) 80vw, 100vw"
                />
                <CardPost key={index}
                  post={post}
                  cardStyle="p-4 rounded-none shadow-none h-[280px] lg:h-72" 
                  descriptionStyle="w-full font-semibold text-lg sm:text-xl line-clamp-3 my-auto"
                  fontAuthorStyle="font-semibold"
                  footerFontSize="text-sm gap-2"
                  classBase={classBase}
                  classContent={classContent}
                  url={url}
                />
              </article>
            )
          })}
        </section>
      </main>
    </>
  );
}
