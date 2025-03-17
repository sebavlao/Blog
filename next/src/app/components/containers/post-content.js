import * as React from "react";
import { CategoryChip } from "@/app/components/category-chip";
import { Avatar } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";

export const PostContent = ({
  post,
  postBody,
  classBase,
  classContent,
  url,
}) => (
  <section className="xl:w-[800px] w-full grid gap-7 max-w-[390px] sm:max-w-[660px] xl:max-w-[800px]">
    <article className="w-full grid gap-7">
      <CategoryChip
        name={post.category.name}
        classBase={classBase}
        classContent={classContent}
        url={url}
        icon={post.iconCategory.url}
      />
      <h1 className="font-semibold sm:text-xl md:text-2xl xl:text-4xl">
        {post.attributes.title}
      </h1>
      <div className="flex items-center gap-4">
        <Avatar src={`${url}${post.authorAvatar.formats?.thumbnail?.url}`} />
        <p className="font-semibold font opacity-50">
          {post.author.name} {post.author.lastname}
        </p>
        <p className="opacity-70">{post.attributes.created}</p>
      </div>
      <Image
        className="max-h-[448px] max-w-[390px] sm:max-w-[660px] xl:max-w-[800px] rounded-xl"
        src={`${url}${post.image.url}`}
        width={"100%"}
        srcSet={
          `${
            post.image.formats?.small?.url
              ? `${url}${post.image.formats.small.url} 400w, `
              : ""
          }` +
          `${
            post.image.formats?.medium?.url
              ? `${url}${post.image.formats.medium.url} 670w, `
              : ""
          }` +
          `${
            post.image.formats?.large?.url
              ? `${url}${post.image.formats.large.url} 857w`
              : ""
          }`
        }
        sizes="(max-width: 400px) 200px, (max-width: 670px) 335px, 428.5px"
      />
    </article>
    <article className="text-xl px-1">{postBody}</article>
  </section>
);
