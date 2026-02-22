document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => otherItem.classList.remove('active'));
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Simple Counter Animation
    const counter = document.getElementById('reg-count');
    let count = 400;
    const target = 482;
    const duration = 2000;
    const increment = (target - count) / (duration / 100);

    const updateCounter = () => {
        if (count < target) {
            count += increment;
            counter.innerText = Math.floor(count);
            setTimeout(updateCounter, 100);
        } else {
            counter.innerText = target;
        }
    };

    // Trigger counter when visible
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateCounter();
            observer.disconnect();
        }
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.register-section'));

    // Form Submission (Mock)
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn-submit');
        btn.innerText = 'Details Captured!';
        btn.style.background = '#ffd700'; // Gold color for success
        btn.disabled = true;
        
        // Show a simple alert
        alert('Thank you for your interest! Please visit the physical registration counter at RGIT Versova for final confirmation.');
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
