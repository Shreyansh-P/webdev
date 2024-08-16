document.addEventListener('DOMContentLoaded', () => {
    const driverLinks = document.querySelectorAll('.driver-link');
    const driverDetails = document.querySelectorAll('.driver-details');

    driverLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);

            // Hide all driver details with a fade-out effect
            driverDetails.forEach(detail => {
                if (detail.classList.contains('show')) {
                    detail.classList.add('hide');
                    detail.classList.remove('show');
                }
            });

            // Show the clicked driver details with a fade-in effect
            const targetDetail = document.getElementById(targetId);
            if (targetDetail) {
                targetDetail.classList.remove('hide');
                targetDetail.classList.add('show');
            }
        });
    });
});
