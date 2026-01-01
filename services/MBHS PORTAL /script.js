// ===== LOGIN / SIGNUP / FORGOT =====
document.getElementById("loginForm")?.addEventListener("submit", e => {
    e.preventDefault();
    // TODO: connect with backend login API
    window.location.href = "dashboard.html";
});

document.getElementById("signupForm")?.addEventListener("submit", e => {
    e.preventDefault();
    // TODO: send signup API
    alert("Confirmation email sent.");
    window.location.href = "dashboard.html";
});

document.getElementById("forgotForm")?.addEventListener("submit", e => {
    e.preventDefault();
    // TODO: send reset password API
    alert("Password reset link sent.");
});

// ===== STUDENT RESULT + CLASS STATS =====
const studentData = {
    name: "John Kamara",
    results: { Math: 75, English: 68, Physics: 82, Chemistry: 70 },
    classData: [
        { name: "John Kamara", results: { Math: 75, English: 68, Physics: 82, Chemistry: 70 } },
        { name: "Abdul Conteh", results: { Math: 60, English: 72, Physics: 70, Chemistry: 65 } },
        { name: "Mary Kamara", results: { Math: 80, English: 75, Physics: 78, Chemistry: 72 } }
    ]
};

// Fill student results table dynamically
const table = document.getElementById("studentResults");
if (table) {
    Object.entries(studentData.results).forEach(([subject, score]) => {
        const tr = document.createElement("tr");
        const grade = score >= 70 ? "A" : score >= 60 ? "B" : score >= 50 ? "C" : "F";
        tr.innerHTML = `<td>${subject}</td><td>${score}</td><td>${grade}</td>`;
        table.appendChild(tr);
    });
}

// Calculate class statistics
function calculateClassStats(classData) {
    const subjects = Object.keys(classData[0].results);
    const totals = {};
    subjects.forEach(sub => totals[sub] = 0);

    classData.forEach(student => {
        subjects.forEach(sub => totals[sub] += student.results[sub]);
    });

    const averages = {};
    subjects.forEach(sub => averages[sub] = (totals[sub] / classData.length).toFixed(1));

    const classAvg = (Object.values(totals).reduce((a,b)=>a+b,0) / (classData.length*subjects.length)).toFixed(1);
    return { averages, classAvg };
}

const stats = calculateClassStats(studentData.classData);
document.getElementById("classAvg")?.innerText = stats.classAvg;

// Render class performance chart using Chart.js
if (document.getElementById("chart")) {
    new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
            labels: Object.keys(stats.averages),
            datasets: [{
                label: "Class Average",
                data: Object.values(stats.averages),
                backgroundColor: "#0b3c5d"
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true, max: 100 }
            }
        }
    });
}

document.getElementById("signupForm")?.addEventListener("submit", async (e) => {
    e.preventDefault(); // Stop page reload

    const email = e.target[0].value.trim();
    const password = e.target[1].value.trim();

    // TEMP: simulate backend verification
    if (email && password) {
        alert("Confirmation email sent!"); // user sees this
        window.location.href = "dashboard.html"; // go to dashboard
    } else {
        alert("Please enter email and password.");
    }
});


document.getElementById("forgotForm")?.addEventListener("submit", async (e) => {
    e.preventDefault(); // Stop page reload

    const email = e.target[0].value.trim();

    if (email) {
        alert("Password reset link sent to your email!"); // user sees this
        window.location.href = "index.html"; // back to login
    } else {
        alert("Please enter your email.");
    }
});