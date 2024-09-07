document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.section-header');
    const button = document.getElementById('toggleAll');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    button.addEventListener('click', () => {
        const allContents = document.querySelectorAll('.section-content');
        if (allContents[0].style.display === 'block') {
            allContents.forEach(content => content.style.display = 'none');
            button.textContent = 'Läs mer';
        } else {
            allContents.forEach(content => content.style.display = 'block');
            button.textContent = 'Läs mindre';
        }
    });
});
