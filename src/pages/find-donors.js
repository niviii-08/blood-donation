import { useState, useEffect } from "react";
import Head from "next/head";
import "@/styles/find-donors.css";

export default function FindDonors() {
    const [donors, setDonors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [bloodType, setBloodType] = useState("");

    // Sample donor database
    const donorsDatabase = [
        { id: 1, name: "Rajesh Kumar", bloodType: "O+", age: 28, gender: "Male", location: "RS Puram, Coimbatore", distance: "2.3 km", lastDonation: "3 months ago", totalDonations: 12, status: "available", phone: "+91-9876543210", verified: true },
        { id: 2, name: "Priya Sharma", bloodType: "A+", age: 25, gender: "Female", location: "Gandhipuram, Coimbatore", distance: "1.8 km", lastDonation: "4 months ago", totalDonations: 8, status: "available", phone: "+91-9876543211", verified: true },
        { id: 3, name: "Amit Patel", bloodType: "B+", age: 32, gender: "Male", location: "Peelamedu, Coimbatore", distance: "3.1 km", lastDonation: "2 months ago", totalDonations: 15, status: "recent", phone: "+91-9876543212", verified: true },
        { id: 4, name: "Kavya Reddy", bloodType: "O-", age: 29, gender: "Female", location: "Saravanampatti, Coimbatore", distance: "4.5 km", lastDonation: "5 months ago", totalDonations: 6, status: "available", phone: "+91-9876543213", verified: true },
        { id: 5, name: "Suresh Babu", bloodType: "AB+", age: 35, gender: "Male", location: "Singanallur, Coimbatore", distance: "2.8 km", lastDonation: "1 month ago", totalDonations: 20, status: "busy", phone: "+91-9876543214", verified: true },
        { id: 6, name: "Meera Nair", bloodType: "A-", age: 26, gender: "Female", location: "Vadavalli, Coimbatore", distance: "5.2 km", lastDonation: "6 months ago", totalDonations: 4, status: "available", phone: "+91-9876543215", verified: true }
    ];

    function searchDonors() {
        setLoading(true);
        setTimeout(() => {
            // Filter donors based on blood type
            const filtered = donorsDatabase.filter(d => d.bloodType === bloodType || !bloodType);
            setDonors(filtered);
            setLoading(false);
        }, 1000);
    }

    function contactDonor(donor) {
        alert(`Contacting ${donor.name}\nPhone: ${donor.phone}`);
    }

    function messageDonor(donor) {
        alert(`Messaging ${donor.name}`);
    }

    // Auto-search on page load if bloodType is in query params
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const bt = params.get("bloodType");
        if (bt) {
            setBloodType(bt);
            searchDonors();
        }
    }, []);

    return (
        <>
            <Head>
                <title>Find Donors - BloodConnect</title>
            </Head>

            <header>
                <nav className="container">
                    <a href="/" className="logo">BloodConnect</a>
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/find-donors" className="active">Find Donors</a></li>
                        <li><a href="/blood-banks">Blood Banks</a></li>
                        <li><a href="/donate">Donate</a></li>
                        <li><a href="/emergency">Emergency</a></li>
                    </ul>
                </nav>
            </header>

            <main className="main-content container">
                <div className="page-header">
                    <h1>Find Blood Donors</h1>
                    <p>Connect with verified donors in your area</p>
                </div>

                {/* Search Section */}
                <section className="search-section">
                    <input
                        type="text"
                        placeholder="Enter Blood Type (e.g., O+)"
                        value={bloodType}
                        onChange={(e) => setBloodType(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={searchDonors}>
                        {loading ? "Searching..." : "🔍 Search Donors"}
                    </button>
                </section>

                {/* Results Section */}
                {donors.length > 0 && (
                    <section className="results-section">
                        <h2>Search Results ({donors.length})</h2>
                        <div className="donor-results">
                            {donors.map(d => (
                                <div key={d.id} className="donor-card">
                                    <div className="donor-header">
                                        <div className="donor-avatar">{d.name.charAt(0)}</div>
                                        <div className="donor-info">
                                            <h3>{d.name}</h3>
                                            <span className="blood-type">{d.bloodType}</span>
                                        </div>
                                    </div>
                                    <div className="donor-details">
                                        <p>📍 {d.location}</p>
                                        <p>📏 {d.distance} away</p>
                                        <p>🎂 {d.age} years old</p>
                                        <p>🩸 {d.totalDonations} donations</p>
                                        <p>📅 Last: {d.lastDonation}</p>
                                        <p>✅ Verified donor</p>
                                    </div>
                                    <div className="donor-actions">
                                        <button onClick={() => contactDonor(d)} disabled={d.status !== "available"}>
                                            📞 Contact
                                        </button>
                                        <button onClick={() => messageDonor(d)}>💬 Message</button>
                                    </div>
                                    <div className={`status-badge status-${d.status}`}>
                                        {d.status === "available" ? "Available Now" : d.status === "busy" ? "Currently Busy" : "Recently Donated"}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {donors.length === 0 && !loading && (
                    <p>No donors found. Adjust your search criteria.</p>
                )}
            </main>
        </>
    );
}
