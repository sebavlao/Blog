import { getPost } from "@/api/get-post"
import { CategoryChip } from "@/app/components/category-chip"
import { Avatar } from "@nextui-org/avatar"
import { Image } from "@nextui-org/image"
import { colors } from "@/helpers/colors"

export default async function PostDetails({ params }) {
    const post = await getPost(params.postSLUG)
    const url = "http://localhost:1337"
    return (
        <main>
            <section>
                <CategoryChip 
                name={post.category.name} 
                classBase={colors[post.category.color].bg + " bg-opacity-10"}
                classContent={colors[post.category.color].text}
                url={url}
                icon={post.iconCategory.url}
                />
                <h1>{post.attributes.title}</h1>
                <div className="flex">
                    <Avatar src={`${url}${post.authorAvatar.formats.thumbnail.url}`}/>
                    <p className="font-semibold font opacity-50">{post.author.name} {post.author.lastname}</p>
                    <p className="opacity-70">{post.attributes.created}</p>
                </div>
                <Image
                    className="h-[200px] max-sm:max-w-[300px] max-w-sm rounded-md"
                    src={`${url}${post.image.url}`}
                    width={"100%"}
                    srcSet={
                        `${post.image.formats.small?.url ? `${url}${post.image.formats.small.url} 480w, ` : ''}` +
                        `${post.image.formats.medium?.url ? `${url}${post.image.formats.medium.url} 768w, ` : ''}` +
                        `${post.image.formats.large?.url ? `${url}${post.image.formats.large.url} 1024w` : ''}`
                    }
                    sizes="(max-width: 480px) 240px, (max-width: 768px) 334px, 512px"
                />
            </section>
        </main>
    )
}