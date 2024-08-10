import { Avatar } from "@nextui-org/avatar";
import { CategoryChip } from "@/app/components/category-chip.js";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export const CardPost = ({ post, cardStyle, descriptionStyle, fontAuthorStyle, footerFontSize, classBase, classContent, url}) => (
    <Card className={cardStyle}>
        <CardHeader>
            <CategoryChip name={post.category.name} classBase={classBase} classContent={classContent} url={url} icon={post.iconCategory.url}/>
        </CardHeader>
        <CardBody>
            <h1 className={descriptionStyle}>
                {post.attributes.title}
            </h1>
        </CardBody>
        <CardFooter className={`${footerFontSize} flex`}>
            <Avatar src={`${url}${post.authorAvatar.formats.thumbnail.url}`}/>
            <p className={`${fontAuthorStyle} opacity-70`}>{post.author.name} {post.author.lastname}</p>
            <p className="opacity-70">{post.attributes.created}</p>
        </CardFooter>
    </Card>
)