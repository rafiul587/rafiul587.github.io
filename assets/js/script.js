// Simple JavaScript for Portfolio - Easy to understand for university project

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form inputs
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields!');
        return;
    }
    
    // Check if email is valid
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Clear the form
    contactForm.reset();
});

// Function to validate email
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Add active class to current navigation item
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let currentSection = '';
    
    sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Remove active class from all links
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    
    // Add active class to current section link
    if (currentSection) {
        const activeLink = document.querySelector('.nav-menu a[href="#' + currentSection + '"]');
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});

// Simple animation when page loads
window.addEventListener('load', function() {
    const homeContent = document.querySelector('.home-content');
    homeContent.style.opacity = '0';
    homeContent.style.transform = 'translateY(30px)';
    homeContent.style.transition = 'all 1s ease';
    
    setTimeout(function() {
        homeContent.style.opacity = '1';
        homeContent.style.transform = 'translateY(0)';
    }, 500);
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    });
});

// Simple typing effect for the home subtitle (optional)
function typeWriter(element, text, speed) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Start typing effect after page loads
window.addEventListener('load', function() {
    setTimeout(function() {
        const subtitle = document.querySelector('.home-content p');
        const originalText = subtitle.textContent;
        typeWriter(subtitle, originalText, 100);
    }, 1500);
});
