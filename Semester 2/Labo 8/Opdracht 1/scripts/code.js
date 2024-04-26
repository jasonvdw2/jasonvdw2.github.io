const setup = () => {

    let start = new Date(); //system date

    let geboortedatum = new Date(2005, 10, 4);

    console.log("Ik ben " + Math.floor((start - geboortedatum)/86400000) + " dagen oud");
}
window.addEventListener("load", setup);