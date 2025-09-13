// src/pages/donate.js
import Head from "next/head";
import Script from "next/script";
import "@/styles/donate.css"; // ✅ move donate.css into src/styles/

export default function Donate() {
    return (
        <>
            <Head>
                <title>Donate Blood</title>
            </Head>

            <main>
                {/* Paste your HTML body content here */}
            </main>

            {/* ✅ Load your custom JS properly */}
            <Script src="/js/donate.js" strategy="afterInteractive" />
        </>
    );
}
