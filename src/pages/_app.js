// src/pages/_app.js
import "@/styles/bloodconnect.css";  // <-- your global CSS here

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
