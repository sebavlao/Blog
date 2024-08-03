import { Header } from "./components/header.js";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import qs from "qs";

export default async function Home() {
  const qsObj = {
    fields: ["title", "body"],
    populate: {
      author: {
        fields: ["name", "lastname"],
        populate: ["avatar"]
      },
      categories: {
        populate: ["icon"]
      },
      image: true
    }
  }

  const fetchPosts = await fetch(`http://localhost:1337/api/posts?${qs.stringify(qsObj)}`)
  const posts = await fetchPosts.json()

  const image = posts.data[0].attributes.image.data.attributes
  const categories = posts.data[0].attributes.categories.data[0].attributes
  const iconCategories = posts.data[0].attributes.categories.data[0].attributes.icon.data.attributes

  console.log(categories.color)
  

  return (
    <>
      <Header></Header>
      <main className="flex min-h-screen flex-col items-center justify-between px-6">
        <section className="bg-slate-900 w-full max-w-5xl px-6 overflow-hidden max-h-[680px]">
          <article className="flex justify-center">
            <Image 
              src={`http://localhost:1337${image.formats.large.url}`}
              width={970}
              height={500}
            />
          </article>
          <article className="max-w-[500px]">
            <Card>
              <CardHeader>
                <Chip startContent={<Image src={`http://localhost:1337${iconCategories.url}`}/>} classNames={{
                  base: `bg-[${categories.color}] bg-opacity-20`,
                  content: `font-bold text-[${categories.color}]`
                }}>
                    {categories.name}
                </Chip>
              </CardHeader>
            </Card>
          </article>
        </section>
      </main>
    </>
  );
}
