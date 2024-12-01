// Custom cursor
const cursor = document.getElementById('custom-cursor');
let cursorX = 0;
let cursorY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
});

function animateCursor() {
    const dx = cursorX - currentX;
    const dy = cursorY - currentY;
    currentX += dx * 0.1;
    currentY += dy * 0.1;
    cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(animateCursor);
}

animateCursor();
// End of Custom Cursor Code
// Navbar Hide/Show on Scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navbar.style.opacity = '0';
    } else {
        navbar.style.opacity = '1';
    }
    lastScroll = currentScroll;
});

document.addEventListener('DOMContentLoaded', () => {
    // Handle page transitions
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Add fade out animation to current section
            const currentSection = document.querySelector('.gallery-section');
            if (currentSection) {
                currentSection.style.animation = 'fadeOut 0.5s ease forwards';
            }
            
            // Navigate to new section after animation
            setTimeout(() => {
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }, 500);
        });
    });
});

// Add this after your existing cursor code
document.querySelectorAll('.gallery-item').forEach(item => {
    const title = item.querySelector('h3');
    
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left; // Get mouse X position relative to item
        const y = e.clientY - rect.top;  // Get mouse Y position relative to item
        
        // Calculate position within boundaries (with padding)
        const padding = 20;
        const boundedX = Math.min(Math.max(x, padding), rect.width - padding);
        const boundedY = Math.min(Math.max(y, padding), rect.height - padding);
        
        // Apply smooth transform to title
        title.style.transition = 'transform 0.1s ease-out';
        title.style.transform = `translate(${boundedX - rect.width/2}px, ${boundedY - rect.height/2}px)`;
    });
    
    // Reset position when mouse leaves
    item.addEventListener('mouseleave', () => {
        title.style.transition = 'transform 0.3s ease';
        title.style.transform = 'translate(0, 0)';
    });
});

// Add this to control video speed
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-video video');
    if (video) {
        // Set initial playback rate
        video.playbackRate = 0.25;
        
        // Ensure the speed is maintained after any video events
        video.addEventListener('play', function() {
            video.playbackRate = 0.25;
        });
        
        video.addEventListener('loadeddata', function() {
            video.playbackRate = 0.25;
        });
    }
});