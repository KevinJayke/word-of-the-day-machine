import fetchWord from "@/library/fetchWord";
import "../app/globals.css";
import Head from "next/head";
import metadata from "@/app/metadata";

export async function getStaticProps() {
  const data = await fetchWord();

  // Retournez les données sous forme de props pour la page
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <main>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Other metadata */}
      </Head>
      {console.log(data)}
      <h1>First Post</h1>
      <p className="mb-3 text-3xl font-semibold">
        Learn about Next.js in an interactive course with&nbsp;quizzes!
      </p>
    </main>
  );
}
