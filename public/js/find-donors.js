// Sample donor data
const donorsDatabase = [
    { id: 1, name: "Rajesh Kumar", bloodType: "O+", age: 28, gender: "Male", location: "RS Puram, Coimbatore", distance: "2.3 km", lastDonation: "3 months ago", totalDonations: 12, status: "available", phone: "+91-9876543210", verified: true },
    { id: 2, name: "Priya Sharma", bloodType: "A+", age: 25, gender: "Female", location: "Gandhipuram, Coimbatore", distance: "1.8 km", lastDonation: "4 months ago", totalDonations: 8, status: "available", phone: "+91-9876543211", verified: true },
    { id: 3, name: "Amit Patel", bloodType: "B+", age: 32, gender: "Male", location: "Peelamedu, Coimbatore", distance: "3.1 km", lastDonation: "2 months ago", totalDonations: 15, status: "recent", phone: "+91-9876543212", verified: true },
    { id: 4, name: "Kavya Reddy", bloodType: "O-", age: 29, gender: "Female", location: "Saravanampatti, Coimbatore", distance: "4.5 km", lastDonation: "5 months ago", totalDonations: 6, status: "available", phone: "+91-9876543213", verified: true },
    { id: 5, name: "Suresh Babu", bloodType: "AB+", age: 35, gender: "Male", location: "Singanallur, Coimbatore", distance: "2.8 km", lastDonation: "1 month ago", totalDonations: 20, status: "busy", phone: "+91-9876543214", verified: true },
    { id: 6, name: "Meera Nair", bloodType: "A-", age: 26, gender: "Female", location: "Vadavalli, Coimbatore", distance: "5.2 km", lastDonation: "6 months ago", totalDonations: 4, status: "available", phone: "+91-9876543215", verified: true }
];

function searchDonors() {
    const bloodType = document.getElementById('blood-type-needed').value;
    const availability = document.getElementById('availability').value;

    document.getElementById('search-text').style.display = 'none';
    document.getElementById('search-loading').style.display = 'inline-block';

    setTimeout(() => {
        document.getElementById('search-text').style.display = 'inline-block';
        document.getElementById('search-loading').style.display = 'none';

        let filteredDonors = donorsDatabase;

        if (bloodType) {
            filteredDonors = filteredDonors.filter(d => d.bloodType === bloodType || isCompatible(bloodType, d.bloodType));
        }

        if (availability === 'available') {
            filteredDonors = filteredDonors.filter(d => d.status === 'available');
        }

        displayResults(filteredDonors, bloodType);
    }, 1500);
}

function isCompatible(needed, donorType) {
    const compatibility = {
        'O+': ['O+', 'A+', 'B+', 'AB+'],
        'O-': ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
        'A+': ['A+', 'AB+'],
        'A-': ['A+', 'A-', 'AB+', 'AB-'],
        'B+': ['B+', 'AB+'],
        'B-': ['B+', 'B-', 'AB+', 'AB-'],
        'AB+': ['AB+'],
        'AB-': ['AB+', 'AB-']
    };
    return compatibility[donorType] && compatibility[donorType].includes(needed);
}

function displayResults(donors, searchedBloodType) {
    const resultsSection = document.getElementById('results-section');
    const resultsCount = document.getElementById('results-count');
    const donorResults = document.getElementById('donor-results');

    resultsSection.style.display = 'block';
    resultsCount.textContent = `Found ${donors.length} compatible donors for ${searchedBloodType || 'your search'}`;

    if (donors.length === 0) {
        donorResults.innerHTML = `<div class="no-results"><h3>No donors found</h3><p>Try adjusting your search criteria or expanding the search radius.</p></div>`;
        return;
    }

    donorResults.innerHTML = donors.map(d => `
        <div class="donor-card">
            <div class="donor-header">
                <div class="donor-avatar">${d.name.charAt(0)}</div>
                <div class="donor-info">
                    <h3>${d.name}</h3>
                    <span class="blood-type">${d.bloodType}</span>
                </div>
            </div>
            <div class="donor-details">
                <div class="detail-item">📍 ${d.location}</div>
                <div class="detail-item">📏 ${d.distance} away</div>
                <div class="detail-item">🎂 ${d.age} years old</div>
                <div class="detail-item">🩸 ${d.totalDonations} donations</div>
                <div class="detail-item">📅 Last: ${d.lastDonation}</div>
                <div class="detail-item">✅ Verified donor</div>
            </div>
            <div class="status-badge status-${d.status}">● ${d.status === 'available' ? 'Available Now' : d.status === 'busy' ? 'Currently Busy' : 'Recently Donated'}</div>
            <div class="donor-actions">
                <button class="btn-contact" onclick="contactDonor(${d.id})" ${d.status !== 'available' ? 'disabled' : ''}>📞 Contact Donor</button>
                <button class="btn-message" onclick="messageDonor(${d.id})">💬 Message</button>
            </div>
        </div>
    `).join('');

    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function contactDonor(id) {
    const donor = donorsDatabase.find(d => d.id === id);
    if (donor) alert(`Contacting ${donor.name}\nPhone: ${donor.phone}\n\nThis would open your phone app or WhatsApp in a real implementation.`);
}

function messageDonor(id) {
    const donor = donorsDatabase.find(d => d.id === id);
    if (donor) alert(`Opening chat with ${donor.name}\n\nThis would open the in-app messaging system in a real implementation.`);
}

// Auto-search on page load if coming from emergency request
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const bloodType = urlParams.get('bloodType');
    const emergency = urlParams.get('emergency');

    if (bloodType) {
        document.getElementById('blood-type-needed').value = bloodType;
        if (emergency === 'true') document.getElementById('urgency').value = 'emergency';
        searchDonors();
    }
});
