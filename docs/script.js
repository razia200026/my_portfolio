// ============================================
// RAZIA AFRIN SHRABONI - PORTFOLIO SCRIPTS
// ============================================

// Cursor Glow Effect
const cursorGlow = document.querySelector('.cursor-glow');

if (cursorGlow && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing Effect
const typingText = document.querySelector('.typing-text');
const roles = [
    'Software Developer',
    'Android Developer',
    'Competitive Programmer',
    'Problem Solver',
    'CS Graduate'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before new word
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
if (typingText) {
    setTimeout(typeEffect, 1000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
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

// Observe sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add animate-in class styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Skill tags hover effect
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Project cards tilt effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Console easter egg
console.log('%c Welcome to my portfolio! 👋', 'font-size: 20px; font-weight: bold; color: #8b5cf6;');
console.log('%c Built with passion by Razia Afrin Shraboni', 'font-size: 14px; color: #a78bfa;');
console.log('%c Check out my GitHub: github.com/razia-shraboni', 'font-size: 12px; color: #71717a;');

// CV Generator Function
function generateCV() {
    const cvContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Razia Afrin Shraboni - CV</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Arial', sans-serif;
            font-size: 11pt;
            line-height: 1.5;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            background: white;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid #2c3e50;
        }
        .name {
            font-size: 24pt;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        .contact-info { font-size: 10pt; color: #555; }
        .contact-info a { color: #2980b9; text-decoration: none; }
        .section { margin-bottom: 18px; }
        .section-title {
            font-size: 12pt;
            font-weight: bold;
            color: #2c3e50;
            text-transform: uppercase;
            border-bottom: 1px solid #2c3e50;
            padding-bottom: 5px;
            margin-bottom: 10px;
            letter-spacing: 1px;
        }
        .summary { text-align: justify; color: #444; }
        .item { margin-bottom: 12px; }
        .item-header { display: flex; justify-content: space-between; flex-wrap: wrap; }
        .item-title { font-weight: bold; color: #333; font-size: 11pt; }
        .item-date { color: #666; font-size: 10pt; }
        .item-subtitle { color: #555; font-size: 10pt; font-style: italic; }
        ul { margin-left: 20px; margin-top: 5px; }
        li { margin-bottom: 4px; color: #444; }
        .skills-line { margin-bottom: 8px; }
        .skills-line strong { color: #2c3e50; }
        .project-tech { color: #666; font-size: 10pt; font-style: italic; }
        .print-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2c3e50;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
        }
        .print-btn:hover { background: #1a252f; }
        @media print {
            .print-btn { display: none; }
            body { padding: 20px; }
        }
        @page { margin: 0.5in; }
    </style>
</head>
<body>
    <button class="print-btn" onclick="window.print()">Print / Save as PDF</button>

    <header class="header">
        <h1 class="name">Razia Afrin Shraboni</h1>
        <div class="contact-info">
            <span>Polashpur, Dania (Soniakhra), Dhaka-1236, Bangladesh</span><br>
            <span>+880 1774-970224</span> |
            <span><a href="mailto:shraboni.diit@gmail.com">shraboni.diit@gmail.com</a></span> |
            <span><a href="https://linkedin.com/in/">LinkedIn</a></span> |
            <span><a href="https://github.com/">GitHub</a></span>
        </div>
    </header>

    <section class="section">
        <h2 class="section-title">Professional Summary</h2>
        <p class="summary">
            Computer Science graduate (B.Sc. CSE) with strong foundation in programming, application development, and problem-solving. Proficient in Java, Python, C/C++, and Android development with hands-on experience using Firebase and MySQL databases. Developed real-world projects including an AI-powered personal safety application and a web-based health management system. Active competitive programmer with proven analytical and algorithmic skills. Passionate about learning new technologies, building innovative software solutions, and contributing effectively to engineering teams.
        </p>
    </section>

    <section class="section">
        <h2 class="section-title">Education</h2>
        <div class="item">
            <div class="item-header">
                <span class="item-title">Bachelor of Science in Computer Science and Engineering (B.Sc. CSE)</span>
                <span class="item-date">2020 - 2025</span>
            </div>
            <div class="item-subtitle">Daffodil Institute of IT (DIIT), Dhaka, Bangladesh | CGPA: 3.23/4.00</div>
        </div>
    </section>

    <section class="section">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-line"><strong>Programming Languages:</strong> Java, Python, C, C++</div>
        <div class="skills-line"><strong>Web Development:</strong> HTML5, CSS3, Bootstrap, PHP, Laravel</div>
        <div class="skills-line"><strong>Mobile Development:</strong> Android Development (Java), Firebase Integration</div>
        <div class="skills-line"><strong>Databases:</strong> MySQL, Firebase Realtime Database</div>
        <div class="skills-line"><strong>Tools & Version Control:</strong> Git, GitHub</div>
        <div class="skills-line"><strong>Other:</strong> Data Structures, Algorithms, Object-Oriented Programming</div>
    </section>

    <section class="section">
        <h2 class="section-title">Projects</h2>
        <div class="item">
            <div class="item-title">Nirvoy - AI-Powered Personal Safety App</div>
            <div class="project-tech">Technologies: Java, Android, Firebase, AI/ML</div>
            <ul>
                <li>Developed an Android application to send emergency alerts with live location tracking</li>
                <li>Implemented real-time database using Firebase for emergency contacts and messaging</li>
                <li>Applied AI-based features for automated safety detection and alert automation</li>
            </ul>
        </div>
        <div class="item">
            <div class="item-title">Health Management System</div>
            <div class="project-tech">Technologies: PHP, Laravel, MySQL, HTML, CSS, Bootstrap</div>
            <ul>
                <li>Built a full-stack web application for managing medical data and user health profiles</li>
                <li>Designed secure database schema using MySQL for efficient data storage</li>
                <li>Created responsive user interface using Bootstrap framework</li>
            </ul>
        </div>
    </section>

    <section class="section">
        <h2 class="section-title">Achievements</h2>
        <ul>
            <li><strong>96th Place</strong> - National Girl's Programming Contest (NGPC) Onsite Final, 2022</li>
            <li>Active Competitive Programmer on HackerRank, Beecrowd, and Codeforces</li>
        </ul>
    </section>

    <section class="section">
        <h2 class="section-title">Core Competencies</h2>
        <p>Problem Solving | Analytical Thinking | Algorithm Design | Team Collaboration | Quick Learner | Attention to Detail</p>
    </section>

    <section class="section">
        <h2 class="section-title">Languages</h2>
        <ul>
            <li><strong>Bengali:</strong> Native</li>
            <li><strong>English:</strong> Professional Proficiency</li>
        </ul>
    </section>
</body>
</html>`;

    const cvWindow = window.open('', '_blank');
    cvWindow.document.write(cvContent);
    cvWindow.document.close();
}
