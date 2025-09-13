// Set minimum date to tomorrow
document.addEventListener('DOMContentLoaded', function () {
    const dateInput = document.getElementById('preferred-date');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
});

// Eligibility Check
function checkEligibility() {
    const age = parseInt(document.querySelector('input[name="age"]:checked')?.value || 0);
    const weight = parseInt(document.querySelector('input[name="weight"]:checked')?.value || 0);
    const lastDonation = document.querySelector('input[name="last-donation"]:checked')?.value;

    let isEligible = true;
    let messages = [];

    if (age < 18) {
        isEligible = false;
        messages.push('Must be 18 or older');
    }
    if (weight < 50) {
        isEligible = false;
        messages.push('Weight must be at least 50kg');
    }
    if (lastDonation === 'no') {
        isEligible = false;
        messages.push('Must wait at least 3 months between donations');
    }

    const resultDiv = document.getElementById('eligibility-result');
    resultDiv.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'result-card';
    if (isEligible) {
        card.textContent = '✅ You are eligible to donate blood. Thank you!';
    } else {
        card.classList.add('not-eligible');
        card.innerHTML = '❌ Not eligible:<br>' + messages.join('<br>');
    }
    resultDiv.appendChild(card);
}

// Appointment Booking Notification
function bookAppointment() {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = '🩸 Appointment booked successfully!';
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => notification.remove(), 4000);
}
