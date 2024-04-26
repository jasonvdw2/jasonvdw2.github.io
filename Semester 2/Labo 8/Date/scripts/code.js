const setup = () => {
    let start = new Date(); //system date
    console.log(start);

    //dag van de week
    console.log(start.getDay());

    //maand
    console.log(start.getMonth()+1);
    //jaar
    console.log(start.getFullYear());
    //dag
    console.log(start.getDate());

    console.log(start.getDate() + "/" + (start.getMonth()+1) + "/" + start.getFullYear() + " "
        + start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds());

    let datum = new Date(2024,0,1);
    console.log(datum);

    let event = new Date();
    console.log("toString " + event.toString());
    //ISO het is eerder een notatieconventie voor het weergeven van tijdstippen
    console.log("toISOString " + event.toISOString());
    console.log("toDateString " + event.toDateString());
    console.log("toTimeString " + event.toTimeString());

    let geboortedatum = new Date(2005, 10, 4);

    console.log("Ik ben " + Math.floor((start - geboortedatum)/86400000) + " dagen oud");
    console.log(geboortedatum.getDay());

    let examens = new Date(2024, 4, 29);

    console.log("Nog " + Math.floor((examens - start)/86400000) + " dagen tot de examens");
}
window.addEventListener("load", setup);