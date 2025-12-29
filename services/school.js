const BASE_URL = 'https://school-portal-backend-ysn7.onrender.com'
const container = document.getElementById('schools_container')
let data = []

const getAllSchools =  async () => {
    const res = await fetch(`${BASE_URL}/api/schools`)
    data = await res.json()
    const schools_html = data.map((school, index) => (`<h1>${school.schoolname}</h1>`))
    console.log(data)
    container.innerHTML += schools_html.join(' ')
}

const createSchool = async (schoolName) => {
    let school = {schoolname: schoolName}
    const res = await fetch(`${BASE_URL}/api/schools`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(school)
    })

    const savedSchool = await res.json()

    console.log(savedSchool)

    data = [...data, savedSchool]
    const schools_html = data.map((school, index) => (`<h1>${school.schoolname}</h1>`))
    container.innerHTML = ''
    container.innerHTML += schools_html.join(' ')
    
}

document.getElementById('schoolForm').addEventListener('submit', async function(e) {
    e.preventDefault()
    const schoolname = document.getElementById('schoolname').value
    if (!schoolname){
        alert('school name field should not be empty')
        return
    }

    await createSchool(schoolname)

})

getAllSchools()