document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    const menuBtn = document.querySelector('.dropbtn');
    const dropdown = document.querySelector('.dropdown-content');
    const header = document.querySelector('header');

    menuBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior
        dropdown.classList.toggle('active');
    });

    // Close the dropdown when clicking outside of the header
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && e.target !== menuBtn) {
            dropdown.classList.remove('active');
        }
    });
});
