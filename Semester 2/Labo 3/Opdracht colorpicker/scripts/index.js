const setup = () => {
    let colorDemos=document.getElementsByClassName("colorDemo");

    let sliderRed = document.getElementsByClassName("sliderRed");
    let sliderGreen = document.getElementsByClassName("sliderGreen");
    let sliderBlue = document.getElementsByClassName("sliderBlue");

    sliderRed[0].addEventListener("change", update);
    sliderRed[0].addEventListener("input", update);

    sliderGreen[0].addEventListener("change", update);
    sliderGreen[0].addEventListener("input", update);

    sliderBlue[0].addEventListener("change", update);
    sliderBlue[0].addEventListener("input", update);

    colorDemos[0].style.backgroundColor = "rgb(128,255,128)";
}

const update = () => {
    let colorDemos=document.getElementsByClassName("colorDemo");

    let sliderRed = document.getElementsByClassName("sliderRed");
    let outputRed = document.getElementById("txtOutputRed");

    let sliderGreen = document.getElementsByClassName("sliderGreen");
    let outputGreen = document.getElementById("txtOutputGreen");

    let sliderBlue = document.getElementsByClassName("sliderBlue");
    let outputBlue = document.getElementById("txtOutputBlue");

    outputRed.innerHTML = sliderRed[0].value;
    outputGreen.innerHTML = sliderGreen[0].value;
    outputBlue.innerHTML = sliderBlue[0].value;

    colorDemos[0].style.backgroundColor = "rgb(" + sliderRed[0].value + "," + sliderGreen[0].value + "," + sliderBlue[0].value + ")";
}

window.addEventListener("load", setup);