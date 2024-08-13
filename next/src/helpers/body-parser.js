const textStyle = props => {
    let content = props.text

    if (props.underline) {
        content = <u>{content}</u>
    }

    if (props.strikethrough) {
        content = <s>{content}</s>
    }

    if (props.italic) { 
        content = <i>{content}</i>
    }

    if (props.bold) {
        content = <b>{content}</b>
    }

    return content
}

export const childType = (child, index) => {
    if (child.type === "heading" || child.type === "paragraph") {
        let content = child.children.map(props => textStyle(props));

        if (!content[0]) return <br key={`br-${index}`}/>;
        if (child.type === "paragraph") return <p key={`p-${index}`}>{content}</p>;

        const Tag = `h${child.level}`;
        return <Tag key={`h${child.level}-${index}`}>{content}</Tag>
    }

    if (child.type === "list") {
        const listMap = child.children.map((items, i) => {
            let listItem = items.children.map(item => textStyle(item))

            return <li key={`li-${index}-${i}`}>{listItem}</li>
        })

        switch (child.format) {
            case "ordered":
                return <ol key={`ol-${index}`}>{listMap}</ol>
            case "unordered":
                return <ul key={`ul-${index}`}>{listMap}</ul>
        }
    }
}

