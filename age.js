
function calculateAge() {
    let birthYear = document.getElementById("birthYear").value;
    
    let yearNow = new Date().getFullYear();
    let age = yearNow - birthYear;

    document.getElementById("ageOutput").innerHTML = `You are ${age } years old.`;
}

function calculateDays() {
    const birthDate = new Date(document.getElementById("birthDate").value);
    
    const oneDay = 24 * 60 * 60 * 1000; 
    const daysLived = Math.floor((new Date() - birthDate) / oneDay); 

    document.getElementById("daysOutput").innerHTML = `You have lived ${daysLived} days.`;
}
