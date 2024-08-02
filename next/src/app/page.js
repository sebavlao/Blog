import { Header } from "./components/header.js";
import { Form } from "./form.js";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <Form></Form>
        </div>
      </main>
    </>
  );
}
