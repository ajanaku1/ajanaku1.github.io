document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const menuBtn = document.querySelector('.dropbtn');
        const dropdown = document.querySelector('.dropdown-content');
    
        menuBtn.addEventListener('click', function (e) {
            e.preventDefault(); //! Prevent the default link behavior
            dropdown.classList.toggle('active');
        });
    
        //! Close the dropdown when clicking outside of the header
        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target) && e.target !== menuBtn) {
                dropdown.classList.remove('active');
            }
        });
    });
});
