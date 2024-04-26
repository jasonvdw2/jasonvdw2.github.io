let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    let elements = document.querySelectorAll(".invalid");
    if (elements.length === 0){
        let persoon = {};
        if (lstPersonen.selectedIndex === -1){
            vulPersoonOpBasisVanUserInterface(persoon);
            personen.push(persoon);
            voegPersoonToeAAnLijstInUserInterface(persoon);
        } else {
            persoon = personen[lstPersonen.selectedIndex];
            vulUserInterfaceOpBasisVanPersoon(persoon);
            updatePersoonInLijstInUserInterface(persoon);
        }
    }
    // Indien oké, bewaar de ingegeven data.
        // Een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};
const vulUserInterfaceOpBasisVanPersoon = (persoon) =>{
    document.getElementById("txtVoornaam").value = persoon.voornaam;

    document.getElementById("txtFamilienaam").value = persoon.familienaam;

    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum.toISOString();

    document.getElementById("txtEmail").value = persoon.email;
}

const vulPersoonOpBasisVanUserInterface = (persoon) =>{
    let txtVoornaam = document.getElementById("txtVoornaam");
    persoon.voornaam = txtVoornaam.value.trim();

    let txtFamilienaam = document.getElementById("txtFamilienaam");
    persoon.familienaam = txtFamilienaam.value.trim();

    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    persoon.geboorteDatum = new Date(txtGeboorteDatum.value.trim());

    let txtEmail = document.getElementById("txtEmail");
    persoon.email = txtEmail.value.trim();

    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    persoon.aantalKinderen = parseInt(txtAantalKinderen.value.trim());
}
const voegPersoonToeAAnLijstInUserInterface = (persoon) =>{
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.text = persoon.voornaam + " " + persoon.familienaam;
    option.value = persoon.email;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length - 1;
}
const updatePersoonInLijstInUserInterface = (persoon) =>{
    let lstPersonen = document.getElementById("lstPersonen");
    let option = lstPersonen.options[lstPersonen.selectedIndex];
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    /*
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    */

    let inputElem= document.querySelectorAll('input[type=text]');

    inputElem.forEach((elem) =>{
        elem.value = "";
    });

    clearAllErrors();
};

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", updatePersoonInLijstInUserInterface);
    // Voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};
window.addEventListener("load", setup);