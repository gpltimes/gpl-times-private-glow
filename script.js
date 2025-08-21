// User Type Selector Functionality
class UserTypeSelector {
    constructor() {
        this.selectedType = null;
        this.memberCard = document.getElementById('memberCard');
        this.guestCard = document.getElementById('guestCard');
        this.memberContent = document.getElementById('memberContent');
        this.guestContent = document.getElementById('guestContent');
        this.selectionHint = document.getElementById('selectionHint');
        
        this.init();
    }
    
    init() {
        // Add click event listeners to cards
        this.memberCard.addEventListener('click', () => this.selectCard('member'));
        this.guestCard.addEventListener('click', () => this.selectCard('guest'));
    }
    
    selectCard(type) {
        // If clicking the same card that's already selected, deselect it
        if (this.selectedType === type) {
            this.deselectAll();
            return;
        }
        
        // Deselect all cards first
        this.deselectAll();
        
        // Select the clicked card
        this.selectedType = type;
        
        if (type === 'member') {
            this.memberCard.classList.add('active');
            this.memberContent.classList.add('active');
        } else if (type === 'guest') {
            this.guestCard.classList.add('active', 'guest');
            this.guestContent.classList.add('active');
        }
        
        // Show selection hint
        this.selectionHint.classList.add('active');
    }
    
    deselectAll() {
        this.selectedType = null;
        
        // Remove active classes
        this.memberCard.classList.remove('active');
        this.guestCard.classList.remove('active', 'guest');
        this.memberContent.classList.remove('active');
        this.guestContent.classList.remove('active');
        this.selectionHint.classList.remove('active');
    }
}

// Scroll Animation Observer
class ScrollAnimationObserver {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        // Create intersection observer
        this.observer = new IntersectionObserver(
            this.handleIntersection.bind(this), 
            this.observerOptions
        );
        
        // Observe all animated elements
        const animatedElements = document.querySelectorAll(
            '.animate-fade-in, .animate-slide-up, .animate-scale-in, .timeline-item, .feature-card, .stat-card'
        );
        
        animatedElements.forEach(el => {
            // Remove animation classes initially
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            this.observer.observe(el);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                
                // Stop observing this element
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Smooth Scroll for Navigation
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Smooth scroll for scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const userTypeSection = document.querySelector('.user-type-section');
                if (userTypeSection) {
                    userTypeSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
        
        // Smooth scroll for CTA button
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                // In a real implementation, this would redirect to registration
                console.log('Redirecting to registration page...');
                alert('Registration functionality would be implemented here.');
            });
        }
        
        // Smooth scroll for contact button
        const contactButton = document.querySelector('.contact-button');
        if (contactButton) {
            contactButton.addEventListener('click', () => {
                // In a real implementation, this would open email client
                window.location.href = 'mailto:info@gpltimes.com';
            });
        }
    }
}

// Parallax Effect for Floating Elements
class ParallaxEffect {
    constructor() {
        this.floatingElements = document.querySelectorAll('.floating-element, .cta-float-1, .cta-float-2');
        this.init();
    }
    
    init() {
        // Add scroll listener for parallax effect
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    updateParallax() {
        const scrollY = window.pageYOffset;
        
        this.floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1); // Different speeds for each element
            const yPos = -(scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// Performance Optimization - Debounced Resize Handler
class ResizeHandler {
    constructor() {
        this.init();
    }
    
    init() {
        let resizeTimeout;
        
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
    }
    
    handleResize() {
        // Recalculate any layout-dependent animations
        console.log('Window resized, recalculating layouts...');
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new UserTypeSelector();
    new ScrollAnimationObserver();
    new SmoothScroll();
    new ParallaxEffect();
    new ResizeHandler();
    
    // Add loading animation completion
    document.body.classList.add('loaded');
    
    console.log('GPL Times application initialized successfully!');
});

// Add some loading states and error handling
window.addEventListener('load', () => {
    // Hide any loading spinners
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Performance logging
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    }
});

// Error handling
window.addEventListener('error', (event) => {
    console.error('JavaScript error occurred:', event.error);
});

// Handle form submissions (if any forms are added)
document.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submission intercepted for processing...');
});