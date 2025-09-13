// src/pages/_app.js
import "@/styles/bloodconnect.css"; // ✅ global import

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
