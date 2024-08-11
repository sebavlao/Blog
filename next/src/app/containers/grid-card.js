import { Image } from "@nextui-org/image";
import { CardPost } from "@/app/components/card";
import Link from "next/link";

export const GridCard = ({ posts, url, getPostFunction, classBase, classContent }) => (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-5xl gap-4 justify-items-center">
        {posts.data.map((_, index) => {
            if (index === 0) return;
            
            const post = getPostFunction(index)

            return (
                <article key={index} className="border hover:shadow-md transition-shadow cursor-pointer rounded-xl max-sm:w-80 w-[340px] h-[450px] overflow-hidden p-2 flex flex-col justify-between">
                    <Link href={`/post/${post.attributes.slug}`}>
                        <Image
                            className="h-[200px] max-sm:max-w-[300px] max-w-sm rounded-md"
                            src={`${url}${post.image.url}`}
                            width={"100%"}
                            srcSet={
                            `${post.image.formats.small?.url ? `${url}${post.image.formats.small.url} 300w,` : ''}`
                            }
                            sizes="100vw"
                        />
                        <CardPost key={index}
                            post={post}
                            cardStyle="rounded-none shadow-none h-56" 
                            descriptionStyle="w-full font-semibold text-lg sm:text-xl line-clamp-3 my-auto"
                            fontAuthorStyle="font-semibold"
                            footerFontSize="text-sm gap-2"
                            classBase={classBase}
                            classContent={classContent}
                            url={url}
                        />
                    </Link>
                </article>
            )
        })}
    </section>
)