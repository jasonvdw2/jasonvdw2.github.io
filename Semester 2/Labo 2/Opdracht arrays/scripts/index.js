let  setup = () => {
    let familieLeden = ["Matisse", "Feline", "Bert", "Petra", "Jennifer"];

    console.log (familieLeden.length);

    for (let i = 0; i < familieLeden.length; i=i+2)
    {
        console.log("familielid " + familieLeden[i] );
    }

    // oproepen functie (doorgeven via
    voegNaamToe(familieLeden);

    console.log (familieLeden.join(" - "));
}

const voegNaamToe = (leden) =>
{
    let naam =    prompt("voeg een naam toe");
    leden.push(naam);
    for (let i = 0; i < leden.length; i++)
    {
        console.log("familielid " + leden[i] );
    }
}

window.addEventListener("load", setup);