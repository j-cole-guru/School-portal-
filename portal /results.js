window.onload = function() {
    // This "reads" the data we saved on the login page
    document.getElementById('displaySchool').innerText = localStorage.getItem('userSchool');
    document.getElementById('displayID').innerText = localStorage.getItem('userID');
};
