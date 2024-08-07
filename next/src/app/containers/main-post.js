import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";
import { CategoryChip } from "@/app/components/category-chip.js";

export const MainPost = ({ attributes, postImage, category, iconCategory, author, authorAvatar,  classBase, classContent, url }) => (
    <section className="w-full max-w-5xl sm:px-6 relative xl:min-h-[500px] flex flex-col xl:px-6 max-sm:px-2">
        <article className="z-0 max-sm:h-[270px] w-full max-w-[1024px]">
        <Image
            className="xl:h-[500px] md:h-[400px] h-[270px]"
            src={`${url}${postImage.formats.large.url}`}
            width={"100%"}
            srcSet={`${url}${postImage.formats.small.url} 480w, ${url}${postImage.formats.medium.url} 768w, ${url}${postImage.formats.large.url} 1024w` }
            sizes="(max-width: 768px) 80vw, 100vw"
        />
        </article>
        <article className="max-w-[768px] md:max-w-[600px] -mt-24 md:-mt-52 xl:-mt-60 flex flex-col justify-end xl:pl-10 md:pl-5 h-full">
            <Card className="p-4 h-[280px] lg:h-72">
                <CardHeader>
                    <CategoryChip name={category.name} classBase={classBase} classContent={classContent} url={url} icon={iconCategory.url}/>
                </CardHeader>
                <CardBody>
                    <h1 className="w-full font-semibold text-2xl sm:text-3xl line-clamp-3 my-auto">
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