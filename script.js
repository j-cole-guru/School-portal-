const loginForm = document.getElementById("loginForm")
const resultsSection = document.getElementById("resultsSection")
const welcomeMessage = document.getElementById("welcomeMessage")
const resultsCards = document.getElementById("resultsCards")

// Dummy student data for testing
const data = {
  MBHS: {
    12345: {
      name: "J. Cole",
      pin: "1111",
      results: { Math: "A", English: "B+", Physics: "A-", Chemistry: "B" },
    },
  },
  OneDeen: {
    54321: {
      name: "Zara",
      pin: "2222",
      results: { Math: "B", English: "A", Physics: "B+", Chemistry: "A-" },
    },
  },
  IMATT: {
    98765: {
      name: "Alie",
      pin: "3333",
      results: {
        Networking: "A",
        Security: "A-",
        Programming: "B+",
        DataScience: "A",
      },
    },
  },
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault()

  // Get student input
  const school = document.getElementById("school").value
  const studentID = document.getElementById("studentID").value
  const pin = document.getElementById("pin").value

  // Check if school and student exist
  if (
    school &&
    data[school][studentID] &&
    data[school][studentID].pin === pin
  ) {
    const student = data[school][studentID]

    // Show welcome message
    welcomeMessage.textContent = `Welcome, ${student.name} (${school})`

    // Show results as cards
    resultsCards.innerHTML = ""
    for (const subject in student.results) {
      const card = `<div class="results-card">
                            <h3>${subject}</h3>
                            <p>Grade: ${student.results[subject]}</p>
                          </div>`
      resultsCards.innerHTML += card
    }

    // Hide login section & show results section
    document.getElementById("loginSection").style.display = "none"
    resultsSection.style.display = "block"
  } else {
    alert("Invalid School, Student ID, or PIN")
  }
})

// ===== Dashboard JS =====
window.onload = function () {
  if (document.getElementById("sampleBtn")) {
    alert("Welcome to the Portal Dashboard!")
  }
}

const btn = document.getElementById("sampleBtn")
if (btn) {
  btn.addEventListener("click", () => {
    alert("You clicked the button!")
  })
}

// ===== Dashboard button logic =====
document.getElementById("schoolsBtn")?.addEventListener("click", () => {
  alert("Load Schools Page (future)")
})

document.getElementById("studentsBtn")?.addEventListener("click", () => {
  alert("Load Students Page (future)")
})

document.getElementById("resultsBtn")?.addEventListener("click", () => {
  alert("Load Results Page (future)")
})

document.getElementById("logoutBtn")?.addEventListener("click", () => {
  window.location.href = "index.html"
})
// Schools Section logic
const schoolsBtn = document.getElementById("schoolsBtn")
const schoolsSection = document.getElementById("schoolsSection")
const schoolsList = document.getElementById("schoolsList")

const schools = ["MBHS", "IMATT College", "Harvard", "Oxford"]

schoolsBtn.addEventListener("click", () => {
  // Show the section
  schoolsSection.style.display = "block"

  // Clear previous list
  schoolsList.innerHTML = ""

  // Add schools dynamically
  schools.forEach(school => {
    const li = document.createElement("li")
    li.textContent = school
    schoolsList.appendChild(li)
  })
})

// ===== Schools Page Logic =====
const schoolsList = document.getElementById("schoolsList")

if (schoolsList) {
  const schools = [
    "Methodist Boys High School (MBHS)",
    "IMATT College",
    "Albert Academy",
    "Prince of Wales",
  ]

  schools.forEach(school => {
    const li = document.createElement("li")
    li.textContent = school
    schoolsList.appendChild(li)
  })
}

function goBack() {
  window.location.href = "schools.html"
}
