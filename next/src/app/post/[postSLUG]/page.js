import { getPost } from "@/api/get-post"
import { childType } from "@/helpers/body-parser"
import { colors } from "@/helpers/colors"
import { PostContent } from "@/app/containers/post-content"

export default async function PostDetails({ params }) {
    const post = await getPost(params.postSLUG)
    const url = "http://localhost:1337"

    const content = post.attributes.body.map((blocks, index) => {
        return childType(blocks, index)
    })

    return (
        <main className="flex min-h-screen gap-12 flex-col items-center justify-between sm:px-6 px-2 py-6">
            <PostContent 
                post={post} 
                postBody={content} 
                classBase={colors[post.category.color].bg + " bg-opacity-10"}
                classContent={colors[post.category.color].text}
                url={url}
            />
        </main>
    )
}