const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	//alle methodes oproepen
	valideerVoornaam();
	valideerFamilieNaam();
	valideerGeboortedatum();
	valideerEmail();
	valideerAantalKinderen();

	//checken of alle velden goed zijn ingevuld
	if(!document.querySelector('.invalid')){
		alert('Proficiat!');
	}
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let voornaam = txtVoornaam.value.trim();

	//checken hoe lang de voornaam is en een errorcode terug geven indien deze te lang is
	if (voornaam.length > 30) {
		reportError(txtVoornaam, "max. 30 karakters");
	} else {
		clearError(txtVoornaam);
	}
};

const valideerFamilieNaam = () => {
	let txtFamilienaam = document.getElementById("txtFamilienaam");
	let familienaam = txtFamilienaam.value.trim();

	//checken of het veld leeg is
	//checken hoe lang de familienaam is en een errorcode terug geven indien deze te lang is
	if(controleLeegVeld(txtFamilienaam, familienaam) === true) {
		reportError(txtFamilienaam, "verplicht veld");
	} else if (familienaam.length > 50) {
		reportError(txtFamilienaam, "max. 50 karakters");
	} else {
		clearError(txtFamilienaam);
	}
};

const valideerGeboortedatum = () => {
	let txtGeboortedatum = document.getElementById("txtGeboorteDatum");
	let geboortedatum = txtGeboortedatum.value.trim();

	//checken of het veld leeg is
	//checken of de geboortedatum op de juiste manier is opgesteld, zo niet error terug geven
	if(controleLeegVeld(txtGeboortedatum, geboortedatum) === true) {
		reportError(txtGeboortedatum, "verplicht veld");
	} else if (!geboortedatum.match(/^\d{4}-\d{2}-\d{2}$/)) {
		reportError(txtGeboortedatum, "formaat is niet jjjj-mm-dd");
	} else {
		clearError(txtGeboortedatum);
	}
};

const valideerEmail = () => {
	let txtEmail = document.getElementById("txtEmail");
	let email = txtEmail.value.trim();

	//checken of het veld leeg is
	//checken of de email op de juiste manier is opgesteld en als dit niet zo is een error terug geven
	if(controleLeegVeld(txtEmail, email) === true) {
		reportError(txtEmail, "verplicht veld");
	} else if (email.indexOf("@") === -1 || email.indexOf("@") !== email.lastIndexOf("@")) {
		reportError(txtEmail, "geen geldig email adres");
	} else {
		let atIndex = email.indexOf("@");
		let beforeAt = email.substring(0, atIndex);
		let afterAt = email.substring(atIndex + 1);
		if (beforeAt.length < 1 || afterAt.length < 1){
			reportError(txtEmail, "geen geldig email adres")
		} else {
			clearError(txtEmail);
		}
	}
};

const  valideerAantalKinderen = () => {

	let nbAantalkinderen = document.getElementById("txtAantalKinderen");
	let aantalkinderen = nbAantalkinderen.value;

	//checken of het aantal kinderen een positief getal is en of je niet meer dan 98 kinderen hebt
	if( aantalkinderen < 0 || isNaN(aantalkinderen)) {
		reportError(nbAantalkinderen, "is geen positief getal");
	} else if (aantalkinderen >= 99) {
		reportError(nbAantalkinderen, "is te vruchtbaar");
	} else {
		clearError(nbAantalkinderen);
	}
};

//methode om te controleren of het veld leeg is of niet
const controleLeegVeld = (inputElement, valueElement) => {
	return valueElement === "";
}

//methode om de error terug te geven
const reportError = (element, message) => {
	element.className="invalid";
	element.nextElementSibling.innerHTML = message;
};

//methode om de error te verwijderen
const clearError = (element) => {
	element.className="";
	element.nextElementSibling.innerHTML = "";
};

window.addEventListener("load", setup);