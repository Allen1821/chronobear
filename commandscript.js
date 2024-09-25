document.addEventListener('DOMContentLoaded', () => {
    const commandItems = document.querySelectorAll('.command-item');

    commandItems.forEach((item, index) => {
        item.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
        item.style.opacity = 0;
        item.style.transform = 'translateY(50px)';

        // Initial jump animation for items within the viewport
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }

        // Scroll animation for items as they come into view
        const handleScroll = () => {
            commandItems.forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight && item.style.opacity == 0) {
                    item.style.opacity = 1;
                    item.style.transform = 'translateY(0)';
                }
            });
        };

        // Use requestAnimationFrame to match the scroll speed more accurately
        const onScroll = () => {
            requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', onScroll);
    });
});
