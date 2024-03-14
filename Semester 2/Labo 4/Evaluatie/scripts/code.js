const setup = () => {
    let imgPhoto = document.getElementById("imgPhoto");
    imgPhoto.addEventListener("mouseover", change);
}
const change = () => {
    let imgPhoto = document.getElementById("imgPhoto");
    imgPhoto.src = "./Images/cat.jpg";
    imgPhoto.alt = "cat";
    imgPhoto.className = "sizePhoto";
    let txtText = document.getElementById("txtText");
    txtText.innerHTML = "School of cats";
}
window.addEventListener("load", setup);