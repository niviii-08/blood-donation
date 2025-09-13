// bloodconnect.js

// Global variables
let currentUser = null;
let searchResults = [];

// Emergency request function
function emergencyRequest() {
    showNotification('Emergency request activated! Notifying nearby donors and blood banks...');

    setTimeout(() => {
        showNotification('5 compatible donors found within 3km radius!');
    }, 2000);

    setTimeout(() => {
        showNotification('2 blood banks have confirmed immediate availability!');
    }, 4000);
}

// Search functionality
function searchDonors() {
    const bloodType = document.getElementById('blood-type').value;
    const location = document.getElementById('location').value;
    const urgency = document.getElementById('urgency').value;

    if (!bloodType) {
        showNotification('Please select a blood type first');
        return;
    }

    document.getElementById('search-text').style.display = 'none';
    document.getElementById('search-loading').style.display = 'inline-block';

    setTimeout(() => {
        document.getElementById('search-text').style.display = 'inline-block';
        document.getElementById('search-loading').style.display = 'none';

        const donorCount = Math.floor(Math.random() * 20) + 5;
        showNotification(`Found ${donorCount} compatible ${bloodType} donors nearby!`);
        updateDashboard();
    }, 2000);
}

// Registration functions
function showLogin() {
    showNotification('Login functionality - Would integrate with Aadhaar verification');
}

function showRegister() {
    showNotification('Registration with Aadhaar verification - Preventing fraud');
}

function registerDonor() {
    showNotification('Donor registration started - Aadhaar verification required');
}

function findBlood() {
    document.getElementById('blood-type').focus();
    showNotification('Enter your blood type requirements');
}

// Dashboard functions
function viewDonors() {
    showNotification('Loading donor profiles with eligibility status...');
}

function viewBloodBanks() {
    showNotification('Loading blood bank locations with live stock data...');
}

function viewEmergencies() {
    showNotification('Loading active emergency requests in your area...');
}

// Location update
function updateLocation() {
    const location = document.getElementById('location').value;
    if (location.length > 3) {
        showNotification(`Searching in ${location} area...`);
    }
}

// Notification system
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');

    notificationText.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// Update dashboard with live data
function updateDashboard() {
    const bloodStock = document.getElementById('blood-stock');
    const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    const statuses = ['High', 'Low', 'Critical', 'Available'];
    const colors = ['#48bb78', '#ed8936', '#e53e3e', '#48bb78'];

    setTimeout(() => {
        bloodStock.innerHTML = bloodTypes.slice(0, 4).map(type => {
            const statusIndex = Math.floor(Math.random() * statuses.length);
            return `
                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                    <span>${type}</span>
                    <span style="color: ${colors[statusIndex]}; font-weight: bold;">${statuses[statusIndex]}</span>
                </div>
            `;
        }).join('');
    }, 1000);
}

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    setInterval(updateDashboard, 30000);

    setTimeout(() => {
        showNotification('Welcome to BloodConnect - Your life-saving platform is ready!');
    }, 1000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
