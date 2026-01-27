// ===============================
// USERS TABLE (localStorage)
// ===============================
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// ===============================
// SIGNUP FUNCTION
// ===============================
function registerUser() {
    const username = document.getElementById("newUsername").value.trim().toLowerCase();
    const password = document.getElementById("newPassword").value.trim();
    const role = document.getElementById("newRole").value;
    const msg = document.getElementById("signupMsg");

    if (!username || !password || !role) {
        msg.innerText = "All fields are required.";
        return;
    }

    if (password.length < 5) {
        msg.innerText = "Password must be at least 5 characters.";
        return;
    }

    let users = getUsers();

    const exists = users.find(u => u.username === username);
    if (exists) {
        msg.innerText = "Username already exists.";
        return;
    }

    const newUser = {
        id: users.length + 1,
        username,
        password,
        role,
        createdAt: new Date().toLocaleDateString()
    };

    users.push(newUser);
    saveUsers(users);

    msg.style.color = "green";
    msg.innerText = "Registration successful! You can login now.";
}

// ===============================
// LOGIN FUNCTION
// ===============================
function loginUser() {
    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;
    const errorMsg = document.getElementById("errorMsg");

    if (!username || !password || !role) {
        errorMsg.innerText = "All fields are required.";
        return;
    }

    let users = getUsers();

    const user = users.find(
        u => u.username === username &&
             u.password === password &&
             u.role === role
    );

    if (user) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", user.username);
        localStorage.setItem("role", user.role);

        window.location.href = "dashboard.html";
    } else {
        errorMsg.innerText = "Invalid username or password.";
    }
}