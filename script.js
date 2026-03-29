function searchCar() {
    const inputField = document.getElementById('search');
    
    if (inputField) {
        const query = inputField.value.toLowerCase().trim();

        const carPages = {
            "mercedes": "merclassS.html",
            "porsche": "porshe.html", 
            "range rover": "rangeroversport.html",
            "mercedes": "MER.html",
            "bmw x6": "BMWX6.html",
            "bmw m5": "BMWM5.html"
        };

        if (carPages[query]) {
            window.location.href = carPages[query];
        } else if (query !== "") {
            alert("Voiture non trouvée.");
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("search");
    if (inputField) {
        inputField.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                searchCar();
            }
        });
    }
});