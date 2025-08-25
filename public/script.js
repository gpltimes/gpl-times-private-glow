// GPL Times JavaScript functionality

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

// User Type Selector
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
        // If clicking the same type, deselect it
        selectedType = null;
        selectionHint.style.display = 'none';
    } else {
        // Select the new type
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

// FAQ Toggle
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const isActive = faqItem.classList.contains('active');

    // Close all other FAQ items in the same column
    const column = faqItem.closest('.faq-column');
    const allItems = column.querySelectorAll('.faq-item');
    allItems.forEach(item => {
        item.classList.remove('active');
    });

    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Smooth scrolling for internal links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Intersection Observer for animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Setup animations
    setupAnimations();

    // Add scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const userTypeSection = document.querySelector('.user-type-section');
            if (userTypeSection) {
                userTypeSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Add hover effects for benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        const featureItems = card.querySelectorAll('.feature-list li');
        
        card.addEventListener('mouseenter', function() {
            featureItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transform = 'translateX(0.5rem)';
                }, index * 100);
            });
        });

        card.addEventListener('mouseleave', function() {
            featureItems.forEach(item => {
                item.style.transform = 'translateX(0)';
            });
        });
    });

    // Interactive glow follow for user-type cards
    const glowCards = document.querySelectorAll('.user-type-card');
    glowCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', x + 'px');
            card.style.setProperty('--y', y + 'px');
        });
    });

    // Add parallax effect to floating elements
    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('[class*="float-"]');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);

    // Add loading state removal
    document.body.classList.remove('loading');
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    .loading * {
        animation-play-state: paused !important;
    }
`;
document.head.appendChild(style);

// Handle resize events
window.addEventListener('resize', function() {
    // Recalculate any size-dependent elements if needed
    // This is a placeholder for future responsive adjustments
});

// Add focus management for accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('using-keyboard');
});

// Add focus styles for keyboard navigation
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .using-keyboard *:focus {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);