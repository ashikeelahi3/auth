// Function to check if the user is logged in
function checkLogin() {
    return localStorage.getItem('loggedIn') === 'true';
}

// Function to perform login
function login() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Simple validation
    if (username && password) {
        var storedUsername = localStorage.getItem('username');
        var storedPassword = localStorage.getItem('password');
        if (username === storedUsername && password === storedPassword) {
            localStorage.setItem('loggedIn', 'true');
            showLoggedInView();
        } else {
            alert('Invalid username or password');
        }
    } else {
        alert('Please enter username and password');
    }
}

// Function to perform registration
function register() {
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;

    // Simple validation
    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registration successful. You can now login.');
        showLoginForm();
    } else {
        alert('Please enter username and password');
    }
}

// Function to perform logout
function logout() {
    localStorage.setItem('loggedIn', 'false');
    showLoginForm();
}

// Function to display the appropriate view based on login status
function showLoggedInView() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('logoutForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('logoutForm').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('logoutForm').style.display = 'none';
}

// Check if the user is already logged in on page load
if (checkLogin()) {
    showLoggedInView();
} else {
    showLoginForm();
}
