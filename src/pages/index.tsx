import Head from "next/head";
import DefaultLayout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Manual from Victor Biasibetti" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>CONTENT</DefaultLayout>
    </>
  );
}
