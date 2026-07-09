document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.dataset.link;
        if (link) {
            window.location.href = link;
        }
    });
});

document.querySelectorAll('.writing-item').forEach(item => {
    item.addEventListener('click', () => {
        const link = item.dataset.link;
        if (link) window.location.href = link;
    });
});

document.getElementById("contact-nav").addEventListener("click", function() {
    const icons = document.querySelectorAll(".footer-icon");

    icons.forEach(icon => {
        icon.classList.add("glow");
        setTimeout(() => icon.classList.remove("glow"), 1000); // 1 second glow
    });
});



