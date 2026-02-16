// Protect page
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
}

const username = localStorage.getItem("username");
const role = localStorage.getItem("role");

document.getElementById("welcomeText").innerText =
    `Welcome!, ${username} (${role})`;

// Hide admin menu
if (role !== "admin") {
    document.querySelectorAll(".admin-only")
        .forEach(el => el.style.display = "none");
}

// PROFILE
function showProfile() {
    document.getElementById("mainContent").innerHTML = `
        <h2>Profile</h2>
        <p><b>Username:</b> ${username}</p>
        <p><b>Enter Role:</b> ${role}</p>
        <p><b>Status:</b> Active</p>
    `;
}

// ACTIVITY
function showActivity() {
    document.getElementById("mainContent").innerHTML = `
        <h2>Recent Activity</h2>
        <ul>
            <li>Logged in</li>
            <li>Viewed dashboard</li>
            <li>Session active</li>
        </ul>
        <p> Hello</p>
    `;
}

// ADMIN USERS TABLE
function showUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    let rows = users.map(u =>
        `<tr>
            <td>${u.id}</td>
            <td>${u.username}</td>
            <td>${u.role}</td>
            <td>${u.createdAt}</td>
        </tr>`
    ).join("");

    document.getElementById("mainContent").innerHTML = `
        <h2>User Management</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Role</th>
                <th>Created</th>
            </tr>
            ${rows}
        </table>
    `;
}

// SETTINGS
function showSettings() {
    document.getElementById("mainContent").innerHTML = `
        <h2>Settings</h2>
        <p>Theme: Light</p>
        <p>Notifications: Enabled</p>
        <button onclick="alert('Saved!')">Save Settings</button>
    `;
}

// LOGOUT
function logout() {
    localStorage.clear();
    window.location.href = "login.html";

}


