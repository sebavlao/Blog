import { Header } from "./components/header.js";
import qs from "qs";

export default function Home() {
  const qsObj = {
    fields: ["title", "body"],
    populate: {
      author: {
        fields: ["name", "lastname"],
        populate: ["avatar"]
      },
      categories: {
        populate: ["icon"]
      }
    }
  }

  console.log(qs.stringify(qsObj))

  return (
    <>
      <Header></Header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
        </div>
      </main>
    </>
  );
}
