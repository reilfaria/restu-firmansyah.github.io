// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        alert("Menu clicked! (Tambahkan style mobile menu di CSS jika ingin fungsi penuh)");
    });
}

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Logic for Reil Modal
const modal = document.getElementById("reil-modal");
const btn = document.getElementById("reil-trigger");
const span = document.getElementsByClassName("close-btn")[0];

if (btn) {
    btn.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "flex";
    }
}

if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}