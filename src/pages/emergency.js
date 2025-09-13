import Head from "next/head";
import { useState } from "react";

export default function Emergency() {
    const [requests] = useState([
        {
            id: 1,
            patientName: "Ravi Kumar",
            bloodType: "O-",
            urgency: "critical",
            hospital: "Coimbatore Medical College",
            location: "Race Course Road",
            timePosted: "15 minutes ago",
            unitsNeeded: 3,
            contact: "+91-9876543210",
            condition: "Accident victim, massive blood loss",
        },
        {
            id: 2,
            patientName: "Priya Sharma",
            bloodType: "A+",
            urgency: "urgent",
            hospital: "Ganga Hospital",
            location: "Mettupalayam Road",
            timePosted: "2 hours ago",
            unitsNeeded: 2,
            contact: "+91-9876543211",
            condition: "Surgery complications",
        },
        {
            id: 3,
            patientName: "Child Patient",
            bloodType: "B-",
            urgency: "critical",
            hospital: "KMC Hospital",
            location: "Avanashi Road",
            timePosted: "45 minutes ago",
            unitsNeeded: 1,
            contact: "+91-9876543212",
            condition: "Pediatric emergency",
        },
    ]);

    const respondToRequest = (id) => {
        alert(`You responded to request ID ${id}`);
    };

    const shareRequest = (id) => {
        alert(`You shared request ID ${id}`);
    };

    const getUrgencyColor = (urgency) => {
        switch (urgency) {
            case "critical":
                return "#ff6b6b";
            case "urgent":
                return "#f59e0b";
            default:
                return "#22c55e";
        }
    };

    return (
        <>
            <Head>
                <title>Emergency Requests</title>
            </Head>

            <main className="container">
                <h1>Emergency Blood Requests</h1>

                <div id="emergency-requests">
                    {requests.map((request) => (
                        <div
                            key={request.id}
                            className="request-card"
                            style={{ borderLeft: `4px solid ${getUrgencyColor(request.urgency)}`, marginBottom: "1rem", padding: "1rem", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}
                        >
                            <div className="request-header" style={{ display: "flex", justifyContent: "space-between" }}>
                                <h4 style={{ color: "#333" }}>{request.patientName}</h4>
                                <span className={`request-urgency urgency-${request.urgency}-badge`}>
                                    {request.urgency}
                                </span>
                            </div>

                            <div className="blood-type-needed" style={{ margin: "0.5rem 0" }}>
                                🩸 {request.bloodType} — {request.unitsNeeded} Units
                            </div>

                            <div className="request-details">
                                <div>🏥 {request.hospital}</div>
                                <div>📍 {request.location}</div>
                                <div>⏰ Posted {request.timePosted}</div>
                                <div>📞 {request.contact}</div>
                                <div>📋 {request.condition}</div>
                            </div>

                            <div className="request-actions" style={{ marginTop: "1rem" }}>
                                <button
                                    className="btn-respond"
                                    onClick={() => respondToRequest(request.id)}
                                    style={{ marginRight: "0.5rem" }}
                                >
                                    🤝 I Can Help
                                </button>
                                <button
                                    className="btn-share"
                                    onClick={() => shareRequest(request.id)}
                                >
                                    📤 Share Request
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
