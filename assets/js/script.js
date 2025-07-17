// Simple JavaScript for Portfolio - Easy to understand for university project

// Projects Data
const projects = [
    {
        "id": 1,
        "name": "Achiev",
        "category": ["Kotlin", "Jetpack Compose"],
        "placeholderSrc": "https://i.ibb.co/3yvHcZK/project20.jpg",
        "imageSrc": ["https://i.ibb.co.com/DHQFThwB/achiev-feature.png"],
        "link": "https://tailwind-toggling-dark.vercel.app/",
        "source": "https://github.com/TahirAhmad01/tailwind-toggling-dark"
    },
    {
        "id": 2,
        "name": "HomeBudget",
        "category": ["Kotlin", "Jetpack compose", "Hilt", "Coroutines", "Compose Navigation(single activity)", "Firebase (as backend)"],
        "placeholderSrc": "https://i.ibb.co/LzV8ZYS/project21.png",
        "imageSrc": ["https://i.ibb.co/30n0hm9/playque-productivity-app-image.png"],
        "link": "https://github-api-test-delta.vercel.app/",
        "source": "https://github.com/TahirAhmad01/tailwind-toggling-dark",
        "description": "This project is built using popular JavaScript technologies such as React, Redux, and Tailwind CSS, and it interacts with the GitHub API to fetch a user's profile details, followers, following, and repositories. The application presents the fetched data in an intuitive and visually appealing user interface.The GitHub profile information, including the user's profile picture, username and other relevant details, is displayed prominently using a profile card component. The user's followers, following, and repositories are also displayed in separate cards, providing a summary of the corresponding data, such as counts and relevant details."
    },
    {
        "id": 3,
        "name": "Prayer Times",
        "category": ["Java", "XML", "Retrofit", "Hilt", "MVVM", "Coroutines", "Flow", "Room"],
        "placeholderSrc": "https://i.ibb.co/YbmP4HT/Screenshot-110-1.jpg",
        "imageSrc": ["https://i.ibb.co.com/cKbChJyH/prayer-times-feature.png"],
        "link": "https://imgbb-api-test.vercel.app/",
        "source": "https://github.com/TahirAhmad01/imgbb-api-test",
        "description": "Immerse yourself in the world of seamless image uploading and management with imgBB API Test, a dynamic web application built using React and styled with the elegance of Tailwind CSS. This intuitive platform allows users to effortlessly upload, explore, and manage images through the robust imgBB API. Experience a fluid user interface, powered by React's cutting-edge capabilities, coupled with the responsive and visually appealing design crafted using Tailwind CSS. imgBB API Test simplifies image handling, providing a smooth and efficient experience for both developers and end-users alike."
    },
    {
        "id": 4,
        "name": "MVP Chat App",
        "category": ["Kotlin", "XML", "Coroutine", "Flow", "MVVM", "Supabase", "Ktor", "Glide", "Hilt", "CameraX"],
        "placeholderSrc": "https://i.ibb.co/18hWzPv/Screenshot-111.jpg",
        "imageSrc": ["https://i.ibb.co.com/jktwDQcf/mvp-chat-app-feature.png"],
        "link": "https://next13-typescript-with-redux.vercel.app/",
        "source": "https://github.com/TahirAhmad01/next13-typescript-with-redux",
        "description": "Dive into the future of web development with Next.js 13, leveraging the power of TypeScript and Redux, in this groundbreaking project. Seamlessly blending the flexibility of TypeScript with the efficiency of Redux state management, this application offers an unparalleled development experience. Harness the latest Next.js capabilities to build dynamic, server-rendered React applications with ease. Utilizing Redux, manage your application state effortlessly, ensuring a smooth and synchronized user experience across the entire application. With Next.js 13, TypeScript, and Redux combined, you're equipped to create high-performance, type-safe, and scalable web applications that redefine the standards of modern web development."
    },
    {
        "id": 5,
        "name": "Gooal",
        "category": ["Java", "Football API", "FCM", "Cloud Functions", "Exoplayer"],
        "placeholderSrc": "https://i.ibb.co/6RNy15B/Screenshot-112.jpg",
        "imageSrc": ["https://i.ibb.co.com/nNpPsVGP/gooal-feature-1.png"],
        "link": "https://web-agency-with-nextjs.vercel.app/",
        "source": "https://github.com/TahirAhmad01/WebAgencyWithNextjs",
        "description": "Gooal is a live football match update app. Users can see daily fixtures of all major leagues, watch highlights, add teams as favourite, and get notified of match events like start time, goal, end time, etc."
    },
    {
        "id": 6,
        "name": "PlayQue",
        "description": "PlayQue - Track Playlists is a productivity app to track your long list of favorite playlists. Do you face the same problem that you get motivated to watch/complete an educational/tech playlist but after watching a few videos you completely forget about the playlist? Here comes the PlayQue - Playlist Tracker where you can add your favorite playlist and track how many videos you have completed, add a reminder notification for every day or custom days. You can either copy a playlist and paste the URL into the app to add a playlist or you can directly search and add any playlist from any channel from the search option in the app",
        "category": ["kotlin", "jetpack-compose", "retrofit", "hilt", "coroutine", "paging"],
        "placeholderSrc": "https://i.ibb.co/qgbZcf5/playque-productivity-app.jpg",
        "imageSrc": ["https://i.ibb.co/30n0hm9/playque-productivity-app-image.png"],
        "link": "https://play.google.com/store/apps/details?id=com.qubartech.playque",
        "source": "https://github.com/rafiul587/PlayQue"
    },
    {
        "id": 7,
        "name": "DIU Results",
        "description": "A result checker app for Dhaka International University where students can check their results in detail. Apart from that they can get the faculty list as well as check other bachmates results.",
        "category": ["Kotlin", "Jetpack Compose", "Retrofit", "MVVM", "Offline Cache"],
        "placeholderSrc": "https://i.ibb.co/qgbZcf5/playque-productivity-app.jpg",
        "imageSrc": ["https://i.ibb.co.com/N2fhkTgj/diu-results-feature.png"],
        "link": "https://play.google.com/store/apps/details?id=com.qubartech.diuresult",
        "source": "https://github.com/rafiul587/diuresults"
    },
    {
        "id": 8,
        "name": "DomRide",
        "description": "DomRide is a ride-share app similar to Uber, based in the Dominican Republic.",
        "category": ["Kotlin", "Jetpack Compose", "API, Google Maps", "FCM", "Google Cloud", "AWS"],
        "placeholderSrc": "https://i.ibb.co.com/bjCyY71B/domride-feature.png",
        "imageSrc": ["https://i.ibb.co.com/bjCyY71B/domride-feature.png"],
        "link": "https://play.google.com/store/apps/details?id=com.software.domride.driver",
        "source": "https://github.com/rafiul587/PlayQue"
    }
];

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navMenu.classList.remove('active');
    });
});

