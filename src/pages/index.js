import Head from "next/head";
import Script from "next/script";
import "@/styles/bloodconnect.css"; // move CSS into src/styles/ instead of public/css

export default function Home() {
  return (
    <>
      <Head>
        <title>BloodConnect</title>
      </Head>

      <div>
        {/* Paste your HTML body content here */}
      </div>

      {/* Load your JS correctly */}
      <Script src="/js/bloodconnect.js" strategy="afterInteractive" />
    </>
  );
}
