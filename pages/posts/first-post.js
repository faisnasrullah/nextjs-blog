import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>My First Post</title>
          <Script
            src='https://connect.facebook.net/en_US/sdk.js'
            strategy='lazyOnload'
            onLoad={() =>
              console.log(
                `script loaded correctly, window.FB has been populated`
              )
            }
          />
        </Head>
        <h1>My First Post</h1>
        <h2>
          <Link href='/'>
            <a>Back to Home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
