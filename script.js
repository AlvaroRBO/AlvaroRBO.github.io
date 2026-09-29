// ===== SMOOTH SCROLL ACTIVE LINK =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#6c63ff';
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '0.8rem 4rem';
    } else {
        navbar.style.padding = '1.2rem 4rem';
    }
});

// ===== SKILL BARS ANIMATION =====
const skillFills = document.querySelectorAll('.skill-fill');

const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillFills.forEach(fill => {
                fill.style.width = fill.style.width;
            });
            observer.disconnect();
        }
    });
};

const skillObserver = new IntersectionObserver(animateSkills, {
    threshold: 0.3
});

const skillsSection = document.querySelector('.skills');
if (skillsSection) skillObserver.observe(skillsSection);

// ===== FADE IN ON SCROLL =====
const fadeElements = document.querySelectorAll('.project-card, .stat-card, .skill-category');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// ===== CONTACT FORM =====
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.textContent = '✅ Message Sent!';
    btn.style.background = '#4caf50';
    setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        form.reset();
    }, 3000);
});

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinksEl = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinksEl.style.display = navLinksEl.style.display === 'flex' ? 'none' : 'flex';
    navLinksEl.style.flexDirection = 'column';
    navLinksEl.style.position = 'absolute';
    navLinksEl.style.top = '70px';
    navLinksEl.style.right = '2rem';
    navLinksEl.style.background = 'var(--bg-card)';
    navLinksEl.style.padding = '1.5rem';
    navLinksEl.style.borderRadius = '12px';
    navLinksEl.style.border = '1px solid var(--border)';
});