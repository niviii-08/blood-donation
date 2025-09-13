import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function FindDonors() {
    const [donors, setDonors] = useState([]);

    const searchDonors = useCallback(() => {
        // Replace this with a real fetch later
        setDonors([
            { id: 1, name: "John Doe", blood: "A+" },
            { id: 2, name: "Jane Smith", blood: "O-" },
        ]);
    }, []);

    useEffect(() => {
        searchDonors();
    }, [searchDonors]);

    return (
        <>
            <Head>
                <title>Find Donors</title>
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

            <main className="container">
                <h1>Find Donors</h1>
                <ul>
                    {donors.map((d) => (
                        <li key={d.id}>
                            {d.name} — {d.blood}
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}
