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