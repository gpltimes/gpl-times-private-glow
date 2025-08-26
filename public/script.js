// GPL Times JavaScript functionality - Minimal version

// Countdown Timer
function updateCountdown() {
    const targetDate = new Date('2026-01-01T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// User Type Selector - Simplified
let selectedType = null;

function toggleUserType(type) {
    const memberCard = document.querySelector('.user-type-card:first-child');
    const guestCard = document.querySelector('.user-type-card:last-child');
    const memberContent = document.querySelector('.member-content');
    const guestContent = document.querySelector('.guest-content');
    const selectionHint = document.querySelector('.selection-hint');

    // Remove active class from both cards
    memberCard.classList.remove('active');
    guestCard.classList.remove('active');

    // Hide both contents
    memberContent.style.display = 'none';
    guestContent.style.display = 'none';

    if (selectedType === type) {
        selectedType = null;
        selectionHint.style.display = 'none';
    } else {
        selectedType = type;
        selectionHint.style.display = 'block';

        if (type === 'member') {
            memberCard.classList.add('active');
            memberContent.style.display = 'block';
        } else if (type === 'guest') {
            guestCard.classList.add('active');
            guestContent.style.display = 'block';
        }
    }
}

// FAQ Toggle - Simplified
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const isActive = faqItem.classList.contains('active');

    // Close all other FAQ items
    const allItems = document.querySelectorAll('.faq-item');
    allItems.forEach(item => {
        item.classList.remove('active');
        const answer = item.querySelector('.faq-answer');
        if (answer) answer.classList.add('hidden');
    });

    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
        faqAnswer.classList.remove('hidden');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Remove loading state
    document.body.classList.remove('loading');
});