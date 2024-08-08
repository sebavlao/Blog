import { Avatar } from "@nextui-org/avatar";
import { CategoryChip } from "@/app/components/category-chip.js";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export const Card = ({ cardStyle, descriptionStyle, fontAuthorStyle, attributes, category, classBase, classContent, url, iconCategory}) => (
    <Card className={cardStyle}>
        <CardHeader>
            <CategoryChip name={category.name} classBase={classBase} classContent={classContent} url={url} icon={iconCategory.url}/>
        </CardHeader>
        <CardBody>
            <h1 className={descriptionStyle}>
                {attributes.title}
            </h1>
        </CardBody>
        <CardFooter className="flex gap-4">
            <Avatar src={`${url}${authorAvatar.formats.thumbnail.url}`}/>
            <p className={`${fontAuthorStyle} opacity-70`}>{author.name} {author.lastname}</p>
            <p className="opacity-70">{attributes.created}</p>
        </CardFooter>
    </Card>
)