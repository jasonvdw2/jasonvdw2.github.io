const setup = () => {
    let par = document.querySelectorAll('p');
    par[0].textContent = "Good job!";
}
window.addEventListener("load", setup);