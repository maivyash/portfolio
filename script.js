/* ============================================
   YASH GUPTA - TECHY PORTFOLIO
   Three.js 3D Scene + Interactive Animations
   ============================================ */

// === PRELOADER ===
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.classList.add('hidden');
        // Start hero animations after preloader
        startHeroCounters();
    }, 1800);
});

// === CUSTOM CURSOR ===
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX - 3 + 'px';
    cursorDot.style.top = mouseY - 3 + 'px';
});

function animateCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRing.style.left = ringX - 18 + 'px';
    cursorRing.style.top = ringY - 18 + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effects
document.querySelectorAll('a, button, .hex-item, .project-card, .contact-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
});

// === THREE.JS 3D SCENE ===
function initThreeScene() {
    const canvas = document.getElementById('heroCanvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    camera.position.z = 30;
    
    // Colors
    const cyanColor = new THREE.Color(0x00f5ff);
    const purpleColor = new THREE.Color(0x7b2fff);
    const pinkColor = new THREE.Color(0xff006e);
    
    // === PARTICLE FIELD ===
    const particleCount = 1500;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 80;
        positions[i3 + 1] = (Math.random() - 0.5) * 80;
        positions[i3 + 2] = (Math.random() - 0.5) * 80;
        
        // Random color between cyan and purple
        const mixRatio = Math.random();
        const color = new THREE.Color().lerpColors(cyanColor, purpleColor, mixRatio);
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
        
        sizes[i] = Math.random() * 2 + 0.5;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.15,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    
    // === FLOATING WIREFRAME GEOMETRIES ===
    const wireObjects = [];
    
    // Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(4, 1);
    const icoMat = new THREE.MeshBasicMaterial({ 
        color: cyanColor, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.15 
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(-12, 5, -10);
    scene.add(ico);
    wireObjects.push({ mesh: ico, speedX: 0.003, speedY: 0.005, speedZ: 0.002, floatSpeed: 0.001, floatAmount: 2 });
    
    // Torus
    const torusGeo = new THREE.TorusGeometry(3, 0.8, 12, 32);
    const torusMat = new THREE.MeshBasicMaterial({ 
        color: purpleColor, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.12 
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(14, -4, -8);
    scene.add(torus);
    wireObjects.push({ mesh: torus, speedX: 0.004, speedY: 0.003, speedZ: 0.006, floatSpeed: 0.0012, floatAmount: 3 });
    
    // Octahedron
    const octGeo = new THREE.OctahedronGeometry(3, 0);
    const octMat = new THREE.MeshBasicMaterial({ 
        color: pinkColor, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.1 
    });
    const oct = new THREE.Mesh(octGeo, octMat);
    oct.position.set(8, 8, -15);
    scene.add(oct);
    wireObjects.push({ mesh: oct, speedX: 0.006, speedY: 0.004, speedZ: 0.003, floatSpeed: 0.0015, floatAmount: 2.5 });
    
    // Dodecahedron
    const dodGeo = new THREE.DodecahedronGeometry(2.5, 0);
    const dodMat = new THREE.MeshBasicMaterial({ 
        color: cyanColor, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.1 
    });
    const dod = new THREE.Mesh(dodGeo, dodMat);
    dod.position.set(-10, -8, -12);
    scene.add(dod);
    wireObjects.push({ mesh: dod, speedX: 0.005, speedY: 0.007, speedZ: 0.004, floatSpeed: 0.001, floatAmount: 2 });
    
    // TorusKnot
    const knotGeo = new THREE.TorusKnotGeometry(2.5, 0.5, 64, 8, 2, 3);
    const knotMat = new THREE.MeshBasicMaterial({
        color: purpleColor,
        wireframe: true,
        transparent: true,
        opacity: 0.08
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    knot.position.set(-5, -12, -18);
    scene.add(knot);
    wireObjects.push({ mesh: knot, speedX: 0.002, speedY: 0.003, speedZ: 0.001, floatSpeed: 0.0008, floatAmount: 1.5 });
    
    // === CONNECTION LINES ===
    const lineCount = 80;
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(lineCount * 6);
    
    for (let i = 0; i < lineCount; i++) {
        const i6 = i * 6;
        linePositions[i6] = (Math.random() - 0.5) * 60;
        linePositions[i6 + 1] = (Math.random() - 0.5) * 60;
        linePositions[i6 + 2] = (Math.random() - 0.5) * 60;
        linePositions[i6 + 3] = linePositions[i6] + (Math.random() - 0.5) * 15;
        linePositions[i6 + 4] = linePositions[i6 + 1] + (Math.random() - 0.5) * 15;
        linePositions[i6 + 5] = linePositions[i6 + 2] + (Math.random() - 0.5) * 15;
    }
    
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ 
        color: cyanColor, 
        transparent: true, 
        opacity: 0.04 
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);
    
    // Mouse tracking for parallax
    let targetMouseX = 0, targetMouseY = 0;
    let currentMouseX = 0, currentMouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });
    
    // Animation loop
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.01;
        
        // Smooth mouse follow
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;
        
        // Rotate particle field
        particles.rotation.y += 0.0005;
        particles.rotation.x += 0.0002;
        
        // Parallax effect on particles
        particles.rotation.y += currentMouseX * 0.0005;
        particles.rotation.x += currentMouseY * 0.0003;
        
        // Animate wireframe objects
        wireObjects.forEach(obj => {
            obj.mesh.rotation.x += obj.speedX;
            obj.mesh.rotation.y += obj.speedY;
            obj.mesh.rotation.z += obj.speedZ;
            obj.mesh.position.y += Math.sin(time * obj.floatSpeed * 100) * 0.01 * obj.floatAmount;
            
            // Mouse parallax
            obj.mesh.position.x += currentMouseX * 0.003;
            obj.mesh.position.y += currentMouseY * 0.003;
        });
        
        // Rotate lines
        lines.rotation.y += 0.0003;
        lines.rotation.z += 0.0001;
        
        // Camera subtle movement
        camera.position.x += (currentMouseX * 2 - camera.position.x) * 0.02;
        camera.position.y += (-currentMouseY * 2 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Resize handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

initThreeScene();

// === TYPED TEXT ANIMATION ===
function typedTextEffect() {
    const texts = [
        'Full Stack Developer',
        'AI & ML Enthusiast', 
        'System Designer',
        'Android Developer',
        'MERN Stack Expert',
        'Cloud Architecture',
        'Open Source Contributor'
    ];
    
    const typedEl = document.getElementById('typedText');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedEl.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            typedEl.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next word
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start after preloader
    setTimeout(type, 2500);
}

typedTextEffect();

// === NAVBAR SCROLL EFFECT ===
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Navbar background
    if (scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active section highlighting
    sections.forEach(section => {
        const top = section.offsetTop - 200;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollY >= top && scrollY < bottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            
            // Close mobile menu
            document.getElementById('navLinks').classList.remove('active');
            document.getElementById('hamburger').classList.remove('active');
        }
    });
});

// === MOBILE HAMBURGER MENU ===
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// === INTERSECTION OBSERVER FOR SCROLL REVEALS ===
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            
            // Staggered hex items
            if (entry.target.classList.contains('skill-category')) {
                const hexItems = entry.target.querySelectorAll('.hex-item');
                hexItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('revealed');
                    }, index * 80);
                });
            }
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all reveal elements
document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .skill-category').forEach(el => {
    revealObserver.observe(el);
});

