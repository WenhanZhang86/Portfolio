// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Profile Image Handling
const profileImage = document.getElementById('profileImage');
const imagePlaceholder = document.getElementById('imagePlaceholder');

// Check if profile image exists
profileImage.onerror = function() {
    this.style.display = 'none';
    imagePlaceholder.style.display = 'flex';
};

profileImage.onload = function() {
    this.style.display = 'block';
    imagePlaceholder.style.display = 'none';
};

// Try to load the image
if (profileImage.src) {
    profileImage.style.display = 'block';
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Project Card Interactions
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project Details Modal
const modal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-modal');

const projectDetails = {
    1: {
        title: 'Memo Pad - AI-Powered Context Capture Tool',
        date: 'Santa Clara University Hackathon Project | Oct 2025',
        description: `
            <p>Built an AI-assisted system to capture and organize contextual information from audio and on-screen visuals with user consent.</p>
            <h3>Key Features:</h3>
            <ul>
                <li>Audio-to-text and image-to-text pipelines using AWS AI services</li>
                <li>Structured results stored in a cloud database</li>
                <li>Python-based backend services for data ingestion, processing, and retrieval</li>
                <li>Automated summarization and question-answering over captured data</li>
            </ul>
            <h3>Technologies Used:</h3>
            <p>Python, AWS (AI services), Cloud Storage, API Integration</p>
            <h3>Impact:</h3>
            <p>Improved information recall and productivity through automated context capture and intelligent organization.</p>
        `
    }
};

function showProjectDetails(projectId) {
    const project = projectDetails[projectId];
    if (!project) return;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">${project.date}</p>
        ${project.description}
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple form validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    alert(`Thank you for your message, ${name}! I'll get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send this data to a server
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, message }) })
});

// Intersection Observer for Animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .detail-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Skill Tags Animation
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
});

// Typing Effect for Hero Title (Optional Enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// });

// Console Message
console.log('%c👋 Welcome to Tom Zhang Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #8b5cf6; font-size: 14px;');
