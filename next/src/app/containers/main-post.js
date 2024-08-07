import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";
import { CategoryChip } from "@/app/components/category-chip.js";

export const MainPost = ({ attributes, postImage, category, iconCategory, author, authorAvatar,  classBase, classContent, url }) => (
    <section className="w-full max-w-5xl sm:px-6 relative">
        <article className="absolute z-0 xl:h-[500px] max-sm:left-0 max-sm:px-2">
        <Image
            className="max-h-[500px]"
            src={`${url}${postImage.formats.large.url}`}
            width={970}
            srcSet={`${url}${postImage.formats.small.url} 480w, ${url}${postImage.formats.medium.url} 768w, ${url}${postImage.formats.large.url} 1024w` }
            sizes="(max-width: 768px) 80vw, 100vw"
        />
        </article>
        <article className="max-w-[600px] relative bottom-0 flex flex-col z-10 xl:h-[550px] justify-end sm:pl-10">
            <Card className="p-4 max-sm:h-[270px]">
                <CardHeader>
                    <CategoryChip name={category.name} classBase={classBase} classContent={classContent} url={url} icon={iconCategory.url}/>
                </CardHeader>
                <CardBody>
                    <h1 className="w-full font-semibold text-2xl sm:text-4xl line-clamp-3">
                        {attributes.title}
                    </h1>
                </CardBody>
                <CardFooter className="flex gap-4">
                    <Avatar src={`${url}${authorAvatar.formats.thumbnail.url}`}/>
                    <p className="font-semibold opacity-70">{author.name} {author.lastname}</p>
                    <p className="opacity-70">{attributes.created}</p>
                </CardFooter>
            </Card>
        </article>
    </section>
)