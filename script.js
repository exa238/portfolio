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




