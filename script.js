// Function to add a class to the header on scroll for a sticky effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// You would need to add the '.scrolled' CSS class to styles.css for this to work:
/*
.scrolled {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}
*/