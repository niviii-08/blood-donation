import Head from "next/head";
import Script from "next/script";

export default function Donate() {
    return (
        <>
            <Head>
                <title>Donate Blood</title>
            </Head>

            <main className="container">
                <h1>Become a Donor</h1>
                <p>Fill in the form below to register as a donor.</p>
                {/* Add your form here */}
            </main>

            {/* Make sure public/js/donate.js actually exists */}
            <Script src="/js/donate.js" strategy="afterInteractive" />
        </>
    );
}
