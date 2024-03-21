const setup = () => {
    document.getElementById("btnKnop").addEventListener("click", click);

}
const click = () => {
    /*
    let txtText = document.getElementById("txtInput");
    let text = txtText.value;
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML= vervangen(text);
    */
    let text = "Gisteren zat de jongen op de stoep en at de helft van de appel";

    let txtOutput = vervangAlles(text, "de", "het");
    console.log(txtOutput);
}
const vervangAlles = (tekst, oud, nieuw) =>{
    let result = tekst;
    let index = result.indexOf(oud);
    while(index !== -1){
        //bereken het stuk voor de gevonden tekst
        let voor = result.slice(0, index);
        //bereken het stuk na de gevonden tekst
        let na = result.slice(index+oud.length, result.length);
        //vervangen van de gevonden tekst door de stukken aan elkaar te hangen
        result = voor+nieuw+na;
        index=result.indexOf(oud, index+nieuw.length);
    }
    return result;
}
/*const vervangen = (text) => {
    let resultArr = text.split("de");
    resultArr.join("het");
    return resultArr;
}*/
window.addEventListener("load", setup);