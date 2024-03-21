const setup = () => {
    gemeenten();
}

const gemeenten = () =>{
    let txtOutput = document.getElementById("gemeenten");
    let input = window.prompt("Gemeente: ", "");
    let gemeente = [];
    while(input.trim().toLowerCase() !== "stop"){
        gemeente.push(input);
        input = window.prompt("Gemeente: ", "");
    }
    gemeente.sort(compare);
    for(let i = 0; i < gemeente.length; i++){
        txtOutput.innerHTML += "<option>" + gemeente[i] + "</option>";
    }
}

const compare = (a, b) => {
    return a.localeCompare(b);
}
window.addEventListener("load", setup);