// emergency.js

const emergencyRequests = [
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
        condition: "Accident victim, massive blood loss"
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
        condition: "Surgery complications"
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
        condition: "Pediatric emergency"
    }
];

function displayEmergencyRequests() {
    const container = document.getElementById('emergency-requests');

    container.innerHTML = emergencyRequests.map(request => {
        const urgencyClass = `urgency-${request.urgency}-badge`;
        const borderColor = request.urgency === 'critical' ? '#ff6b6b' :
            request.urgency === 'urgent' ? '#f59e0b' : '#22c55e';

        return `
            <div class="request-card" style="border-left-color: ${borderColor};">
                <div class="request-header">
                    <h4 style="color: #333;">${request.patientName}</h4>
                    <span class="request-urgency ${urgencyClass}">${request.urgency}</span>
                </div>
                
                <div class="blood-type-needed">
                    🩸 ${request.bloodType} - ${request.unitsNeeded} Units
                </div>
                
                <div class="request-details">
                    <div class="detail-row">
                        <span>🏥</span> ${request.hospital}
                    </div>
                    <div class="detail-row">
                        <span>📍</span> ${request.location}
                    </div>
                    <div class="detail-row">
                        <span>⏰</span> Posted ${request.timePosted}
                    </div>
                    <div class="detail-row">
                        <span>📞</span> ${request.contact}
                    </div>
                    <div class="detail-row">
                        <span>📋</span> ${request.condition}
                    </div>
                </div>
                
                <div class="request-actions">
                    <button class="btn-respond" onclick="respondToRequest(${request.id})">
                        🤝 I Can Help
                    </button>
                    <button class="btn-share" onclick="shareRequest(${request.id})">
                        📤 Share Request
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Functions submitEmergencyRequest, respondToRequest, shareRequest, showNotification
// and DOMContentLoaded logic — move all your <script> content here
