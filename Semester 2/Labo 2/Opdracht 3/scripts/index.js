const setup = () => {
    btnKnop.addEventListener("click", klikken);
}

const klikken = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML= "Welkom!";
}
window.addEventListener("load", setup);