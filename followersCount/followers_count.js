let count = 0; // Initialize count to 0

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post hained 10 followers! Congrats g!")
    } else if (count === 20) {
        alert("Your IG post gained 20 followers nice one boss!")    
    }
}
