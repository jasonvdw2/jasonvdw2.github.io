const storeSliderValues = () => {
    let rgb = {};
    let settingsJSON;

    rgb.red = parseInt(document.getElementById("sldRed").value);
    rgb.green = parseInt(document.getElementById("sldGreen").value);
    rgb.blue = parseInt(document.getElementById("sldBlue").value);

    // bewaar settings als JSON string in local storage
    settingsJSON = JSON.stringify(rgb);
    localStorage.setItem("color-settings", settingsJSON);
};

const restoreSliderValues = () => {
    let rgb;
    let settingsJSON = localStorage.getItem("color-settings");

    if (settingsJSON === undefined) {
        rgb = {
            red: 128,
            green: 255,
            blue: 128
        };
    } else {
        rgb = JSON.parse(settingsJSON);
    }

    // vul de invoervelden met de settings-waarden
    document.getElementById("sldRed").value = rgb.red;
    document.getElementById("sldGreen").value = rgb.green;
    document.getElementById("sldBlue").value = rgb.blue;
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let settings = [];
    let settingsJSON;
    let swatches = document.getElementsByClassName(" swatch");
    for(let i =1; i < swatches.length; i++){
        let rgb = {
            red: swatches[i].getAttribute("data-red"),
            green: swatches[i].getAttribute("data-green"),
            blue : swatches[i].getAttribute("data-blue")
        };
        settings.push(rgb)
    }
    // bewaar settings als JSON string in local storage
    settingsJSON = JSON.stringify(settings);
    localStorage.setItem("swatches", settingsJSON);
};

const restoreSwatches = () => {

    let settingsJSON = localStorage.getItem("swatches");
    if(settingsJSON != null){
        let settings = JSON.parse(settingsJSON);
        for(let i = 0;i < settings.length; i++){
            let rgb = settings[i];
            addSwatchComponent(rgb.red, rgb.green, rgb.blue);
        }
    }
};
