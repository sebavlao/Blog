

import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"

export const Form = () => {

    const actionForm = async form => {
        "use server"
        const name = form.get("title");
        const body = form.get("body");
        const file = form.get("file");
        const author = form.get("author");
        console.log(name, body, file, author)
    }

    return (
        <form action={actionForm}>
            <ul className="grid grid-cols-2 gap-2">
                <li>
                    <Input type="text" label="Title" name="title"></Input>
                </li>
                <li>
                    <Input type="text" label="Body" name="body"></Input>
                </li>
                <li>
                    <Input type="file" label="select" name="file"></Input>
                </li>
                <li>
                    <Input type="text" label="author"></Input>
                </li>
                <li className="justify-self-center col-span-2">
                    <Button type="submit">Submit</Button>
                </li>
            </ul>
        </form>
    )
}