document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // For now, we'll use hardcoded credentials
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        window.location.href = 'game-selection.html';
    } else {
        alert('Invalid credentials');
    }
});
