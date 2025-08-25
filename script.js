// GPL Times JavaScript - All functionality converted from React

// Global state
let selectedUserType = null;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCountdownTimer();
    initScrollAnimations();
    initUserTypeSelector();
    initFAQAccordion();
    initSmoothScrolling();
});

// Countdown Timer Functionality
function initCountdownTimer() {
    const targetDate = new Date('2026-01-01T00:00:00').getTime();
    
    function updateCountdown() {
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

    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// User Type Selector Functionality
function toggleCard(type) {
    const memberCard = document.getElementById('member-card');
    const guestCard = document.getElementById('guest-card');
    const memberContent = document.getElementById('member-content');
    const guestContent = document.getElementById('guest-content');
    const cardHint = document.getElementById('card-hint');

    // Reset all cards
    memberCard.classList.remove('active');
    guestCard.classList.remove('active');
    memberContent.classList.remove('active');
    guestContent.classList.remove('active');

    if (selectedUserType === type) {
        // Clicking the same card - deselect
        selectedUserType = null;
        cardHint.classList.add('hidden');
    } else {
        // Select new card
        selectedUserType = type;
        
        if (type === 'member') {
            memberCard.classList.add('active');
            memberContent.classList.add('active');
        } else {
            guestCard.classList.add('active');
            guestContent.classList.add('active');
        }
        
        cardHint.classList.remove('hidden');
    }
}

// FAQ Accordion Functionality
function initFAQAccordion() {
    // This function is called by onclick in HTML
}

function toggleFAQ(element) {
    const faqAnswer = element.nextElementSibling;
    const isActive = element.classList.contains('active');
    
    // Close all other FAQ items in the same column
    const column = element.closest('.faq-column');
    const allQuestions = column.querySelectorAll('.faq-question');
    const allAnswers = column.querySelectorAll('.faq-answer');
    
    allQuestions.forEach(q => q.classList.remove('active'));
    allAnswers.forEach(a => a.classList.remove('active'));
    
    // Toggle current item
    if (!isActive) {
        element.classList.add('active');
        faqAnswer.classList.add('active');
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-scale-in');
    animatedElements.forEach(el => {
        // Set initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        observer.observe(el);
    });

    // Special handling for timeline items with delays
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
        
        observer.observe(item);
    });

    // Special handling for benefit cards with delays
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        card.style.transition = `opacity 0.5s ease-out ${index * 0.2}s, transform 0.5s ease-out ${index * 0.2}s`;
        
        observer.observe(card);
    });

    // Special handling for stats with delays
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
        
        observer.observe(item);
    });
}

// Smooth Scrolling for anchor links
function initSmoothScrolling() {
    // Handle scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.getElementById('user-selector').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Handle any other internal links
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
}

// Utility function to add animation delays
function addAnimationDelay(element, delay) {
    element.style.animationDelay = `${delay}s`;
}

// Enhanced scroll effects for better UX
function initEnhancedScrollEffects() {
    let ticking = false;

    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        // Parallax effect for floating elements
        const floatElements = document.querySelectorAll('.float-element');
        floatElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
}

// Initialize enhanced effects
document.addEventListener('DOMContentLoaded', function() {
    initEnhancedScrollEffects();
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Recalculate any position-dependent elements if needed
    // This is a placeholder for any responsive JavaScript logic
});

// Add loading state management
window.addEventListener('load', function() {
    // Remove any loading states
    document.body.classList.add('loaded');
    
    // Trigger any load-dependent animations
    const heroElements = document.querySelectorAll('.hero-text *');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Error handling for external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add any analytics tracking here if needed
        console.log('External link clicked:', this.href);
    });
});

// Keyboard accessibility improvements
document.addEventListener('keydown', function(e) {
    // Handle Enter/Space for interactive elements
    if (e.key === 'Enter' || e.key === ' ') {
        const target = e.target;
        
        if (target.classList.contains('faq-question')) {
            e.preventDefault();
            toggleFAQ(target);
        }
        
        if (target.classList.contains('user-card')) {
            e.preventDefault();
            const cardType = target.id.includes('member') ? 'member' : 'guest';
            toggleCard(cardType);
        }
    }
});

// Add focus management for better accessibility
document.querySelectorAll('.user-card, .faq-question').forEach(element => {
    element.setAttribute('tabindex', '0');
    element.setAttribute('role', 'button');
    
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--primary)';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Performance optimization: Intersection Observer for expensive animations
const expensiveAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Only start expensive animations when visible
            entry.target.classList.add('animate-active');
        }
    });
}, {
    rootMargin: '50px'
});

// Observe elements with expensive animations
document.querySelectorAll('.animate-pulse-glow, .animate-float').forEach(el => {
    expensiveAnimationObserver.observe(el);
});

// Console welcome message
console.log('%cGPL Times Going Private', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
console.log('%cBuilt with modern web technologies', 'font-size: 14px; color: #6b7280;');
console.log('🚀 Ready for January 1, 2026!');