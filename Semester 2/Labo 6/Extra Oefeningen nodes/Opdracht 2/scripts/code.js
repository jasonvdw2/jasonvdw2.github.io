const setup = () => {
    //alle elementen overlopen en een klasse aan koppelen
    let liNodelist = document.querySelectorAll("li");
    for (let i = 0; i < liNodelist.length; i++) {
        liNodelist[i].setAttribute("class", "listitem")
    }
    //foto toevoegen aan de pagina
    let img = document.createElement("img");
    img.setAttribute("src", "Images/DSC_0328.jpg");
    document.body.appendChild(img);
}
window.addEventListener("load", setup);