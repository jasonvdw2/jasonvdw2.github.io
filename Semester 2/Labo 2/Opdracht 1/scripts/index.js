const setup = () => {
    let pElement = document.getElementById("txtConfirm");
    let pElement2 = document.getElementById("txtPrompt");

    window.alert("Dit is een mededeling");
    var c = window.confirm("Weet u het zeker?");
    var p = window.prompt("Wat is uw naam", "Onbekend");
    if(c === true){
        pElement.innerHTML= "confirm = true";
    }
    else{
        pElement.innerHTML= "confirm = false";
    }
    if(p !== "Onbekend"){
        pElement2.innerHTML= "prompt = true";
    }
    else{
        pElement2.innerHTML= "prompt = false";
    }
}

window.addEventListener("load", setup);


