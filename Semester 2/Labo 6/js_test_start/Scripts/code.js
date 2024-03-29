const setup = () => {
    let keuzeMenu = document.getElementsByName("keuzeMenu")
    keuzeMenu.forEach(function (slt){
        slt.addEventListener('change',  function(){
            let geselecteerdeKeuze = document.querySelector('select[name="keuzeMenu"]').value;
            change(geselecteerdeKeuze);
        });
    });
    document.getElementById("txtLetter").addEventListener("input", controleer);
}

const change = (geselecteerdeKeuze) =>{
    let imgPhoto = document.getElementById("img");
    if(geselecteerdeKeuze === "2"){
        imgPhoto.src = "./Images/with-egg.png";
        imgPhoto.alt = "with-egg";
        document.getElementById("note").innerHTML = "Hierboven, een kip met een ei"
    }
    else if(geselecteerdeKeuze === "3"){
        imgPhoto.src = "./Images/without-egg.png";
        imgPhoto.alt = "without-egg";
        document.getElementById("note").innerHTML = "Hierboven, een kip met zonder een ei"
    }
}

const controleer = () =>{
    let txtZoekText = document.getElementById("txtLetter");
    let zoekText = txtZoekText.value;
    let txtNote = document.getElementById("note");
    let text = txtNote.value;
    let txtAantal = document.getElementById("txtAantal");

    let aantal = tellen(text, zoekText);
    txtAantal.textContent = 'Letter "' + zoekText + '" komt ' + aantal + ' keer voor in bovenstaande zin.';
}

const tellen = (text, zoekText) => {
    let result = 0;
    let index = text.indexOf(zoekText);

    while(index !== -1){
        result++;
        index = text.indexOf(zoekText, index+zoekText.length);
    }
    return result;
}

window.addEventListener("load", setup);
