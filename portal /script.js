const loginForm = document.getElementById('loginForm');
const resultsSection = document.getElementById('resultsSection');
const welcomeMessage = document.getElementById('welcomeMessage');
const resultsCards = document.getElementById('resultsCards');

// Dummy student data for testing
const data = {
    MBHS: {
        "12345": { name: "J. Cole", pin: "1111", results: { Math: "A", English: "B+", Physics: "A-", Chemistry: "B" } }
    },
    OneDeen: {
        "54321": { name: "Zara", pin: "2222", results: { Math: "B", English: "A", Physics: "B+", Chemistry: "A-" } }
    },
    IMATT: {
        "98765": { name: "Alie", pin: "3333", results: { Networking: "A", Security: "A-", Programming: "B+", DataScience: "A" } }
    }
};

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get student input
    const school = document.getElementById('school').value;
    const studentID = document.getElementById('studentID').value;
    const pin = document.getElementById('pin').value;

    // Check if school and student exist
    if(school && data[school][studentID] && data[school][studentID].pin === pin) {
        const student = data[school][studentID];

        // Show welcome message
        welcomeMessage.textContent = `Welcome, ${student.name} (${school})`;

        // Show results as cards
        resultsCards.innerHTML = '';
        for(const subject in student.results) {
            const card = `<div class="results-card">
                            <h3>${subject}</h3>
                            <p>Grade: ${student.results[subject]}</p>
                          </div>`;
            resultsCards.innerHTML += card;
        }

        // Hide login section & show results section
        document.getElementById('loginSection').style.display = 'none';
        resultsSection.style.display = 'block';
    } else {
        alert('Invalid School, Student ID, or PIN');
    }
});

document.getElementById('loginBtn').addEventListener('click', function() {
    const school = document.querySelector('input[placeholder="Type your school name"]').value;
    const studentID = document.querySelector('input[placeholder="Enter your Student ID"]').value;

    if (school && studentID) {
        // This "remembers" the data for the next page
        localStorage.setItem('userSchool', school);
        localStorage.setItem('userID', studentID);
        window.location.href = 'results.html';
    } else {
        alert("Please enter your details.");
    }
});

