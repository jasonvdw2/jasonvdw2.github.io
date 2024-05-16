const setup = () => {
    document.getElementById("btnGo").addEventListener("click", controleerCommando);
    restoreCards();
    document.getElementById("btnClear").addEventListener("click", clearLocalStorage)
}

const controleerCommando = () =>{
    let txtInput = document.getElementById('txtInput');
    let input = txtInput.value;
    let controle = input.match("\/[a-z]{1} [a-z]+");
    if(controle !== null){
        let commandPrefix = input.slice(0, 2).toLowerCase();

        if (commandPrefix === "/g") {
            google(input.slice(3));
        } else if (commandPrefix === "/y") {
            youtube(input.slice(3));
        } else if (commandPrefix === "/x") {
            twitter(input.slice(3));
        } else if (commandPrefix === "/i") {
            instagram(input.slice(3));
        }
        else{
            alert("Unknown command prefix");
        }
        txtInput.value = "";
    }
    else{
        alert("Invalid command");
    }

}
const google = (commandoSuffix) => {
    let url = "https://google.com/search?q="+commandoSuffix;
    window.open(url, '_blank');
    createCardAndAppend("Google", commandoSuffix, url);
    saveLocalStorage("Google", commandoSuffix, url);

}
const youtube = (commandoSuffix) => {
    let url = "https://youtube.com/"+commandoSuffix;
    window.open(url, '_blank');
    createCardAndAppend("Youtube", commandoSuffix, url);
    saveLocalStorage("Youtube", commandoSuffix, url);

}
const twitter = (commandoSuffix) => {
    let url = "https://twitter.com/"+commandoSuffix;
    window.open(url, '_blank');
    createCardAndAppend("Twitter", commandoSuffix, url);
    saveLocalStorage("Twitter", commandoSuffix, url);

}
const instagram = (commandoSuffix) => {
    let url = "https://instagram.com/"+commandoSuffix;
    window.open(url, '_blank');
    createCardAndAppend("Instagram", commandoSuffix, url);
    saveLocalStorage("Instagram", commandoSuffix, url);

}
const createCardAndAppend = (website, commandoSuffix, url) =>{
    let col4 = createElementWithClassName("div", "col-4")
    let card = createElementWithClassName("div", "card");
    card.classList.add(website.toLowerCase()+"-card");
    let cardBody = createElementWithClassName("div", "card-body");
    let cardTitle = createElementWithClassNameAndText("h5", "card-title", website);
    let cardText = createElementWithClassNameAndText("p", "card-text", commandoSuffix);
    let linkGo = createLinkButton(url);
    linkGo.classList.add(website.toLowerCase()+"-button");
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText)
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild(card);
    let row = document.querySelector("#resultContainer > .row");
    row.appendChild(col4);
}
const createLinkButton = (url) =>{
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn btn-primary");
    linkGo.appendChild(document.createTextNode("Go!"));
    return linkGo;
}

const saveLocalStorage = (website, commandoSuffix, url) => {
    let lsHistory;
    let info = {
        website: website,
        commandoSuffix: commandoSuffix,
        url: url
    };
    lsHistory = JSON.parse(localStorage.getItem("cards.history"));
    if(!lsHistory){
        lsHistory = [];
    }
    lsHistory.push(info);
    localStorage.setItem("cards.history", JSON.stringify(lsHistory));
};

const restoreCards = () => {
    let lsHistory = localStorage.getItem("cards.history");
    if(lsHistory != null){
        let settings = JSON.parse(lsHistory);
        for(let i = 0;i < settings.length; i++){
            let info = settings[i];
            createCardAndAppend(info.website, info.commandoSuffix, info.url);
        }
    }
};

const clearLocalStorage = () =>{
    localStorage.removeItem("cards.history");

    let savedCards = document.getElementsByClassName("card");
    for (let i = 0; i < savedCards.length; i++) {
        savedCards[i].remove();
    }

    let rows = document.querySelectorAll("div.row");
    for (let i = 0; i < rows.length; i++) {
        rows[i].remove();
    }
}

const createElementWithClassName = (element, className) =>{
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}
const createElementWithClassNameAndText = (element, className, text) =>{
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
}
window.addEventListener("load", setup);