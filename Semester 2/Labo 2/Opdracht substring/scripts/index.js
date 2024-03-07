
const setup = () => {
    btnKnop.addEventListener("click", klikken);
}

const klikken = () => {
    let txtLinks = document.getElementById("txtLinks");
    let txtMidden = document.getElementById("txtMidden");
    let txtRechts = document.getElementById("txtRechts");
    let txtOutput = document.getElementById("txtOutput");

    let tekst = txtLinks.value;
    let nummer1 = parseInt(txtMidden.value, 10); // 10 -> decimaal stelsel
    let nummer2 = parseInt(txtRechts.value, 10);

    let resultaat = tekst.substring(nummer1, nummer2);
    txtOutput.innerHTML = resultaat;
}

window.addEventListener("load", setup);

/*
p-element -> inhoud InnerHTML  <p id="txtTekst">dit is een test </p>

input-elememt -> inhoud Value  <input id="txtName" type="text">*/