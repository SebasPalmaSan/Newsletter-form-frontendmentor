import { EmailForm } from "@/components/email-form";
import ItemList from "@/components/list-item";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-800 grid place-content-center">
      <article className="grid grid-cols-1 md:grid-cols-2 md:min-w-[700px] md:min-h-[600px] bg-white rounded-3xl md:p-8 items-center">
        <section className="space-y-6 md:p-10 order-last p-6 md:space-y-10">
          <h1 className="md:text-6xl text-4xl font-bold md:text-center tracking-normal text-gray-800">Stay Updated!</h1>
          <p className="text-gray-600 text-sm">Join 60.000+ product manager receiving monthly updates on:</p>
          <ul className="text-gray-600 text-sm">

            <ItemList>Product discovery and building whats matters</ItemList>
            <ItemList>Measuring to ensure updates are a success</ItemList>
            <ItemList>And much more</ItemList>

          </ul>
          <EmailForm />
        </section>
        <section className="bg-white rounded-r-3xl md:order-last">
          <Image
            src='/main-image.svg'
            width={500}
            height={500}
            alt='MainImages'
            className="object-cover w-full"
          />
        </section>

      </article>
    </div>
  )
}

export default HomePage;
