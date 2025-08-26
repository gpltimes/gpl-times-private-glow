// GPL Times - Countdown Timer and Interactive Features

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
function showContent(type) {
    // Hide all content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected content
    const targetContent = document.getElementById(type + '-content');
    if (targetContent) {
        targetContent.classList.remove('hidden');
    }
    
    // Update card styles
    const cards = document.querySelectorAll('.user-card');
    cards.forEach(card => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'var(--shadow-lg)';
    });
    
    // Highlight selected card
    const selectedCard = event.target.closest('.user-card');
    if (selectedCard) {
        selectedCard.style.transform = 'translateY(-5px)';
        selectedCard.style.boxShadow = 'var(--shadow-premium)';
    }
}

// FAQ Toggle
function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items in the same column
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
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[class*="animate-"], .benefit-card, .timeline-item, .user-card');
    animatedElements.forEach((el) => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Add click handlers for FAQ items
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            toggleFAQ(this);
        });
    });
    
    // Add click handlers for user type cards
    const userCards = document.querySelectorAll('.user-card');
    userCards.forEach(card => {
        card.addEventListener('click', function() {
            const type = this.classList.contains('existing-member') ? 'existing' : 'guest';
            showContent(type);
        });
    });
    
    // Smooth scroll for scroll indicator
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
    benefitCards.forEach((card, index) => {
        const features = card.querySelectorAll('.benefit-features li');
        features.forEach((feature, i) => {
            feature.style.setProperty('--i', i);
        });
    });
});

// Handle external link tracking (optional)
function trackExternalLink(url, action) {
    // You can add analytics tracking here if needed
    console.log(`External link clicked: ${action} - ${url}`);
}

// Add external link tracking
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="mailto:"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            const href = this.getAttribute('href');
            const action = this.textContent.trim() || 'Click';
            trackExternalLink(href, action);
        });
    });
});