import "@/styles/globals.css";        // already exists usually
import "@/styles/bloodconnect.css";  // ✅ add your global styles here
import "@/styles/donate.css";
import "@/styles/find-donors.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
