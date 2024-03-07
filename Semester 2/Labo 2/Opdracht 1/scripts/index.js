const setup = () => {

    window.alert("Dit is een mededeling");

    var c = window.confirm("Weet u het zeker?");
    if(c === true){
        console.log("Confirm: true");
    }
    else{
        console.log("Confirm: false");
    }

    var p = window.prompt("Wat is uw naam", "Onbekend");
    if(p !== "Onbekend"){
        console.log("Prompt: true");
    }
    else{
        console.log("Prompt: false");
    }
}

window.addEventListener("load", setup);


