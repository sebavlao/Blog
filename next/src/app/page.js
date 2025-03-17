import { getPosts } from "@/api/get-posts.js";
import { colors } from "@/helpers/colors.js";
import { MainPost } from "@/app/components/containers/main-post.js";
import { GridCard } from "@/app/components/containers/grid-card.js";
import { PaginationComponent } from "@/app/components/pagination.js";

export default async function Home({ searchParams }) {
  const response = await getPosts(searchParams.page);
  const { posts, getPostData } = response;

  if (posts.data.length <= 0) return <h1>Nada que mostrar</h1>;
  const mainPost = getPostData(0);
  const url = "http://localhost:1337";

  return (
    <>
      <main className="flex min-h-screen gap-12 flex-col items-center justify-between sm:px-6 px-2 py-6">
        <MainPost
          post={mainPost}
          classBase={colors[mainPost.category.color].bg + " bg-opacity-10"}
          classContent={colors[mainPost.category.color].text}
          url={url}
        />
        <GridCard posts={posts} url={url} getPostFunction={getPostData} />
        <PaginationComponent
          page={posts.meta.pagination.page}
          pageCount={posts.meta.pagination.pageCount}
        />
      </main>
    </>
  );
}
