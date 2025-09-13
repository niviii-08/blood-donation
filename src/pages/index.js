import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>BloodConnect</title>
      </Head>

      <header>
        <div className="container nav">
          <div className="logo">BloodConnect</div>
          <nav>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/find-donors">Find Donors</Link></li>
              <li><Link href="/donate">Donate</Link></li>
              <li><Link href="/emergency">Emergency</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Donate Blood, Save Lives</h1>
            <p>Join our mission to connect donors with those in need.</p>
            <div className="hero-buttons">
              <Link href="/find-donors" className="btn btn-primary">
                Find Donors
              </Link>
              <Link href="/donate" className="btn btn-outline">
                Donate Now
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            {/* Emergency button calls global JS function */}
            <button
              className="emergency-button"
              onClick={() => window.emergencyRequest?.()}
            >
              Emergency
            </button>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} BloodConnect. All rights reserved.</p>
      </footer>

      <Script src="/js/bloodconnect.js" strategy="afterInteractive" />
    </>
  );
}
