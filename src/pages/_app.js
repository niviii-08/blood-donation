// src/pages/_app.js
import "@/styles/globals.css";
import "@/styles/bloodconnect.css"; // ✅ Add here
import "@/styles/donate.css";
import "@/styles/emergency.css";
import "@/styles/find-donors.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
