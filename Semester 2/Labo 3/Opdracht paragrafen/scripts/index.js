const setup = () => {
	let element = document.getElementsByClassName("belangrijk");
    for(let i = 0; i < element.length; i++){
        element[i].classList.add("opvallend");
    }
}

window.addEventListener("load", setup);