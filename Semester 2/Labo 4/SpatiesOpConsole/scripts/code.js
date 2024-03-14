const setup = () => {
    let btnKnop = document.getElementById("btnKnop");

    btnKnop.addEventListener("click", toon)
}

const toon = () =>{
    let txtInput = document.getElementById("txtInput");
    let text = txtInput.value;
    let textMetSpaties = "";

    for(let i=0; i < text.length; i++){
        textMetSpaties+=text.charAt(i);
        textMetSpaties+=" ";
    }
    console.log(textMetSpaties);
}
window.addEventListener("load", setup);