// Projects functionality
function renderProjects(projectsToShow = projects) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    projectsToShow.reverse().forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const techTags = project.category.map(tech =>
            `<span class="project-tech">${tech}</span>`
        ).join('');

        projectCard.innerHTML = `
            <img src="${project.imageSrc}" alt="${project.name}" onerror="this.style.display='none'">
            <h3>${project.name}</h3>
            <div class="project-technologies">
                ${techTags}
            </div>
            <div class="project-links">
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link demo">Live Demo</a>
                <a href="${project.source}" target="_blank" rel="noopener noreferrer" class="project-link source">Source Code</a>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Project filtering
function filterProjects(category) {
    if (category === 'all') {
        renderProjects(projects);
    } else {
        const filteredProjects = projects.filter(project => {
            if (category === 'android') {
                return project.category.some(cat =>
                    ['kotlin', 'java', 'android', 'jetpack-compose', 'jetpack compose'].includes(cat.toLowerCase())
                );
            } else if (category === 'web') {
                return project.category.some(cat =>
                    ['html', 'css', 'javascript', 'react', 'web'].includes(cat.toLowerCase())
                );
            } else if (category === 'react') {
                return project.category.some(cat =>
                    cat.toLowerCase().includes('react')
                );
            }
            return project.category.some(cat => cat.toLowerCase().includes(category.toLowerCase()));
        });
        renderProjects(filteredProjects);
    }
}

// Filter button functionality
document.addEventListener('DOMContentLoaded', function () {
    // Render initial projects
    renderProjects();

    // Add filter button listeners
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Filter projects
            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
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

contactForm.addEventListener('submit', function (e) {
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
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let currentSection = '';

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove active class from all links
    navLinks.forEach(function (link) {
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
window.addEventListener('load', function () {
    const homeContent = document.querySelector('.home-content');
    if (homeContent) {
        homeContent.style.opacity = '0';
        homeContent.style.transform = 'translateY(30px)';
        homeContent.style.transition = 'all 1s ease';

        setTimeout(function () {
            homeContent.style.opacity = '1';
            homeContent.style.transform = 'translateY(0)';
        }, 500);
    }
});