// === HERO COUNTER ANIMATION ===
function startHeroCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const start = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Eased progress
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);
            
            counter.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }
        
        setTimeout(() => {
            requestAnimationFrame(updateCounter);
        }, 2200);
    });
}

// === PROJECT CARD 3D TILT EFFECT ===
document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * -6;
        const rotateY = (x - centerX) / centerX * 6;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// === ACHIEVEMENT PARTICLE EFFECTS ===
document.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const particleArea = card.querySelector('.achievement-particles');
        
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                background: ${Math.random() > 0.5 ? '#00f5ff' : '#7b2fff'};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                animation: particle-burst 0.8s ease-out forwards;
                opacity: 0;
            `;
            particleArea.appendChild(particle);
            
            setTimeout(() => particle.remove(), 800);
        }
    });
});

// Add particle keyframes dynamically
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particle-burst {
        0% { 
            transform: translate(0, 0) scale(0); 
            opacity: 1; 
        }
        100% { 
            transform: translate(${(Math.random() - 0.5) * 60}px, ${(Math.random() - 0.5) * 60}px) scale(1); 
            opacity: 0; 
        }
    }
`;
document.head.appendChild(particleStyle);

// === CONTACT FORM ===
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = contactForm.querySelector('.btn-submit');
        const originalText = btn.querySelector('.btn-text').textContent;
        btn.querySelector('.btn-text').textContent = 'Message Sent! ✓';
        btn.style.background = 'linear-gradient(135deg, #00ff88, #00cc6a)';
        
        setTimeout(() => {
            btn.querySelector('.btn-text').textContent = originalText;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    });
}

// === MAGNETIC EFFECT ON SOCIAL LINKS ===
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        link.style.transform = `translateY(-4px) translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = '';
    });
});

// === PARALLAX BACKGROUND ON SECTIONS ===
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroGrid = document.querySelector('.hero-grid-overlay');
    if (heroGrid) {
        heroGrid.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
});

// === KEYBOARD NAVIGATION SUPPORT ===
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinksContainer.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// === CONSOLE EASTER EGG ===
console.log(
    '%c👋 Hey there, fellow developer! Looking to connect?\n%c🌐 github.com/maivyash\n📧 guptayash2005.yg@gmail.com',
    'color: #00f5ff; font-size: 16px; font-weight: bold;',
    'color: #7b2fff; font-size: 14px;'
);
