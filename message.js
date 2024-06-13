document.addEventListener('DOMContentLoaded', function() {
    const proceedBtn = document.getElementById('proceedBtn');
    const closeBtn = document.querySelector('.close-btn');

    proceedBtn.addEventListener('click', function() {
        window.location.href = 'homepage.html';
    });

    closeBtn.addEventListener('click', function() {
        window.location.href = 'homepage.html';
    });
});
