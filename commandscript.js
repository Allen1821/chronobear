document.addEventListener("DOMContentLoaded", () => {
    const commandItems = document.querySelectorAll(".command-item");

    if (!("IntersectionObserver" in window)) {
        commandItems.forEach((item) => item.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    commandItems.forEach((item) => observer.observe(item));
});
