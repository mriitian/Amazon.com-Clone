document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
        link.addEventListener('click', function () {
            // Hide all containers
            const containers = document.querySelectorAll('.container');
            containers.forEach((container) => {
                container.classList.remove('show');
            });

            // Show the target container
            const targetId = this.getAttribute('data-bs-target').substring(1); // Remove the '#' symbol
            const targetContainer = document.getElementById(targetId);
            if (targetContainer) {
                targetContainer.classList.add('show');
            }
        });
    });
});
