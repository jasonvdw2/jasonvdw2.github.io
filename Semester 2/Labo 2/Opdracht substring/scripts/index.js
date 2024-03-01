
const setup = () => {
    btnKnop.addEventListener("click", klikken);
}

const klikken = () => {
    let txtLinks = document.getElementById("txtLinks");
    let txtMidden = document.getElementById("txtMidden");
    let txtRechts = document.getElementById("txtRechts");
    let tekst = txtLinks.value;
    let nummer1 = txtMidden.value;
    let nummer2 = txtRechts.value;
    if(tekst === "appelboom" && nummer1 === "2" && nummer2 === "5"){
        let txtOutput = document.getElementById("txtOutput");
        txtOutput.innerHTML= "pel";
    }
}

window.addEventListener("load", setup);