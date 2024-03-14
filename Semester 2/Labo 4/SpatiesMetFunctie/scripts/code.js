const setup = () => {
    let btnKnop = document.getElementById("btnKnop");

    btnKnop.addEventListener("click", toon)
}
const toon = () =>{
    let inputText = document.getElementById("txtInput");
    maakMetSpaties(inputText);
}

const maakMetSpaties = (inputText) => {
    let result="";
    let text = inputText.value;
    for(let i=0; i < text.length; i++){
        result+=text.charAt(i);
        result+=" ";
    }

    return result;
}
console.log(maakMetSpaties());

window.addEventListener("load", setup);