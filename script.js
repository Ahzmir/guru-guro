document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const validUsername = '2024';
        const validPassword = 'admin';

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === validUsername && password === validPassword) {
            alert('Login successful!');
            window.location.href = 'message.html';
        } else {
            alert('Invalid ID or password.');
        }
    });

    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});
